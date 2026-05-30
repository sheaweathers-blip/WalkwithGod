const defaultFocuses = [
  {
    id: "creation",
    label: "Theme 1",
    mark: "C",
    title: "Creation",
    description: "According to the Genesis narrative, God's creative work unfolds from creation through paradise lost.",
    days: [
      ["Day 1", "Creation of light", "Genesis 1:1-5", "God creates light and separates it from darkness, establishing day and night."],
      ["Day 2", "Creation of the sky", "Genesis 1:6-8", "God creates the vault to separate the waters above from the waters below."],
      ["Day 3", "Dry land and vegetation", "Genesis 1:9-13", "God forms dry land and fills it with plants and fruit trees."],
      ["Day 4", "Lights in the sky", "Genesis 1:14-19", "God appoints the sun, moon, and stars to govern days, years, and seasons."],
      ["Day 5", "Sea creatures and birds", "Genesis 1:20-23", "God fills the waters and skies with living creatures."],
      ["Day 6", "Animals and humanity", "Genesis 1:24-31", "God creates land animals and humans, male and female, in His image."],
      ["Day 7", "God rests", "Genesis 2:1-4", "God rests, blesses the seventh day, and makes it holy."],
      ["Day 8", "Creation of man", "Genesis 2:5-9", "God forms man and places him in the garden with the breath of life."],
      ["Day 9", "River of Eden", "Genesis 2:10-17", "The garden is described with its river, abundance, and God's command."],
      ["Day 10", "Creation of woman", "Genesis 2:18-25", "God creates woman as a fitting helper and establishes human companionship."],
      ["Day 11", "Sin", "Genesis 3:1-7", "The man and woman disobey God, and sin enters the human story."],
      ["Day 12", "God confronts man and woman", "Genesis 3:8-13", "The Lord God seeks them, questions them, and exposes their hiding and blame."],
      ["Day 13", "God confronts the serpent", "Genesis 3:14-19", "God judges the serpent and describes the painful consequences of sin."],
      ["Day 14", "Paradise lost", "Genesis 3:20-24", "The man and woman are sent from Eden, and the way to the tree of life is guarded."]
    ]
  },
  {
    id: "fall-corruption",
    label: "Theme 2",
    mark: "F",
    title: "Fall and Corruption",
    description: "Sin brings moral decay, pain, labor, physical death, and broken relationships with God, revealing humanity's need for redemption.",
    days: [
      ["Day 15", "Cain and Abel", "Genesis 4:1-15", "The first family experiences jealousy, violence, judgment, and mercy."],
      ["Day 16", "Descendants", "Genesis 4:17-26 and 5:1-32", "The generations unfold, showing both human culture and the spread of death."],
      ["Day 17", "A world gone wrong", "Genesis 6:1-8", "Human wickedness grows, yet Noah finds favor in the eyes of the Lord."],
      ["Day 18", "Noah", "Genesis 6:9-22", "God calls Noah to faithful obedience and gives instructions for the ark."],
      ["Day 19", "The flood", "Genesis 7:1-24", "Judgment comes through the flood, and God preserves Noah and those with him."],
      ["Day 20", "The flood recedes", "Genesis 8:1-22", "The waters recede, Noah worships, and God receives his offering."],
      ["Day 21", "God confirms His covenant", "Genesis 9:1-29", "God blesses Noah, gives the covenant sign, and the story continues with human weakness."]
    ]
  },
  {
    id: "redemption",
    label: "Theme 3",
    mark: "R",
    title: "Redemption",
    description: "God buys back humanity from slavery to sin and death through the sacrificial blood of Jesus Christ, restoring people to right relationship with Him.",
    days: [
      ["Day 1", "Promises of Deliverance", "Exodus 6:2-8", "God promises to redeem His people with an outstretched arm."],
      ["Day 2", "My Redeemer Lives", "Job 19:25", "Hope clings to the living Redeemer even in suffering."],
      ["Day 3", "Hope in the Lord", "Psalm 130:7", "The Lord is full of steadfast love and plentiful redemption."],
      ["Day 4", "Spiritual Blessings", "Ephesians 1:7-8", "In Christ we have redemption through His blood and forgiveness of sins."],
      ["Day 5", "Christ Took Our Punishment", "Romans 3:22-25", "God presents Christ as the sacrifice of atonement received by faith."],
      ["Day 6", "Rescued from Darkness", "Colossians 1:13-14", "God transfers His people from darkness into the kingdom of His Son."],
      ["Day 7", "Rescued from Curse", "Galatians 3:13-14", "Christ redeems us from the curse so the blessing may come through Him."],
      ["Day 8", "God Paid a Ransom", "1 Peter 1:18-19", "We are redeemed with the precious blood of Christ."],
      ["Day 9", "To Make Us His Own", "Titus 2:14", "Jesus gives Himself to redeem and purify a people for His possession."],
      ["Day 10", "With His Own Blood", "Hebrews 9:12", "Christ secures eternal redemption with His own blood."],
      ["Day 11", "Called to Serve", "Matthew 20:28", "The Son of Man gives His life as a ransom for many."],
      ["Day 12", "Rescue Us from This Evil World", "Galatians 1:4", "Christ gives Himself to rescue us according to the Father's will."],
      ["Day 13", "Christ Lives in Me", "Galatians 2:20", "The redeemed life is lived by faith in the Son of God."],
      ["Day 14", "A New Covenant", "Hebrews 9:15", "Christ mediates a new covenant through His redeeming death."],
      ["Day 15", "Return to Me", "Isaiah 44:22", "God blots out sin and calls His people to return."],
      ["Day 16", "Patient for Our Sake", "2 Peter 3:9", "God's patience gives room for repentance."],
      ["Day 17", "Repent", "Acts 3:19", "Repentance turns us toward refreshing from the Lord."],
      ["Day 18", "The Gate", "John 10:9-10", "Jesus is the gate who gives salvation and abundant life."],
      ["Day 19", "Speak Out", "Psalm 107:2", "The redeemed of the Lord are called to say so."],
      ["Day 20", "Guaranteed Covenant", "Psalm 111:9", "God sends redemption and commands His covenant forever."],
      ["Day 21", "Can't You See?", "Romans 2:4", "God's kindness is meant to lead us to repentance."],
      ["Day 22", "How Much More", "Romans 5:10", "If reconciled by Christ's death, we are saved by His life."],
      ["Day 23", "Jesus Is Lord", "Romans 10:9-10", "Salvation is confessed with the mouth and believed in the heart."],
      ["Day 24", "My Defender", "Lamentations 3:57-58", "The Lord draws near, says not to fear, and redeems life."],
      ["Day 25", "God So Loved the World", "John 3:16", "God gives His Son so believers may have eternal life."]
    ]
  },
  {
    id: "consummation",
    label: "Theme 4",
    mark: "K",
    title: "Consummation",
    description: "Consummation is the final fulfillment of all God's plans and the establishment of His eternal kingdom.",
    days: [
      ["Day 1", "The Plan", "Ephesians 1:10", "God's plan is to bring all things together in Christ."],
      ["Day 2", "Once for All Time", "Hebrews 9:26", "Christ appears once for all to put away sin by His sacrifice."],
      ["Day 3", "The Good News", "Matthew 24:14", "The gospel of the kingdom will be proclaimed to all nations."],
      ["Day 4", "The End Will Come", "1 Corinthians 15:24", "Christ delivers the kingdom to the Father after every opposing power is defeated."],
      ["Day 5", "Crown of Life", "James 1:12", "Those who remain steadfast under trial receive the crown of life."],
      ["Day 6", "Receive the Gift", "Acts 2:38", "Repentance and baptism are joined with forgiveness and the gift of the Holy Spirit."],
      ["Day 7", "The Coming King", "Zechariah 9:9", "The King comes righteous, victorious, and humble."]
    ]
  }
];

const implementationText = "Take a moment to check in before moving on. Completion should mean you spent focused time with God, not just skimmed the reading.";
const adminCode = "walkwithgod";

const state = {
  focuses: [...defaultFocuses, ...loadAddedFocuses()],
  activeId: "",
  activeDayIndex: Number(localStorage.getItem("walkWithGodActiveDay") || 0),
  completed: loadCompleted(),
  adminUnlocked: sessionStorage.getItem("walkWithGodAdminUnlocked") === "true",
  mode: localStorage.getItem("walkWithGodMode") || "solo",
  notes: JSON.parse(localStorage.getItem("walkWithGodNotes") || "{}"),
  community: JSON.parse(localStorage.getItem("walkWithGodCommunity") || "[]"),
  reminder: JSON.parse(localStorage.getItem("walkWithGodReminder") || '{"time":"07:00","message":"Spend uninterrupted time with God today.","channels":{"push":true,"email":false,"sms":false},"email":"","phone":""}'),
  user: null,
  supportMessages: [],
  selectedAdminUserId: "",
  authMode: "login"
};

const themeList = document.querySelector("#themeList");
const serverWarning = document.querySelector("#serverWarning");
const accountStatus = document.querySelector("#accountStatus");
const supportMessageList = document.querySelector("#supportMessageList");
const accountActions = document.querySelector("#accountActions");
const showSignupButton = document.querySelector("#showSignupButton");
const showLoginButton = document.querySelector("#showLoginButton");
const authForm = document.querySelector("#authForm");
const authName = document.querySelector("#authName");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const logoutButton = document.querySelector("#logoutButton");
const submitAuthButton = document.querySelector("#submitAuthButton");
const cancelAuthButton = document.querySelector("#cancelAuthButton");
const authMessage = document.querySelector("#authMessage");
const readerEmpty = document.querySelector("#readerEmpty");
const readerContent = document.querySelector("#readerContent");
const activeCategoryLabel = document.querySelector("#activeCategoryLabel");
const activeTitle = document.querySelector("#activeTitle");
const activePurpose = document.querySelector("#activePurpose");
const daysPill = document.querySelector("#daysPill");
const progressText = document.querySelector("#progressText");
const encouragementText = document.querySelector("#encouragementText");
const progressFill = document.querySelector("#progressFill");
const dayList = document.querySelector("#dayList");
const dayLabel = document.querySelector("#dayLabel");
const dayTitle = document.querySelector("#dayTitle");
const scriptureText = document.querySelector("#scriptureText");
const daySummary = document.querySelector("#daySummary");
const activeTimeText = document.querySelector("#activeTimeText");
const applicationText = document.querySelector("#applicationText");
const deedText = document.querySelector("#deedText");
const implementation = document.querySelector("#implementationText");
const noteInput = document.querySelector("#noteInput");
const saveNoteButton = document.querySelector("#saveNoteButton");
const noteStatus = document.querySelector("#noteStatus");
const completeButton = document.querySelector("#completeButton");
const nextButton = document.querySelector("#nextButton");
const reminderForm = document.querySelector("#reminderForm");
const reminderTime = document.querySelector("#reminderTime");
const reminderMessage = document.querySelector("#reminderMessage");
const reminderStatus = document.querySelector("#reminderStatus");
const reminderPush = document.querySelector("#reminderPush");
const reminderEmail = document.querySelector("#reminderEmail");
const reminderSms = document.querySelector("#reminderSms");
const reminderEmailAddress = document.querySelector("#reminderEmailAddress");
const reminderPhone = document.querySelector("#reminderPhone");
const enablePushButton = document.querySelector("#enablePushButton");
const testPushButton = document.querySelector("#testPushButton");
const soloModeButton = document.querySelector("#soloModeButton");
const communityModeButton = document.querySelector("#communityModeButton");
const communityForm = document.querySelector("#communityForm");
const communityInput = document.querySelector("#communityInput");
const communityStatus = document.querySelector("#communityStatus");
const communityFeed = document.querySelector("#communityFeed");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackType = document.querySelector("#feedbackType");
const feedbackText = document.querySelector("#feedbackText");
const feedbackStatus = document.querySelector("#feedbackStatus");
const adminUnlockForm = document.querySelector("#adminUnlockForm");
const adminStatus = document.querySelector("#adminStatus");
const adminCodeInput = document.querySelector("#adminCode");
const lockAdminButton = document.querySelector("#lockAdminButton");
const addFocusForm = document.querySelector("#addFocusForm");
const addFocusStatus = document.querySelector("#addFocusStatus");
const clearAddedFocuses = document.querySelector("#clearAddedFocuses");
const adminDashboard = document.querySelector("#adminDashboard");
const adminSummary = document.querySelector("#adminSummary");
const adminUserList = document.querySelector("#adminUserList");
const adminUserDetail = document.querySelector("#adminUserDetail");
const adminSupportForm = document.querySelector("#adminSupportForm");
const adminSupportMessage = document.querySelector("#adminSupportMessage");
const adminResetPasswordButton = document.querySelector("#adminResetPasswordButton");
const adminSupportStatus = document.querySelector("#adminSupportStatus");
const adminFeedbackList = document.querySelector("#adminFeedbackList");
const adminReportList = document.querySelector("#adminReportList");

function loadAddedFocuses() {
  return JSON.parse(localStorage.getItem("walkWithGodAddedFocuses") || "[]");
}

function saveAddedFocuses() {
  const added = state.focuses.filter((focus) => focus.custom);
  localStorage.setItem("walkWithGodAddedFocuses", JSON.stringify(added));
}

function loadCompleted() {
  const raw = JSON.parse(localStorage.getItem("walkWithGodCompletedDays") || "{}");
  return Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, new Set(value)]));
}

function saveCompleted() {
  const serializable = Object.fromEntries(Object.entries(state.completed).map(([key, value]) => [key, [...value]]));
  localStorage.setItem("walkWithGodCompletedDays", JSON.stringify(serializable));
}

function dayKey() {
  return `${state.activeId || "general"}:${state.activeDayIndex}`;
}

function saveNotes() {
  localStorage.setItem("walkWithGodNotes", JSON.stringify(state.notes));
}

function saveCommunity() {
  localStorage.setItem("walkWithGodCommunity", JSON.stringify(state.community));
}

function saveReminder() {
  localStorage.setItem("walkWithGodReminder", JSON.stringify(state.reminder));
}

async function apiFetch(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request failed.");
  return payload;
}

function applyServerProgress(progress) {
  state.completed = {};
  for (const item of progress || []) {
    if (!state.completed[item.focusId]) state.completed[item.focusId] = new Set();
    state.completed[item.focusId].add(item.dayIndex);
  }
}

function applyServerNotes(notes) {
  state.notes = {};
  for (const item of notes || []) {
    state.notes[`${item.focusId}:${item.dayIndex}`] = item.text;
  }
}

async function loadServerState() {
  if (!state.user) return;
  const [progressResult, notesResult, reminderResult] = await Promise.all([
    apiFetch("/api/progress"),
    apiFetch("/api/notes"),
    apiFetch("/api/reminder")
  ]);
  applyServerProgress(progressResult.progress);
  applyServerNotes(notesResult.notes);
  if (reminderResult.reminder) {
    state.reminder = {
      time: reminderResult.reminder.time,
      message: reminderResult.reminder.message,
      channels: reminderResult.reminder.channels || { push: true, email: false, sms: false },
      email: reminderResult.reminder.email || "",
      phone: reminderResult.reminder.phone || ""
    };
    saveReminder();
  }
  await loadCommunity();
  await loadSupportMessages();
  if (state.user?.role === "admin") await loadAdminDashboard();
}

async function loadCommunity() {
  const focus = activeFocus();
  try {
    const path = focus ? `/api/community?focusId=${encodeURIComponent(focus.id)}` : "/api/community";
    const result = await apiFetch(path);
    state.community = result.posts || [];
  } catch {
    state.community = JSON.parse(localStorage.getItem("walkWithGodCommunity") || "[]");
  }
}

async function loadSupportMessages() {
  if (!state.user) {
    state.supportMessages = [];
    return;
  }
  try {
    const result = await apiFetch("/api/support/messages");
    state.supportMessages = result.messages || [];
  } catch {
    state.supportMessages = [];
  }
}

function renderAccount() {
  if (state.user) {
    accountStatus.textContent = `Signed in as ${state.user.name} (${state.user.role}).`;
    authForm.hidden = true;
    showSignupButton.hidden = true;
    showLoginButton.hidden = true;
    logoutButton.hidden = false;
  } else {
    accountStatus.textContent = "You are not signed in.";
    showSignupButton.hidden = false;
    showLoginButton.hidden = false;
    logoutButton.hidden = true;
  }
  supportMessageList.innerHTML = state.supportMessages.length
    ? state.supportMessages
        .slice(-3)
        .reverse()
        .map((message) => `<article class="support-message"><strong>Admin message</strong><p>${escapeHtml(message.text)}</p></article>`)
        .join("")
    : "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getDayExtras(focus, day) {
  const title = day[1].toLowerCase();
  const focusTitle = focus.title.toLowerCase();
  let deed = "Offer one quiet act of obedience today that reflects this passage.";
  if (title.includes("light")) deed = "Bring light into one conversation today through honesty, encouragement, or prayer.";
  if (title.includes("sky") || title.includes("waters")) deed = "Step outside, look up, and thank God for His order before beginning your next task.";
  if (title.includes("vegetation") || title.includes("land")) deed = "Care for something physical today: a meal, a plant, a room, or a responsibility God has given you.";
  if (title.includes("human") || title.includes("image") || title.includes("man") || title.includes("woman")) deed = "Honor one person today as someone made in God's image.";
  if (title.includes("rests")) deed = "Practice a holy pause: stop one nonessential thing for a few minutes and receive rest from God.";
  if (title.includes("sin") || focusTitle.includes("fall")) deed = "Confess one specific sin or broken pattern to God and take one step away from it.";
  if (focusTitle.includes("redemption")) deed = "Encourage someone with a word of hope rooted in God's rescue and mercy.";
  if (focusTitle.includes("consummation")) deed = "Make one choice today that reflects hope in God's coming kingdom.";
  return {
    active: "Set aside 10-15 uninterrupted minutes. Read the passage slowly, sit with the verse, pray honestly, and listen before writing or moving on.",
    application: `Where does ${day[1]} invite me to trust, repent, obey, serve, or worship today?`,
    deed
  };
}

function activeFocus() {
  if (!state.activeId) return null;
  return state.focuses.find((focus) => focus.id === state.activeId) || null;
}

function completedSet(focusId) {
  if (!state.completed[focusId]) state.completed[focusId] = new Set();
  return state.completed[focusId];
}

function clampActiveDay(focus) {
  state.activeDayIndex = Math.max(0, Math.min(state.activeDayIndex, focus.days.length - 1));
}

function saveActivePosition() {
  localStorage.setItem("walkWithGodActiveFocus", state.activeId);
  localStorage.setItem("walkWithGodActiveDay", String(state.activeDayIndex));
}

function renderFocusList() {
  themeList.innerHTML = state.focuses
    .map((focus) => {
      const completeCount = completedSet(focus.id).size;
      return `
        <button class="theme-button" type="button" data-id="${focus.id}" aria-pressed="${focus.id === state.activeId}">
          <span class="theme-mark" aria-hidden="true">${focus.mark}</span>
          <span>
            <span class="theme-name">${focus.title}</span>
            <span class="theme-purpose">${completeCount}/${focus.days.length} days complete</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderDayList(focus) {
  const completed = completedSet(focus.id);
  dayList.innerHTML = focus.days
    .map((day, index) => `
      <button class="day-button ${completed.has(index) ? "is-complete" : ""}" type="button" data-index="${index}" aria-pressed="${index === state.activeDayIndex}">
        <span>${day[0]}</span>
        <strong>${day[1]}</strong>
      </button>
    `)
    .join("");
}

function renderReminder() {
  reminderTime.value = state.reminder.time || "07:00";
  reminderMessage.value = state.reminder.message || "Spend uninterrupted time with God today.";
  reminderPush.checked = state.reminder.channels?.push !== false;
  reminderEmail.checked = Boolean(state.reminder.channels?.email);
  reminderSms.checked = Boolean(state.reminder.channels?.sms);
  reminderEmailAddress.value = state.reminder.email || state.user?.email || "";
  reminderPhone.value = state.reminder.phone || "";
  reminderStatus.textContent = state.user ? `Reminder set for ${reminderTime.value}.` : "Sign in to save reminders to your account and enable push.";
}

function renderMode() {
  soloModeButton.classList.toggle("is-active", state.mode === "solo");
  communityModeButton.classList.toggle("is-active", state.mode === "community");
  communityForm.hidden = state.mode !== "community";
  communityFeed.hidden = state.mode !== "community";
}

function reminderFromForm() {
  return {
    time: reminderTime.value || "07:00",
    message: reminderMessage.value.trim() || "Spend uninterrupted time with God today.",
    channels: {
      push: reminderPush.checked,
      email: reminderEmail.checked,
      sms: reminderSms.checked
    },
    email: reminderEmailAddress.value.trim(),
    phone: reminderPhone.value.trim()
  };
}

function renderCommunity() {
  const focus = activeFocus();
  const entries = (focus ? state.community.filter((entry) => entry.focusId === focus.id) : state.community).slice(-8).reverse();
  communityFeed.innerHTML = entries.length
    ? entries
        .map((entry) => `
          <article class="community-entry">
            <strong>${escapeHtml(entry.userName || "Community member")} - ${escapeHtml(entry.dayLabel)} - ${escapeHtml(entry.dayTitle)}</strong>
            <p>${escapeHtml(entry.text)}</p>
            <button class="report-button" type="button" data-post-id="${escapeHtml(entry.id || "")}">Report</button>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No community check-ins for this focus yet.</p>';
}

function renderAdmin() {
  const canAdmin = state.user?.role === "admin" && state.adminUnlocked;
  addFocusForm.hidden = !canAdmin;
  adminDashboard.hidden = !canAdmin;
  lockAdminButton.hidden = !state.adminUnlocked;
  if (state.adminUnlocked && state.user?.role !== "admin") {
    adminStatus.textContent = "Admin code accepted, but this account is not an admin.";
  } else if (canAdmin) {
    adminStatus.textContent = "Admin unlocked. You can manage focuses, accounts, feedback, and reports.";
  }
}

function renderAdminDashboard(data = null) {
  if (!data) return;
  adminSummary.innerHTML = `
    <div><strong>${data.summary.users}</strong><span>Users</span></div>
    <div><strong>${data.summary.communityPosts}</strong><span>Posts</span></div>
    <div><strong>${data.summary.openFeedback}</strong><span>Open feedback</span></div>
    <div><strong>${data.summary.openReports}</strong><span>Open reports</span></div>
  `;

  adminUserList.innerHTML = data.users.length
    ? data.users
        .map((user) => `
          <button class="admin-row" type="button" data-user-id="${escapeHtml(user.id)}">
            <strong>${escapeHtml(user.name)}</strong>
            <span>${escapeHtml(user.email)} - ${escapeHtml(user.role)} - ${user.metrics.completedDays} days complete</span>
          </button>
        `)
        .join("")
    : '<p class="empty-feed">No users yet.</p>';

  adminFeedbackList.innerHTML = data.feedback.length
    ? data.feedback
        .map((item) => `
          <article class="admin-item">
            <strong>${escapeHtml(item.type)} - ${escapeHtml(item.status)}</strong>
            <p>${escapeHtml(item.text)}</p>
            <small>${escapeHtml(item.user?.name || "Unknown user")}</small>
            <button class="quiet-button admin-feedback-action" type="button" data-id="${escapeHtml(item.id)}">Mark Reviewed</button>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No feedback yet.</p>';

  adminReportList.innerHTML = data.reports.length
    ? data.reports
        .map((report) => `
          <article class="admin-item">
            <strong>${escapeHtml(report.status)} report</strong>
            <p>${escapeHtml(report.reason)}</p>
            <small>${escapeHtml(report.post?.userName || "Unknown user")}: ${escapeHtml(report.post?.text || "Post missing")}</small>
            <div class="reflection-actions">
              <button class="quiet-button admin-report-action" type="button" data-id="${escapeHtml(report.id)}" data-status="reviewed">Mark Reviewed</button>
              ${report.post ? `<button class="quiet-button admin-hide-post" type="button" data-post-id="${escapeHtml(report.post.id)}">Hide Post</button>` : ""}
            </div>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No reports yet.</p>';
}

async function loadAdminDashboard() {
  if (state.user?.role !== "admin") return;
  const [summary, users, feedback, reports] = await Promise.all([
    apiFetch("/api/admin/summary"),
    apiFetch("/api/admin/users"),
    apiFetch("/api/admin/feedback"),
    apiFetch("/api/admin/reports")
  ]);
  renderAdminDashboard({
    summary,
    users: users.users || [],
    feedback: feedback.feedback || [],
    reports: reports.reports || []
  });
}

function render() {
  const focus = activeFocus();
  readerEmpty.hidden = Boolean(focus);
  readerContent.hidden = !focus;
  renderAccount();
  renderFocusList();
  renderReminder();
  renderMode();
  renderCommunity();
  renderAdmin();
  if (!focus) {
    progressFill.style.width = "0%";
    saveActivePosition();
    return;
  }
  clampActiveDay(focus);
  const completed = completedSet(focus.id);
  const day = focus.days[state.activeDayIndex];
  const progress = Math.round((completed.size / focus.days.length) * 100);
  const isDayComplete = completed.has(state.activeDayIndex);
  const isFocusComplete = completed.size === focus.days.length;
  const extras = getDayExtras(focus, day);

  activeCategoryLabel.textContent = focus.label;
  activeTitle.textContent = focus.title;
  activePurpose.textContent = focus.description;
  daysPill.textContent = `${focus.days.length} days`;
  progressText.textContent = `${completed.size} of ${focus.days.length} days complete`;
  encouragementText.textContent = isFocusComplete ? "Focus complete. Add another focus when you are ready." : `Complete this focus in ${focus.days.length} days.`;
  progressFill.style.width = `${progress}%`;
  dayLabel.textContent = day[0];
  dayTitle.textContent = day[1];
  scriptureText.textContent = day[2];
  daySummary.textContent = day[3];
  activeTimeText.textContent = extras.active;
  applicationText.textContent = extras.application;
  deedText.textContent = extras.deed;
  implementation.textContent = implementationText;
  noteInput.value = state.notes[dayKey()] || "";
  noteStatus.textContent = "";
  completeButton.textContent = isDayComplete ? "Day Complete" : "Mark Day Complete";
  completeButton.classList.toggle("is-complete", isDayComplete);
  nextButton.disabled = state.activeDayIndex === focus.days.length - 1;

  renderFocusList();
  renderDayList(focus);
  renderReminder();
  renderMode();
  renderCommunity();
  renderAdmin();
  saveActivePosition();
}

themeList.addEventListener("click", (event) => {
  const button = event.target.closest(".theme-button");
  if (!button) return;
  state.activeId = button.dataset.id;
  state.activeDayIndex = 0;
  loadCommunity().finally(render);
});

dayList.addEventListener("click", (event) => {
  const button = event.target.closest(".day-button");
  if (!button) return;
  state.activeDayIndex = Number(button.dataset.index);
  render();
});

completeButton.addEventListener("click", () => {
  const focus = activeFocus();
  completedSet(focus.id).add(state.activeDayIndex);
  saveCompleted();
  if (state.user) {
    apiFetch("/api/progress", { method: "POST", body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex }) }).catch((error) => {
      noteStatus.textContent = error.message;
    });
  }
  render();
});

saveNoteButton.addEventListener("click", () => {
  const focus = activeFocus();
  state.notes[dayKey()] = noteInput.value.trim();
  saveNotes();
  if (!state.user) {
    noteStatus.textContent = "Note saved on this device. Sign in to sync it.";
    return;
  }
  apiFetch("/api/notes", {
    method: "POST",
    body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex, text: noteInput.value.trim() })
  })
    .then(() => {
      noteStatus.textContent = "Note saved to your account.";
    })
    .catch((error) => {
      noteStatus.textContent = error.message;
    });
});

nextButton.addEventListener("click", () => {
  const focus = activeFocus();
  state.activeDayIndex = Math.min(state.activeDayIndex + 1, focus.days.length - 1);
  render();
});

reminderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.reminder = reminderFromForm();
  saveReminder();
  if (!state.user) {
    reminderStatus.textContent = "Reminder saved on this device. Sign in to enable push delivery.";
    return;
  }
  apiFetch("/api/reminder", { method: "POST", body: JSON.stringify(state.reminder) })
    .then(() => {
      reminderStatus.textContent = `Reminder saved for ${state.reminder.time}.`;
    })
    .catch((error) => {
      reminderStatus.textContent = error.message;
    });
});

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

enablePushButton.addEventListener("click", async () => {
  try {
    if (!state.user) throw new Error("Sign in before enabling push notifications.");
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) throw new Error("This browser does not support push notifications.");
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Notification permission was not granted.");
    const keyResult = await apiFetch("/api/push/public-key");
    if (!keyResult.publicKey) throw new Error("Push keys are not ready. Run npm install and restart the server.");
    const registration = await navigator.serviceWorker.register("/service-worker.js");
    const existingSubscription = await registration.pushManager.getSubscription();
    if (existingSubscription) {
      await existingSubscription.unsubscribe();
    }
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(keyResult.publicKey)
    });
    const result = await apiFetch("/api/push/subscribe", { method: "POST", body: JSON.stringify({ subscription }) });
    reminderStatus.textContent = result.pushReady ? "Push notifications enabled." : "Subscription saved, but install web-push on the server to send notifications.";
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

testPushButton.addEventListener("click", async () => {
  try {
    if (!state.user) throw new Error("Sign in before testing reminders.");
    state.reminder = reminderFromForm();
    saveReminder();
    await apiFetch("/api/reminder", { method: "POST", body: JSON.stringify(state.reminder) });
    const result = await apiFetch("/api/push/test", { method: "POST", body: JSON.stringify({}) });
    const channelResults = (result.results || []).map((item) => {
      if (!item.ok) return `${item.channel}: ${item.error || "failed"}`;
      const details = [item.status, item.sid].filter(Boolean).join(" ");
      return `${item.channel}: ${details || "sent"}`;
    });
    reminderStatus.textContent = channelResults.length
      ? channelResults.join(" | ")
      : "No reminder channel was selected for this test.";
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

soloModeButton.addEventListener("click", () => {
  state.mode = "solo";
  localStorage.setItem("walkWithGodMode", state.mode);
  renderMode();
});

communityModeButton.addEventListener("click", () => {
  state.mode = "community";
  localStorage.setItem("walkWithGodMode", state.mode);
  renderMode();
});

communityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = communityInput.value.trim();
  if (!text) {
    communityStatus.textContent = "Write a short check-in first.";
    return;
  }
  if (!state.user) {
    communityStatus.textContent = "Sign in to share with the community.";
    return;
  }
  const focus = activeFocus();
  const day = focus ? focus.days[state.activeDayIndex] : ["Community", "General check-in"];
  apiFetch("/api/community", {
    method: "POST",
    body: JSON.stringify({ focusId: focus?.id || "general", dayLabel: day[0], dayTitle: day[1], text })
  })
    .then(async () => {
      await loadCommunity();
      communityInput.value = "";
      communityStatus.textContent = "Check-in shared with the community.";
      renderCommunity();
    })
    .catch((error) => {
      communityStatus.textContent = error.message;
    });
});

function openAuthForm(mode) {
  state.authMode = mode;
  authForm.hidden = false;
  authName.closest("label").hidden = mode === "login";
  submitAuthButton.textContent = mode === "signup" ? "Create Account" : "Log In";
  authMessage.textContent = mode === "signup" ? "Create your account to save progress and join community." : "Log in to continue.";
}

showSignupButton.addEventListener("click", () => openAuthForm("signup"));
showLoginButton.addEventListener("click", () => openAuthForm("login"));
cancelAuthButton.addEventListener("click", () => {
  authForm.hidden = true;
  authMessage.textContent = "";
});

communityFeed.addEventListener("click", (event) => {
  const button = event.target.closest(".report-button");
  if (!button) return;
  if (!state.user) {
    communityStatus.textContent = "Sign in to report a community post.";
    return;
  }
  if (!button.dataset.postId) {
    communityStatus.textContent = "This local post cannot be reported to the server.";
    return;
  }
  const reason = window.prompt("What should the admin team review about this post?");
  if (!reason) return;
  apiFetch("/api/community/report", {
    method: "POST",
    body: JSON.stringify({ postId: button.dataset.postId, reason })
  })
    .then(() => {
      communityStatus.textContent = "Report sent to the admin team.";
    })
    .catch((error) => {
      communityStatus.textContent = error.message;
    });
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.user) {
    feedbackStatus.textContent = "Sign in before sending feedback.";
    return;
  }
  apiFetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify({ type: feedbackType.value, text: feedbackText.value.trim() })
  })
    .then(() => {
      feedbackText.value = "";
      feedbackStatus.textContent = "Feedback sent to the admin team.";
    })
    .catch((error) => {
      feedbackStatus.textContent = error.message;
    });
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const mode = state.authMode || "login";
  try {
    const result = await apiFetch(mode === "signup" ? "/api/auth/signup" : "/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        name: authName.value.trim(),
        email: authEmail.value.trim(),
        password: authPassword.value
      })
    });
    state.user = result.user;
    authPassword.value = "";
    authMessage.textContent = mode === "signup" ? "Account created." : "Signed in.";
    await loadServerState();
    render();
  } catch (error) {
    authMessage.textContent = error.message;
  }
});

logoutButton.addEventListener("click", async () => {
  try {
    await apiFetch("/api/auth/logout", { method: "POST", body: JSON.stringify({}) });
  } catch {
    // Continue signing out locally.
  }
  state.user = null;
  authForm.hidden = true;
  authMessage.textContent = "Signed out.";
  render();
});

adminUnlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminCodeInput.value.trim() !== adminCode) {
    state.adminUnlocked = false;
    sessionStorage.removeItem("walkWithGodAdminUnlocked");
    adminStatus.textContent = "Admin code did not match.";
    renderAdmin();
    return;
  }
  state.adminUnlocked = true;
  sessionStorage.setItem("walkWithGodAdminUnlocked", "true");
  adminCodeInput.value = "";
  renderAdmin();
  loadAdminDashboard().catch((error) => {
    adminStatus.textContent = error.message;
  });
});

lockAdminButton.addEventListener("click", () => {
  state.adminUnlocked = false;
  sessionStorage.removeItem("walkWithGodAdminUnlocked");
  adminStatus.textContent = "Admin locked.";
  renderAdmin();
});

addFocusForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.adminUnlocked) {
    addFocusStatus.textContent = "Unlock admin before adding focuses.";
    return;
  }
  const title = document.querySelector("#newFocusTitle").value.trim();
  const label = document.querySelector("#newFocusLabel").value.trim() || `Theme ${state.focuses.length + 1}`;
  const description = document.querySelector("#newFocusDescription").value.trim();
  const dayLines = document.querySelector("#newFocusDays").value.split("\n").map((line) => line.trim()).filter(Boolean);
  const days = dayLines.map((line, index) => {
    const parts = line.split("|").map((part) => part.trim());
    return [
      parts[0] || `Day ${index + 1}`,
      parts[1] || "Daily Reading",
      parts[2] || "Scripture reference",
      parts[3] || "Read the passage and notice what God reveals."
    ];
  });
  const focus = { id: `custom-${Date.now()}`, label, mark: title.charAt(0).toUpperCase(), title, description, days, custom: true };
  state.focuses.push(focus);
  state.activeId = focus.id;
  state.activeDayIndex = 0;
  saveAddedFocuses();
  addFocusForm.reset();
  addFocusStatus.textContent = `${title} added with ${days.length} days.`;
  render();
});

clearAddedFocuses.addEventListener("click", () => {
  if (!state.adminUnlocked) {
    addFocusStatus.textContent = "Unlock admin before clearing focuses.";
    return;
  }
  state.focuses = state.focuses.filter((focus) => !focus.custom);
  localStorage.removeItem("walkWithGodAddedFocuses");
  state.activeId = state.focuses[0].id;
  state.activeDayIndex = 0;
  addFocusStatus.textContent = "Added focuses cleared.";
  render();
});

adminUserList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-row");
  if (!button) return;
  state.selectedAdminUserId = button.dataset.userId;
  apiFetch(`/api/admin/user?id=${encodeURIComponent(state.selectedAdminUserId)}`)
    .then((result) => {
      const user = result.user;
      adminUserDetail.innerHTML = `
        <p><strong>${escapeHtml(user.name)}</strong></p>
        <p>${escapeHtml(user.email)} - ${escapeHtml(user.role)}</p>
        <p>${user.metrics.completedDays} completed days, ${user.metrics.communityPosts} community posts, ${user.metrics.privateNotes} private notes.</p>
        <p>Reminder: ${escapeHtml(user.metrics.reminder?.time || "not set")} - Push devices: ${user.metrics.pushSubscriptions}</p>
      `;
      adminSupportForm.hidden = false;
      adminSupportStatus.textContent = "";
    })
    .catch((error) => {
      adminUserDetail.textContent = error.message;
    });
});

adminSupportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.selectedAdminUserId) return;
  apiFetch("/api/admin/user/message", {
    method: "POST",
    body: JSON.stringify({ userId: state.selectedAdminUserId, text: adminSupportMessage.value.trim() })
  })
    .then(() => {
      adminSupportMessage.value = "";
      adminSupportStatus.textContent = "Support message sent.";
      return loadAdminDashboard();
    })
    .catch((error) => {
      adminSupportStatus.textContent = error.message;
    });
});

adminResetPasswordButton.addEventListener("click", () => {
  if (!state.selectedAdminUserId) return;
  apiFetch("/api/admin/user/reset-password", {
    method: "POST",
    body: JSON.stringify({ userId: state.selectedAdminUserId })
  })
    .then((result) => {
      adminSupportStatus.textContent = `Temporary password: ${result.temporaryPassword}`;
    })
    .catch((error) => {
      adminSupportStatus.textContent = error.message;
    });
});

adminFeedbackList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-feedback-action");
  if (!button) return;
  apiFetch("/api/admin/feedback/status", {
    method: "POST",
    body: JSON.stringify({ id: button.dataset.id, status: "reviewed" })
  })
    .then(loadAdminDashboard)
    .catch((error) => {
      adminStatus.textContent = error.message;
    });
});

adminReportList.addEventListener("click", (event) => {
  const reportButton = event.target.closest(".admin-report-action");
  const hideButton = event.target.closest(".admin-hide-post");
  if (reportButton) {
    apiFetch("/api/admin/reports/status", {
      method: "POST",
      body: JSON.stringify({ id: reportButton.dataset.id, status: reportButton.dataset.status })
    })
      .then(loadAdminDashboard)
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  }
  if (hideButton) {
    apiFetch("/api/admin/community/hide", {
      method: "POST",
      body: JSON.stringify({ postId: hideButton.dataset.postId })
    })
      .then(loadAdminDashboard)
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  }
});

async function init() {
  if (window.location.protocol === "file:") {
    serverWarning.hidden = false;
  }
  try {
    const result = await apiFetch("/api/me");
    state.user = result.user;
    if (state.user) {
      await loadServerState();
    } else {
      await loadCommunity();
    }
  } catch {
    state.user = null;
  }
  render();
}

init();
