// Cirugía en Cardiopatías Congénitas - funcionamiento sin conexión
// Cambiá VERSION cada vez que actualices index.html para que los celulares bajen la versión nueva.
const VERSION = "v7";
const CACHE = "cirugia-cc-" + VERSION;
const CORE = ["./", "./index.html", "./lib/three.module.min.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/icon-maskable-512.png",
  "./fonts/ibm-plex-sans-latin-400-normal.woff2", "./fonts/ibm-plex-sans-latin-400-italic.woff2", "./fonts/ibm-plex-sans-latin-500-normal.woff2", "./fonts/ibm-plex-sans-latin-600-normal.woff2",
  "./fonts/ibm-plex-sans-condensed-latin-500-normal.woff2", "./fonts/ibm-plex-sans-condensed-latin-600-normal.woff2", "./fonts/ibm-plex-sans-condensed-latin-700-normal.woff2"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // La página: primero la red (para recibir actualizaciones); sin conexión, la copia guardada
  if (req.mode === "navigate" || (url.origin === location.origin && /(\.html|\.webmanifest|\/)$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })
      .catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || caches.match("./index.html"))));
    return;
  }
  // three.js, íconos y fuentes: primero la copia guardada
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r;
    })));
  }
});
