const CACHE_NAME = "aligudarzgard-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons.js",
  "./sites-seed.js",
  "./sheet-config.js",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for app shell, network-first for map tiles (so tiles stay fresh but app still opens offline)
self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  if (url.includes("tile.openstreetmap.org")) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
