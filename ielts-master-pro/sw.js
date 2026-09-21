// IELTS Master Pro Service Worker
// Enables offline access and client-side PWA performance

const CACHE_NAME = 'ielts-pro-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './ielts.html',
  './grammar.html',
  './vocabulary.html',
  './tests.html',
  './analytics.html',
  './reading.html',
  './library.html',
  './mock-exam.html',
  './manifest.json',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/js/library-data.js',
  './assets/js/analytics.js',
  './assets/js/srs-engine.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        return cachedResponse;
      });
    })
  );
});
