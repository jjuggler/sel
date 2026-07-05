// 인성 실천 포트폴리오 — 서비스워커 (네트워크 우선 + 오프라인 폴백)
const CACHE_NAME = 'insung-app-v43';
const CORE_ASSETS = [
  './',
  './index.html',
  './content-data.js',
  './firebase-config.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // 새 버전 즉시 대기열로
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim()) // 즉시 제어
  );
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  // Firebase / Gemini / CDN 등 외부 요청은 항상 네트워크로 (캐시 안 함)
  if (url.includes('firebase') || url.includes('googleapis') ||
      url.includes('gstatic') || url.includes('cdn.') ||
      url.includes('generativelanguage')) {
    return;
  }
  // 앱 코드(html/js/json)는 네트워크 우선 → 항상 최신 반영, 오프라인이면 캐시
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy).catch(() => {}));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
