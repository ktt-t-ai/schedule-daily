// Minimal service worker. Required by some browsers to surface the install prompt.
// Offline support is intentionally NOT implemented — this is a no-op SW.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Intentionally empty — fall through to network for every request.
});
