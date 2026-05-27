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
      icon: "/assets/daily-devotion.png",
      badge: "/assets/daily-devotion.png",
      data: { url: "/" }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || "/"));
});
