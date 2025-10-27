const CACHE_NAME = "parroquia-sjpii-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./favicon.png",
  "./logo-720.png",
  "./Lovelo Line Bold.otf",
  "./Moon Bold.otf"
];

// Instalar: guardar en caché los archivos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activar: eliminar caché antigua
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

// Interceptar peticiones: usar caché si existe
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
