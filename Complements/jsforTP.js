// =========================
// ⏰ Contador regresivo
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("December 1, 2025 10:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownElement.innerHTML = "¡Actualiza la página!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Faltan ${days} dias ${hours}h ${minutes}m ${seconds}s`;
  }

  // Actualiza cada segundo
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
});

// =========================
// 🔧 Service Worker
// =========================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("AppWeb/sw.js")
    .then(() => console.log("✅ Service Worker registrado correctamente"))
    .catch((err) => console.error("❌ Error al registrar el Service Worker:", err));
}
