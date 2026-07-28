const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

let webPush = null;
try {
  webPush = require("web-push");
} catch {
  webPush = null;
}

let PgPool = null;
try {
  PgPool = require("pg").Pool;
} catch {
  PgPool = null;
}

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const dataDir = path.join(root, "data");
const dbPath = path.join(dataDir, "db.json");
const vapidPath = path.join(dataDir, "vapid.json");
const pgPool = process.env.DATABASE_URL && PgPool
  ? new PgPool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL === "false" ? false : { rejectUnauthorized: false }
    })
  : null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".wav": "audio/wav",
  ".json": "application/json; charset=utf-8"
};

const premiumMedia = {
  "breathwork-day-1": "breathwork-day-1.wav",
  "breathwork-01-simply-breathe": "breathwork-01-simply-breathe.mp4",
  "breathwork-02-receive-gods-peace": "breathwork-02-receive-gods-peace.mp4"
};

const DEFAULT_REMINDER_MESSAGE = "Walk With God: Take your next step with God today. Open today's focus: https://walk-with-god.org";

function defaultSettings() {
  return {
    reminderMessage: DEFAULT_REMINDER_MESSAGE
  };
}

function ensureData() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dbPath)) {
    writeLocalDb(defaultDb());
  }
  if (!fs.existsSync(vapidPath)) {
    if (webPush) {
      fs.writeFileSync(vapidPath, JSON.stringify(webPush.generateVAPIDKeys(), null, 2));
    } else {
      fs.writeFileSync(vapidPath, JSON.stringify({ publicKey: "", privateKey: "" }, null, 2));
    }
  } else if (webPush) {
    const vapid = JSON.parse(fs.readFileSync(vapidPath, "utf8"));
    if (!vapid.publicKey || !vapid.privateKey) {
      fs.writeFileSync(vapidPath, JSON.stringify(webPush.generateVAPIDKeys(), null, 2));
    }
  }
}

function defaultDb() {
  return {
    users: [],
    sessions: [],
    posts: [],
    progress: [],
    notes: [],
    reminders: [],
    pushSubscriptions: [],
    feedback: [],
    reports: [],
    supportMessages: [],
    prayerRequests: [],
    prayerClicks: [],
    reactions: [],
    comments: [],
    premiumContent: [],
    settings: defaultSettings()
  };
}

function defaultPremiumContent() {
  return [
    {
      id: "premium-bible-class-foundations",
      type: "Scripture Journey",
      title: "Foundations of Walking With God",
      description: "A guided Scripture journey for learning how prayer, obedience, community, and daily habits work together.",
      length: "4 lessons",
      scripture: "Micah 6:8",
      access: "premium",
      createdAt: "2026-05-31T00:00:00.000Z"
    },
    {
      id: "premium-movement-prayer-walk",
      type: "Faith in Practice",
      title: "Prayer Walk Practice",
      description: "A gentle outdoor Abide practice built around breath, gratitude, intercession, and listening prayer.",
      length: "20 minutes",
      scripture: "Psalm 23:3",
      access: "premium",
      createdAt: "2026-05-31T00:00:00.000Z"
    },
    {
      id: "premium-breathwork-peace",
      type: "Breathwork Prayer",
      title: "Peace Before the Lord",
      description: "A slow Scripture-rooted breath prayer for releasing hurry and returning your attention to God's presence.",
      length: "12 minutes",
      scripture: "John 14:27",
      access: "premium",
      createdAt: "2026-05-31T00:00:00.000Z"
    },
    {
      id: "premium-study-temple",
      type: "Guided Reflection",
      title: "Honoring the Temple God Gave You",
      description: "A whole-person Abide journey on body stewardship, rest, food, movement, and worship.",
      length: "7 days",
      scripture: "1 Corinthians 6:19-20",
      access: "premium",
      createdAt: "2026-05-31T00:00:00.000Z"
    }
  ];
}

function normalizeDb(db) {
  const normalized = { ...defaultDb(), ...(db || {}) };
  for (const key of Object.keys(defaultDb())) {
    if (Array.isArray(defaultDb()[key]) && !Array.isArray(normalized[key])) normalized[key] = [];
  }
  normalized.settings = { ...defaultSettings(), ...(normalized.settings || {}) };
  normalized.settings.reminderMessage = normalizeText(normalized.settings.reminderMessage, 240) || DEFAULT_REMINDER_MESSAGE;
  normalized.prayerClicks = normalized.prayerClicks
    .map(normalizePrayerClick)
    .filter((item) => item.id && item.title);
  if (!normalized.premiumContent.length) {
    normalized.premiumContent = defaultPremiumContent();
  } else {
    const refreshedDefaults = new Map(defaultPremiumContent().map((item) => [item.id, item]));
    normalized.premiumContent = normalized.premiumContent.map((item) => {
      const refreshed = refreshedDefaults.get(item.id);
      return refreshed ? { ...item, ...refreshed } : item;
    });
  }
  return normalized;
}

function sharedReminderMessage(db) {
  return normalizeText(db?.settings?.reminderMessage, 240) || DEFAULT_REMINDER_MESSAGE;
}

function readLocalDb() {
  ensureData();
  return normalizeDb(JSON.parse(fs.readFileSync(dbPath, "utf8")));
}

function writeLocalDb(db) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(dbPath, JSON.stringify(normalizeDb(db), null, 2));
}

async function ensurePostgres() {
  if (!pgPool) return;
  await pgPool.query(`
    CREATE TABLE IF NOT EXISTS app_state (
      id INTEGER PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pgPool.query(
    `INSERT INTO app_state (id, data)
     VALUES (1, $1::jsonb)
     ON CONFLICT (id) DO NOTHING`,
    [JSON.stringify(defaultDb())]
  );
}

async function readDb() {
  if (!pgPool) return readLocalDb();
  await ensurePostgres();
  const result = await pgPool.query("SELECT data FROM app_state WHERE id = 1");
  return normalizeDb(result.rows[0]?.data || defaultDb());
}

async function writeDb(db) {
  if (!pgPool) {
    writeLocalDb(db);
    return;
  }
  await ensurePostgres();
  await pgPool.query(
    "UPDATE app_state SET data = $1::jsonb, updated_at = NOW() WHERE id = 1",
    [JSON.stringify(normalizeDb(db))]
  );
}

function readVapid() {
  ensureData();
  return JSON.parse(fs.readFileSync(vapidPath, "utf8"));
}

function json(response, status, body, headers = {}) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...headers });
  response.end(JSON.stringify(body));
}

function twiml(response, message) {
  const safeMessage = String(message)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
  response.writeHead(200, { "Content-Type": "text/xml; charset=utf-8" });
  response.end(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>${safeMessage}</Message></Response>`);
}

function parseCookies(request) {
  return Object.fromEntries(
    (request.headers.cookie || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Body too large"));
      }
    });
    request.on("end", () => {
      try {
        if (!body) return resolve({});
        if (String(request.headers["content-type"] || "").includes("application/x-www-form-urlencoded")) {
          return resolve(Object.fromEntries(new URLSearchParams(body)));
        }
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid request body"));
      }
    });
  });
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return { salt, hash };
}

function verifyPassword(password, user) {
  const attempted = hashPassword(password, user.salt).hash;
  return crypto.timingSafeEqual(Buffer.from(attempted, "hex"), Buffer.from(user.passwordHash, "hex"));
}

function publicUser(user) {
  return user
    ? {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        subscriptionStatus: user.subscriptionStatus || "free",
        mailingAddress: user.mailingAddress || null
      }
    : null;
}

function phoneDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function currentUser(request, db) {
  const sid = parseCookies(request).sid;
  if (!sid) return null;
  const session = db.sessions.find((item) => item.id === sid && item.expiresAt > Date.now());
  if (!session) return null;
  return db.users.find((user) => user.id === session.userId) || null;
}

function requireUser(request, response, db) {
  const user = currentUser(request, db);
  if (!user) {
    json(response, 401, { error: "Sign in required." });
    return null;
  }
  return user;
}

function requireAdmin(request, response, db) {
  const user = requireUser(request, response, db);
  if (!user) return null;
  if (user.role !== "admin") {
    json(response, 403, { error: "Admin access required." });
    return null;
  }
  return user;
}

function normalizeText(value, max = 2000) {
  return String(value || "").trim().slice(0, max);
}

function normalizeMailingAddress(value) {
  if (!value || typeof value !== "object") return null;
  const address = {
    line1: normalizeText(value.line1, 120),
    line2: normalizeText(value.line2, 120),
    city: normalizeText(value.city, 80),
    state: normalizeText(value.state, 60),
    postalCode: normalizeText(value.postalCode, 30),
    country: normalizeText(value.country, 80) || "United States"
  };
  return Object.values(address).some(Boolean) ? address : null;
}

function normalizeChannels(value) {
  return {
    push: value?.push !== false,
    email: Boolean(value?.email),
    sms: Boolean(value?.sms)
  };
}

function normalizePrayerClick(item) {
  return {
    id: normalizeText(item?.id, 160),
    title: normalizeText(item?.title, 160),
    category: normalizeText(item?.category, 80),
    scripture: normalizeText(item?.scripture, 160),
    count: Math.max(0, Number(item?.count) || 0),
    lastOpenedAt: normalizeText(item?.lastOpenedAt, 40)
  };
}

function localReminderInfo(date, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: timeZone || "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );
  const hour = Number(parts.hour) % 24;
  const minute = Number(parts.minute);
  return {
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
    minuteOfDay: hour * 60 + minute
  };
}

function reminderTimeToMinutes(value) {
  const match = String(value || "").match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return 7 * 60;
  const hour = Math.max(0, Math.min(23, Number(match[1])));
  const minute = Math.max(0, Math.min(59, Number(match[2])));
  return hour * 60 + minute;
}

function shouldSendScheduledReminder(reminder, now = new Date()) {
  const local = localReminderInfo(now, reminder.timeZone || "America/New_York");
  if (reminder.lastSentDate === local.dateKey) return false;
  const scheduledMinute = reminderTimeToMinutes(reminder.time || "07:00");
  const minutesAfterScheduledTime = local.minuteOfDay - scheduledMinute;
  return minutesAfterScheduledTime >= 0 && minutesAfterScheduledTime <= 180;
}

function userMetrics(userId, db) {
  const progress = db.progress.filter((item) => item.userId === userId);
  const notes = db.notes.filter((item) => item.userId === userId);
  const posts = db.posts.filter((item) => item.userId === userId && !item.hiddenAt);
  const reminder = db.reminders.find((item) => item.userId === userId) || null;
  const pushCount = db.pushSubscriptions.filter((item) => item.userId === userId).length;
  return {
    completedDays: progress.length,
    privateNotes: notes.length,
    communityPosts: posts.length,
    reminder,
    pushSubscriptions: pushCount
  };
}

function configurePush() {
  if (!webPush) return false;
  const vapid = readVapid();
  if (!vapid.publicKey || !vapid.privateKey) return false;
  webPush.setVapidDetails(
    process.env.VAPID_SUBJECT || "mailto:admin@walkwithgod.local",
    vapid.publicKey,
    vapid.privateKey
  );
  return true;
}

async function sendPush(subscription, payload) {
  if (!configurePush()) {
    return { ok: false, error: "web-push is not installed or VAPID keys are missing." };
  }
  await webPush.sendNotification(subscription, JSON.stringify(payload));
  return { ok: true };
}

async function sendEmail(to, payload) {
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
    return { ok: false, error: "SendGrid settings are not configured." };
  }
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.EMAIL_FROM, name: "Walk With God" },
      subject: payload.title || "Walk With God",
      content: [{ type: "text/plain", value: payload.body || DEFAULT_REMINDER_MESSAGE }]
    })
  });
  if (!response.ok) {
    return { ok: false, error: `SendGrid returned ${response.status}.` };
  }
  return { ok: true };
}

async function sendSms(to, payload) {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_FROM) {
    return { ok: false, error: "Twilio settings are not configured." };
  }
  const credentials = Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString("base64");
  const form = new URLSearchParams({
    From: process.env.TWILIO_FROM,
    To: to,
    Body: payload.body || DEFAULT_REMINDER_MESSAGE
  });
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: form
  });
  if (!response.ok) {
    const details = await response.text();
    return { ok: false, error: `Twilio returned ${response.status}: ${details.slice(0, 500)}` };
  }
  const data = await response.json();
  return { ok: true, sid: data.sid, status: data.status };
}

async function sendReminderForUser(db, reminder, payload) {
  const results = [];
  if (reminder.channels?.push) {
    const subscriptions = db.pushSubscriptions.filter((item) => item.userId === reminder.userId);
    if (!subscriptions.length) {
      results.push({ channel: "push", ok: false, error: "No app notification device is enabled for this account." });
    }
    for (const item of subscriptions) {
      try {
        results.push({ channel: "push", ...(await sendPush(item.subscription, payload)) });
      } catch (error) {
        results.push({ channel: "push", ok: false, error: error.message });
      }
    }
  }
  if (reminder.channels?.email && reminder.email) {
    try {
      results.push({ channel: "email", ...(await sendEmail(reminder.email, payload)) });
    } catch (error) {
      results.push({ channel: "email", ok: false, error: error.message });
    }
  }
  if (reminder.channels?.sms && reminder.phone) {
    try {
      results.push({ channel: "sms", ...(await sendSms(reminder.phone, payload)) });
    } catch (error) {
      results.push({ channel: "sms", ok: false, error: error.message });
    }
  }
  return results;
}

async function handleApi(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const db = await readDb();

  if (request.method === "GET" && url.pathname === "/api/health") {
    return json(response, 200, {
      ok: true,
      storage: pgPool ? "postgres" : "json",
      pushReady: Boolean(webPush),
      emailReady: Boolean(process.env.SENDGRID_API_KEY && process.env.EMAIL_FROM),
      smsReady: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM)
    });
  }

  if (request.method === "GET" && url.pathname === "/api/me") {
    return json(response, 200, { user: publicUser(currentUser(request, db)) });
  }

  if (request.method === "POST" && url.pathname === "/api/twilio/sms") {
    const body = await readBody(request);
    const incoming = String(body.Body || "").trim().toUpperCase();
    const from = String(body.From || "").trim();
    const stopWords = new Set(["STOP", "STOPALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT"]);
    const startWords = new Set(["START", "UNSTOP", "YES"]);

    if (stopWords.has(incoming)) {
      let changed = false;
      for (const reminder of db.reminders) {
        if (phoneDigits(reminder.phone) && phoneDigits(reminder.phone) === phoneDigits(from)) {
          reminder.channels = { ...(reminder.channels || {}), sms: false };
          changed = true;
        }
      }
      if (changed) await writeDb(db);
      return twiml(response, "You have opted out of Walk With God text reminders. You will no longer receive reminder texts. Reply HELP for help or contact walkedwithgodtoday@gmail.com.");
    }

    if (incoming === "HELP") {
      return twiml(response, "Walk With God help: text reminders are optional daily Scripture and prayer reminders. Reply STOP to unsubscribe. Email walkedwithgodtoday@gmail.com for support.");
    }

    if (startWords.has(incoming)) {
      return twiml(response, "Walk With God received your message. To receive reminders, log in at walk-with-god.org and turn on text reminders in Reminder Settings. Reply STOP to unsubscribe.");
    }

    return twiml(response, "Walk With God received your message. Reply HELP for help or STOP to unsubscribe from text reminders.");
  }

  if (request.method === "POST" && url.pathname === "/api/auth/signup") {
    const body = await readBody(request);
    const name = normalizeText(body.name, 80);
    const email = normalizeText(body.email, 120).toLowerCase();
    const password = String(body.password || "");
    if (!name || !email || password.length < 8) {
      return json(response, 400, { error: "Name, email, and an 8+ character password are required." });
    }
    if (db.users.some((user) => user.email === email)) {
      return json(response, 409, { error: "An account already exists for that email." });
    }
    const passwordParts = hashPassword(password);
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      role: db.users.length === 0 ? "admin" : "member",
      subscriptionStatus: "free",
      mailingAddress: normalizeMailingAddress(body.mailingAddress),
      salt: passwordParts.salt,
      passwordHash: passwordParts.hash,
      createdAt: new Date().toISOString()
    };
    const session = { id: crypto.randomUUID(), userId: user.id, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30 };
    db.users.push(user);
    db.sessions.push(session);
    await writeDb(db);
    return json(response, 201, { user: publicUser(user) }, { "Set-Cookie": `sid=${session.id}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000` });
  }

  if (request.method === "POST" && url.pathname === "/api/auth/login") {
    const body = await readBody(request);
    const email = normalizeText(body.email, 120).toLowerCase();
    const user = db.users.find((item) => item.email === email);
    if (!user || !verifyPassword(String(body.password || ""), user)) {
      return json(response, 401, { error: "Email or password was incorrect." });
    }
    const session = { id: crypto.randomUUID(), userId: user.id, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30 };
    db.sessions.push(session);
    await writeDb(db);
    return json(response, 200, { user: publicUser(user) }, { "Set-Cookie": `sid=${session.id}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000` });
  }

  if (request.method === "POST" && url.pathname === "/api/auth/logout") {
    const sid = parseCookies(request).sid;
    const nextDb = { ...db, sessions: db.sessions.filter((session) => session.id !== sid) };
    await writeDb(nextDb);
    return json(response, 200, { ok: true }, { "Set-Cookie": "sid=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0" });
  }

  if (request.method === "GET" && url.pathname === "/api/community") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const focusId = normalizeText(url.searchParams.get("focusId"), 100);
    const posts = db.posts
      .filter((post) => !post.hiddenAt)
      .filter((post) => !focusId || post.focusId === focusId)
      .slice(-50)
      .map((post) => ({
        ...post,
        userName: db.users.find((user) => user.id === post.userId)?.name || "Community member",
        reactions: db.reactions.filter((reaction) => reaction.postId === post.id),
        comments: db.comments
          .filter((comment) => comment.postId === post.id && !comment.hiddenAt)
          .map((comment) => ({
            ...comment,
            userName: db.users.find((user) => user.id === comment.userId)?.name || "Community member",
            reactions: db.reactions.filter((reaction) => reaction.commentId === comment.id)
          }))
      }));
    return json(response, 200, { posts });
  }

  if (request.method === "POST" && url.pathname === "/api/community") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const text = normalizeText(body.text, 1000);
    if (!text) return json(response, 400, { error: "Check-in text is required." });
    const post = {
      id: crypto.randomUUID(),
      userId: user.id,
      focusId: normalizeText(body.focusId, 120),
      dayLabel: normalizeText(body.dayLabel, 40),
      dayTitle: normalizeText(body.dayTitle, 160),
      text,
      createdAt: new Date().toISOString()
    };
    db.posts.push(post);
    await writeDb(db);
    return json(response, 201, { post: { ...post, userName: user.name } });
  }

  if (request.method === "POST" && url.pathname === "/api/community/react") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const postId = normalizeText(body.postId, 120);
    const type = normalizeText(body.type, 30);
    const allowed = new Set(["praying", "encouraged", "amen"]);
    if (!db.posts.some((post) => post.id === postId && !post.hiddenAt)) return json(response, 404, { error: "Community post not found." });
    if (!allowed.has(type)) return json(response, 400, { error: "Reaction was not recognized." });
    db.reactions = db.reactions.filter((reaction) => !(reaction.postId === postId && reaction.userId === user.id && reaction.type === type));
    db.reactions.push({ id: crypto.randomUUID(), postId, userId: user.id, type, createdAt: new Date().toISOString() });
    await writeDb(db);
    return json(response, 200, { reactions: db.reactions.filter((reaction) => reaction.postId === postId) });
  }

  if (request.method === "POST" && url.pathname === "/api/community/comment/react") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const commentId = normalizeText(body.commentId, 120);
    const type = normalizeText(body.type, 30);
    const allowed = new Set(["praying", "encouraged", "amen"]);
    const comment = db.comments.find((item) => item.id === commentId && !item.hiddenAt);
    if (!comment) return json(response, 404, { error: "Comment not found." });
    if (!db.posts.some((post) => post.id === comment.postId && !post.hiddenAt)) return json(response, 404, { error: "Community post not found." });
    if (!allowed.has(type)) return json(response, 400, { error: "Reaction was not recognized." });
    db.reactions = db.reactions.filter((reaction) => !(reaction.commentId === commentId && reaction.userId === user.id && reaction.type === type));
    db.reactions.push({ id: crypto.randomUUID(), commentId, userId: user.id, type, createdAt: new Date().toISOString() });
    await writeDb(db);
    return json(response, 200, { reactions: db.reactions.filter((reaction) => reaction.commentId === commentId) });
  }

  if (request.method === "POST" && url.pathname === "/api/community/comment") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const postId = normalizeText(body.postId, 120);
    const text = normalizeText(body.text, 800);
    if (!db.posts.some((post) => post.id === postId && !post.hiddenAt)) return json(response, 404, { error: "Community post not found." });
    if (!text) return json(response, 400, { error: "Comment text is required." });
    const comment = {
      id: crypto.randomUUID(),
      postId,
      userId: user.id,
      text,
      createdAt: new Date().toISOString()
    };
    db.comments.push(comment);
    await writeDb(db);
    return json(response, 201, { comment: { ...comment, userName: user.name } });
  }

  if (request.method === "GET" && url.pathname === "/api/prayer-requests") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const requests = db.prayerRequests
      .filter((requestItem) => !requestItem.hiddenAt)
      .slice(-40)
      .reverse()
      .map((requestItem) => ({
        ...requestItem,
        userName: requestItem.isAnonymous ? "Anonymous" : db.users.find((user) => user.id === requestItem.userId)?.name || "Community member"
      }));
    return json(response, 200, { requests });
  }

  if (request.method === "POST" && url.pathname === "/api/prayer-requests") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const text = normalizeText(body.text, 1000);
    if (!text) return json(response, 400, { error: "Prayer request text is required." });
    const prayerRequest = {
      id: crypto.randomUUID(),
      userId: user.id,
      text,
      isAnonymous: Boolean(body.isAnonymous),
      prayedBy: [],
      createdAt: new Date().toISOString()
    };
    db.prayerRequests.push(prayerRequest);
    await writeDb(db);
    return json(response, 201, { request: { ...prayerRequest, userName: prayerRequest.isAnonymous ? "Anonymous" : user.name } });
  }

  if (request.method === "POST" && url.pathname === "/api/prayer-requests/prayed") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const requestItem = db.prayerRequests.find((item) => item.id === normalizeText(body.id, 120) && !item.hiddenAt);
    if (!requestItem) return json(response, 404, { error: "Prayer request not found." });
    if (!Array.isArray(requestItem.prayedBy)) requestItem.prayedBy = [];
    if (!requestItem.prayedBy.includes(user.id)) requestItem.prayedBy.push(user.id);
    await writeDb(db);
    return json(response, 200, { request: requestItem });
  }

  if (request.method === "POST" && url.pathname === "/api/prayer-clicks") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const prayer = normalizePrayerClick({
      id: body.id,
      title: body.title,
      category: body.category,
      scripture: body.scripture,
      count: 0,
      lastOpenedAt: ""
    });
    if (!prayer.id || !prayer.title) return json(response, 400, { error: "Prayer details are required." });
    const existing = db.prayerClicks.find((item) => item.id === prayer.id);
    if (existing) {
      existing.title = prayer.title;
      existing.category = prayer.category;
      existing.scripture = prayer.scripture;
      existing.count = Math.max(0, Number(existing.count) || 0) + 1;
      existing.lastOpenedAt = new Date().toISOString();
    } else {
      db.prayerClicks.push({
        ...prayer,
        count: 1,
        lastOpenedAt: new Date().toISOString()
      });
    }
    await writeDb(db);
    return json(response, 200, { ok: true });
  }

  if (request.method === "POST" && url.pathname === "/api/community/report") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const post = db.posts.find((item) => item.id === normalizeText(body.postId, 120));
    if (!post) return json(response, 404, { error: "Community post not found." });
    const report = {
      id: crypto.randomUUID(),
      postId: post.id,
      reporterId: user.id,
      reason: normalizeText(body.reason, 1000) || "No reason provided.",
      status: "open",
      createdAt: new Date().toISOString()
    };
    db.reports.push(report);
    await writeDb(db);
    return json(response, 201, { report });
  }

  if (request.method === "POST" && url.pathname === "/api/feedback") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const text = normalizeText(body.text, 2000);
    if (!text) return json(response, 400, { error: "Feedback text is required." });
    const feedback = {
      id: crypto.randomUUID(),
      userId: user.id,
      type: normalizeText(body.type, 40) || "general",
      text,
      status: "open",
      createdAt: new Date().toISOString()
    };
    db.feedback.push(feedback);
    await writeDb(db);
    return json(response, 201, { feedback });
  }

  if (request.method === "GET" && url.pathname === "/api/support/messages") {
    const user = requireUser(request, response, db);
    if (!user) return;
    return json(response, 200, {
      messages: db.supportMessages.filter((item) => item.userId === user.id).slice(-20)
    });
  }

  if (request.method === "GET" && url.pathname === "/api/progress") {
    const user = requireUser(request, response, db);
    if (!user) return;
    return json(response, 200, { progress: db.progress.filter((item) => item.userId === user.id) });
  }

  if (request.method === "GET" && url.pathname === "/api/active-position") {
    const user = requireUser(request, response, db);
    if (!user) return;
    return json(response, 200, { activePosition: user.activePosition || null });
  }

  if (request.method === "POST" && url.pathname === "/api/active-position") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const focusId = normalizeText(body.focusId, 120);
    const dayIndex = Number(body.dayIndex);
    if (!focusId || !Number.isInteger(dayIndex)) return json(response, 400, { error: "focusId and dayIndex are required." });
    user.activePosition = { focusId, dayIndex, updatedAt: new Date().toISOString() };
    await writeDb(db);
    return json(response, 200, { activePosition: user.activePosition });
  }

  if (request.method === "POST" && url.pathname === "/api/progress") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const focusId = normalizeText(body.focusId, 120);
    const dayIndex = Number(body.dayIndex);
    if (!focusId || !Number.isInteger(dayIndex)) return json(response, 400, { error: "focusId and dayIndex are required." });
    if (!db.progress.some((item) => item.userId === user.id && item.focusId === focusId && item.dayIndex === dayIndex)) {
      db.progress.push({ userId: user.id, focusId, dayIndex, completedAt: new Date().toISOString() });
      await writeDb(db);
    }
    return json(response, 200, { ok: true });
  }

  if (request.method === "GET" && url.pathname === "/api/notes") {
    const user = requireUser(request, response, db);
    if (!user) return;
    return json(response, 200, { notes: db.notes.filter((item) => item.userId === user.id) });
  }

  if (request.method === "POST" && url.pathname === "/api/notes") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const focusId = normalizeText(body.focusId, 120);
    const dayIndex = Number(body.dayIndex);
    const text = normalizeText(body.text, 5000);
    db.notes = db.notes.filter((item) => !(item.userId === user.id && item.focusId === focusId && item.dayIndex === dayIndex));
    db.notes.push({ userId: user.id, focusId, dayIndex, text, updatedAt: new Date().toISOString() });
    await writeDb(db);
    return json(response, 200, { ok: true });
  }

  if (request.method === "GET" && url.pathname === "/api/reminder") {
    const user = requireUser(request, response, db);
    if (!user) return;
    return json(response, 200, {
      reminder: db.reminders.find((item) => item.userId === user.id) || null,
      reminderMessage: sharedReminderMessage(db),
      canEditReminderMessage: user.role === "admin"
    });
  }

  if (request.method === "POST" && url.pathname === "/api/reminder") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const existingReminder = db.reminders.find((item) => item.userId === user.id);
    const time = normalizeText(body.time, 10) || "07:00";
    const timeZone = normalizeText(body.timeZone, 80) || "America/New_York";
    const local = localReminderInfo(new Date(), timeZone);
    const scheduledMinute = reminderTimeToMinutes(time);
    const reminder = {
      userId: user.id,
      time,
      message: sharedReminderMessage(db),
      channels: normalizeChannels(body.channels),
      email: normalizeText(body.email, 160) || user.email,
      phone: normalizeText(body.phone, 32),
      timeZone,
      updatedAt: new Date().toISOString(),
      lastSentDate: existingReminder?.lastSentDate || (local.minuteOfDay >= scheduledMinute ? local.dateKey : "")
    };
    db.reminders = db.reminders.filter((item) => item.userId !== user.id);
    db.reminders.push(reminder);
    await writeDb(db);
    return json(response, 200, { reminder });
  }

  if (request.method === "GET" && url.pathname === "/api/push/public-key") {
    return json(response, 200, { publicKey: readVapid().publicKey, enabled: Boolean(webPush) });
  }

  if (request.method === "POST" && url.pathname === "/api/push/subscribe") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    if (!body.subscription?.endpoint) return json(response, 400, { error: "A browser push subscription is required." });
    db.pushSubscriptions = db.pushSubscriptions.filter((item) => !(item.userId === user.id && item.subscription.endpoint === body.subscription.endpoint));
    db.pushSubscriptions.push({ userId: user.id, subscription: body.subscription, createdAt: new Date().toISOString() });
    await writeDb(db);
    return json(response, 200, { ok: true, pushReady: Boolean(webPush) });
  }

  if (request.method === "POST" && url.pathname === "/api/push/test") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const reminder = db.reminders.find((item) => item.userId === user.id) || {
      userId: user.id,
      channels: { push: true, email: false, sms: false },
      email: user.email,
      phone: ""
    };
    const results = await sendReminderForUser(db, reminder, { title: "Walk With God", body: sharedReminderMessage(db) });
    return json(response, 200, {
      results,
      pushReady: Boolean(webPush),
      emailReady: Boolean(process.env.SENDGRID_API_KEY && process.env.EMAIL_FROM),
      smsReady: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM)
    });
  }

  if (request.method === "GET" && url.pathname === "/api/premium-content") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const isPremium = user.role === "admin" || user.subscriptionStatus === "premium";
    const content = db.premiumContent
      .filter((item) => !item.archivedAt)
      .slice()
      .sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || "")))
      .map((item) => ({
        ...item,
        locked: item.access === "premium" && !isPremium
      }));
    return json(response, 200, { content, isPremium });
  }

  if (request.method === "GET" && url.pathname.startsWith("/api/premium-media/")) {
    const user = requireUser(request, response, db);
    if (!user) return;
    if (user.role !== "admin") return json(response, 403, { error: "Admin access is required for Abide media." });
    const mediaId = url.pathname.replace("/api/premium-media/", "");
    const filename = premiumMedia[mediaId];
    if (!filename) return json(response, 404, { error: "Abide media not found." });
    const filePath = path.join(root, "premium-media", filename);
    fs.stat(filePath, (error, stats) => {
      if (error) return json(response, 404, { error: "Abide media not found." });
      const contentType = types[path.extname(filePath)] || "application/octet-stream";
      const range = request.headers.range;
      if (range) {
        const match = range.match(/bytes=(\d*)-(\d*)/);
        const start = match?.[1] ? Number(match[1]) : 0;
        const end = match?.[2] ? Number(match[2]) : stats.size - 1;
        if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= stats.size) {
          response.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
          response.end();
          return;
        }
        response.writeHead(206, {
          "Content-Type": contentType,
          "Content-Length": end - start + 1,
          "Content-Range": `bytes ${start}-${end}/${stats.size}`,
          "Accept-Ranges": "bytes",
          "Cache-Control": "no-store"
        });
        fs.createReadStream(filePath, { start, end }).pipe(response);
        return;
      }
      response.writeHead(200, {
        "Content-Type": contentType,
        "Content-Length": stats.size,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store"
      });
      fs.createReadStream(filePath).pipe(response);
    });
    return;
  }

  if (url.pathname.startsWith("/api/admin/")) {
    const admin = requireAdmin(request, response, db);
    if (!admin) return;

    if (request.method === "GET" && url.pathname === "/api/admin/summary") {
      const topPrayerClicks = db.prayerClicks
        .slice()
        .sort((a, b) => (Number(b.count) || 0) - (Number(a.count) || 0) || String(b.lastOpenedAt || "").localeCompare(String(a.lastOpenedAt || "")))
        .slice(0, 10);
      return json(response, 200, {
        users: db.users.length,
        communityPosts: db.posts.filter((post) => !post.hiddenAt).length,
        openFeedback: db.feedback.filter((item) => item.status === "open").length,
        openReports: db.reports.filter((item) => item.status === "open").length,
        reminders: db.reminders.length,
        pushSubscriptions: db.pushSubscriptions.length,
        premiumContent: db.premiumContent.filter((item) => !item.archivedAt).length,
        prayerClicks: topPrayerClicks,
        totalPrayerClicks: db.prayerClicks.reduce((sum, item) => sum + (Number(item.count) || 0), 0)
      });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/reminder-message") {
      return json(response, 200, { reminderMessage: sharedReminderMessage(db) });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/reminder-message") {
      const body = await readBody(request);
      const reminderMessage = normalizeText(body.message, 240);
      if (!reminderMessage) return json(response, 400, { error: "Reminder wording is required." });
      db.settings = { ...(db.settings || {}), reminderMessage };
      db.reminders = db.reminders.map((reminder) => ({ ...reminder, message: reminderMessage }));
      await writeDb(db);
      return json(response, 200, { reminderMessage });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/premium-content") {
      const body = await readBody(request);
      const type = normalizeText(body.type, 80);
      const title = normalizeText(body.title, 160);
      const description = normalizeText(body.description, 1200);
      const length = normalizeText(body.length, 80);
      const scripture = normalizeText(body.scripture, 160);
      const urlValue = normalizeText(body.url, 500);
      if (!type || !title || !description) {
        return json(response, 400, { error: "Abide type, title, and description are required." });
      }
      const content = {
        id: crypto.randomUUID(),
        type,
        title,
        description,
        length,
        scripture,
        url: urlValue,
        access: "premium",
        createdBy: admin.id,
        createdAt: new Date().toISOString()
      };
      db.premiumContent.push(content);
      await writeDb(db);
      return json(response, 201, { content });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/users") {
      const users = db.users.map((user) => ({
        ...publicUser(user),
        createdAt: user.createdAt,
        metrics: userMetrics(user.id, db)
      }));
      return json(response, 200, { users });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/user") {
      const userId = normalizeText(url.searchParams.get("id"), 120);
      const user = db.users.find((item) => item.id === userId);
      if (!user) return json(response, 404, { error: "User not found." });
      return json(response, 200, {
        user: { ...publicUser(user), createdAt: user.createdAt, metrics: userMetrics(user.id, db) },
        progress: db.progress.filter((item) => item.userId === user.id),
        notes: db.notes.filter((item) => item.userId === user.id).map((note) => ({ ...note, text: "[private note hidden from admin]" })),
        posts: db.posts.filter((item) => item.userId === user.id),
        reminders: db.reminders.filter((item) => item.userId === user.id),
        supportMessages: db.supportMessages.filter((item) => item.userId === user.id)
      });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/user/update") {
      const body = await readBody(request);
      const user = db.users.find((item) => item.id === normalizeText(body.userId, 120));
      if (!user) return json(response, 404, { error: "User not found." });
      const name = normalizeText(body.name, 80);
      const email = normalizeText(body.email, 120).toLowerCase();
      if (name) user.name = name;
      if (email && !db.users.some((item) => item.email === email && item.id !== user.id)) user.email = email;
      await writeDb(db);
      return json(response, 200, { user: publicUser(user) });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/user/reset-password") {
      const body = await readBody(request);
      const user = db.users.find((item) => item.id === normalizeText(body.userId, 120));
      if (!user) return json(response, 404, { error: "User not found." });
      const temporaryPassword = crypto.randomBytes(9).toString("base64url");
      const passwordParts = hashPassword(temporaryPassword);
      user.salt = passwordParts.salt;
      user.passwordHash = passwordParts.hash;
      db.sessions = db.sessions.filter((session) => session.userId !== user.id);
      await writeDb(db);
      return json(response, 200, { temporaryPassword });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/user/message") {
      const body = await readBody(request);
      const user = db.users.find((item) => item.id === normalizeText(body.userId, 120));
      if (!user) return json(response, 404, { error: "User not found." });
      const text = normalizeText(body.text, 2000);
      if (!text) return json(response, 400, { error: "Message text is required." });
      const message = {
        id: crypto.randomUUID(),
        userId: user.id,
        adminId: admin.id,
        text,
        createdAt: new Date().toISOString()
      };
      db.supportMessages.push(message);
      await writeDb(db);
      return json(response, 201, { message });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/feedback") {
      const feedback = db.feedback
        .slice()
        .reverse()
        .map((item) => ({ ...item, user: publicUser(db.users.find((user) => user.id === item.userId)) }));
      return json(response, 200, { feedback });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/feedback/status") {
      const body = await readBody(request);
      const item = db.feedback.find((feedback) => feedback.id === normalizeText(body.id, 120));
      if (!item) return json(response, 404, { error: "Feedback not found." });
      item.status = normalizeText(body.status, 40) || "open";
      item.reviewedAt = new Date().toISOString();
      item.reviewedBy = admin.id;
      await writeDb(db);
      return json(response, 200, { feedback: item });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/reports") {
      const reports = db.reports
        .slice()
        .reverse()
        .map((report) => {
          const post = db.posts.find((item) => item.id === report.postId);
          return {
            ...report,
            reporter: publicUser(db.users.find((user) => user.id === report.reporterId)),
            post: post ? { ...post, userName: db.users.find((user) => user.id === post.userId)?.name || "Community member" } : null
          };
        });
      return json(response, 200, { reports });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/community") {
      const posts = db.posts
        .filter((post) => !post.hiddenAt)
        .slice(-75)
        .reverse()
        .map((post) => ({
          ...post,
          userName: db.users.find((user) => user.id === post.userId)?.name || "Community member"
        }));
      return json(response, 200, { posts });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/prayer-requests") {
      const requests = db.prayerRequests
        .filter((requestItem) => !requestItem.hiddenAt)
        .slice(-75)
        .reverse()
        .map((requestItem) => ({
          ...requestItem,
          userName: requestItem.isAnonymous ? "Anonymous" : db.users.find((user) => user.id === requestItem.userId)?.name || "Community member"
        }));
      return json(response, 200, { requests });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/reports/status") {
      const body = await readBody(request);
      const report = db.reports.find((item) => item.id === normalizeText(body.id, 120));
      if (!report) return json(response, 404, { error: "Report not found." });
      report.status = normalizeText(body.status, 40) || "open";
      report.reviewedAt = new Date().toISOString();
      report.reviewedBy = admin.id;
      await writeDb(db);
      return json(response, 200, { report });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/community/hide") {
      const body = await readBody(request);
      const post = db.posts.find((item) => item.id === normalizeText(body.postId, 120));
      if (!post) return json(response, 404, { error: "Community post not found." });
      post.hiddenAt = new Date().toISOString();
      post.hiddenBy = admin.id;
      await writeDb(db);
      return json(response, 200, { post });
    }

    if (request.method === "POST" && url.pathname === "/api/admin/prayer-requests/hide") {
      const body = await readBody(request);
      const prayerRequest = db.prayerRequests.find((item) => item.id === normalizeText(body.id, 120));
      if (!prayerRequest) return json(response, 404, { error: "Prayer request not found." });
      prayerRequest.hiddenAt = new Date().toISOString();
      prayerRequest.hiddenBy = admin.id;
      await writeDb(db);
      return json(response, 200, { request: prayerRequest });
    }

    return json(response, 404, { error: "Admin route not found." });
  }

  return json(response, 404, { error: "API route not found." });
}

function serveStatic(request, response) {
  const requestedPath = request.url === "/" ? "/index.html" : request.url.split("?")[0];
  const filePath = path.normalize(path.join(root, decodeURIComponent(requestedPath)));

  if (requestedPath.startsWith("/premium-media/") || requestedPath.startsWith("/data/")) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    response.end(data);
  });
}

function reminderScheduler() {
  setInterval(async () => {
    const db = await readDb();
    const now = new Date();
    let changed = false;
    for (const reminder of db.reminders) {
      if (!shouldSendScheduledReminder(reminder, now)) continue;
      await sendReminderForUser(db, reminder, { title: "Walk With God", body: sharedReminderMessage(db) });
      reminder.lastSentDate = localReminderInfo(now, reminder.timeZone || "America/New_York").dateKey;
      changed = true;
    }
    if (changed) await writeDb(db);
  }, 60_000);
}

ensureData();
configurePush();
reminderScheduler();

const server = http.createServer((request, response) => {
  if (request.url.startsWith("/api/")) {
    handleApi(request, response).catch((error) => json(response, 500, { error: error.message }));
    return;
  }
  serveStatic(request, response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Walk With God app running on port ${port}`);
  if (!webPush) {
    console.log("Install the web-push package to enable real push delivery: npm install");
  }
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
    console.log("Set SENDGRID_API_KEY and EMAIL_FROM to enable email reminders.");
  }
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_FROM) {
    console.log("Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_FROM to enable text reminders.");
  }
});
