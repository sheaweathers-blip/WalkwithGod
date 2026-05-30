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
  ".json": "application/json; charset=utf-8"
};

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
    reactions: [],
    comments: []
  };
}

function normalizeDb(db) {
  const normalized = { ...defaultDb(), ...(db || {}) };
  for (const key of Object.keys(defaultDb())) {
    if (!Array.isArray(normalized[key])) normalized[key] = [];
  }
  return normalized;
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
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
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
  return user ? { id: user.id, name: user.name, email: user.email, role: user.role } : null;
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

function normalizeChannels(value) {
  return {
    push: value?.push !== false,
    email: Boolean(value?.email),
    sms: Boolean(value?.sms)
  };
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
      content: [{ type: "text/plain", value: payload.body || "Spend uninterrupted time with God today." }]
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
    Body: payload.body || "Spend uninterrupted time with God today."
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
            userName: db.users.find((user) => user.id === comment.userId)?.name || "Community member"
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
    return json(response, 200, { reminder: db.reminders.find((item) => item.userId === user.id) || null });
  }

  if (request.method === "POST" && url.pathname === "/api/reminder") {
    const user = requireUser(request, response, db);
    if (!user) return;
    const body = await readBody(request);
    const reminder = {
      userId: user.id,
      time: normalizeText(body.time, 10) || "07:00",
      message: normalizeText(body.message, 200) || "Spend uninterrupted time with God today.",
      channels: normalizeChannels(body.channels),
      email: normalizeText(body.email, 160) || user.email,
      phone: normalizeText(body.phone, 32),
      updatedAt: new Date().toISOString(),
      lastSentDate: ""
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
    const results = await sendReminderForUser(db, reminder, { title: "Walk With God", body: "This is your daily reminder test." });
    return json(response, 200, {
      results,
      pushReady: Boolean(webPush),
      emailReady: Boolean(process.env.SENDGRID_API_KEY && process.env.EMAIL_FROM),
      smsReady: Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM)
    });
  }

  if (url.pathname.startsWith("/api/admin/")) {
    const admin = requireAdmin(request, response, db);
    if (!admin) return;

    if (request.method === "GET" && url.pathname === "/api/admin/summary") {
      return json(response, 200, {
        users: db.users.length,
        communityPosts: db.posts.filter((post) => !post.hiddenAt).length,
        openFeedback: db.feedback.filter((item) => item.status === "open").length,
        openReports: db.reports.filter((item) => item.status === "open").length,
        reminders: db.reminders.length,
        pushSubscriptions: db.pushSubscriptions.length
      });
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

    return json(response, 404, { error: "Admin route not found." });
  }

  return json(response, 404, { error: "API route not found." });
}

function serveStatic(request, response) {
  const requestedPath = request.url === "/" ? "/index.html" : request.url.split("?")[0];
  const filePath = path.normalize(path.join(root, decodeURIComponent(requestedPath)));

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
    const hhmm = now.toTimeString().slice(0, 5);
    const today = now.toISOString().slice(0, 10);
    let changed = false;
    for (const reminder of db.reminders) {
      if (reminder.time !== hhmm || reminder.lastSentDate === today) continue;
      await sendReminderForUser(db, reminder, { title: "Walk With God", body: reminder.message });
      reminder.lastSentDate = today;
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
