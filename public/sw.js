// Auto-generated build stamp for cache busting
const BUILD_VERSION = 'sg-1793876078550';
const CACHE_NAME = 'nextsem-ncert-' + BUILD_VERSION;

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/app-logo.png',
  '/app-icon-192.png',
  '/app-icon-512.png',
  '/favicon.svg'
];

// Install Event - Pre-cache core shell & immediately take over
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Non-fatal pre-cache warning:', err);
      });
    })
  );
});

// Activate Event - Clean up all outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting stale cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Message Event - Allow clients to trigger skipWaiting
self.addEventListener('message', (event) => {
  if (event.data && (event.data.type === 'SKIP_WAITING' || event.data === 'skipWaiting')) {
    self.skipWaiting();
  }
});

// Fetch Event - Dynamic Network First with Cache Fallback for instant updates
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. NEVER cache live version check, sw.js, or API requests
  if (url.pathname.endsWith('/version.json') || url.pathname.endsWith('/sw.js')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  // 2. Ignore non-http(s) schemes like chrome-extension://
  if (!url.protocol.startsWith('http')) return;

  // 3. For navigation & HTML requests: Network First, Fallback to Cache (Ensures changes show immediately)
  const isHtml = event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html');

  if (isHtml) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            return cached || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // 4. For static assets (hashed JS, CSS, Images, Fonts): Cache First with background revalidation
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed, nothing extra to do if cachedResponse is already available
        });

      return cachedResponse || fetchPromise;
    })
  );
});
