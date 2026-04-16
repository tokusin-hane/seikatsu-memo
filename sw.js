const CACHE = 'seikatsu-memo-v1';
const ASSETS = ['/', '/seikatsu-memo/', '/seikatsu-memo/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
