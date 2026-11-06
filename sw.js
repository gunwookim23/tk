// 앱 설치용 최소 서비스워커 (캐시 없음, 그대로 인터넷에서 불러옴)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
