if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("✅ Service Worker registrado correctamente"))
    .catch((err) => console.error("❌ Error al registrar el Service Worker:", err));
}
