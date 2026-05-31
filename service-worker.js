self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("walk-with-god-v2").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/styles.css?v=20260531-wellness",
        "/app.js",
        "/manifest.json",
        "/assets/daily-devotion.png",
        "/assets/walk-with-god-logo.png",
        "/assets/icon-192.png",
        "/assets/icon-512.png"
      ]).catch(() => undefined)
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== "walk-with-god-v2").map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open("walk-with-god-v2").then((cache) => cache.put(event.request, copy)).catch(() => undefined);
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/index.html")))
  );
});

self.addEventListener("push", (event) => {
  let payload = { title: "Walk With God", body: "Spend uninterrupted time with God today." };
  if (event.data) {
    try {
      payload = event.data.json();
    } catch {
      payload.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title || "Walk With God", {
      body: payload.body || "Spend uninterrupted time with God today.",
      icon: "/assets/icon-512.png?v=20260531",
      badge: "/assets/icon-192.png?v=20260531",
      data: { url: "/" }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || "/"));
});
