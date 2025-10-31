// Service Worker sin caché

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  // Puedes usar skipWaiting() para activarlo de inmediato
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  // Reclama control de las páginas sin recargar
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Aquí no se interceptan peticiones ni se guarda nada
  // Solo se deja pasar todo al navegador
  return;
});
