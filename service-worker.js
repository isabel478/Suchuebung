const CACHE_NAME = "suchuebung-v1";

const APP_FILES = [
  "/Suchuebung/",
  "/Suchuebung/index.html",
  "/Suchuebung/startseite.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_FILES);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});