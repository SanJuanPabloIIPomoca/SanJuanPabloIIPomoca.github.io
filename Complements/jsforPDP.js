if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../AppWeb/sw.js")
    .then(() => console.log("✅ Service Worker registrado correctamente"))
    .catch((err) => console.error("❌ Error al registrar el Service Worker:", err));
}
