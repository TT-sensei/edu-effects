/*
 * edu-effects.js
 * Tiny optional helpers for replaying CSS effects and creating simple particles.
 */
window.EduEffects = {
  play(target, className) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  },

  confetti(target, count = 18) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    el.classList.add("effect-confetti");
    for (let i = 0; i < count; i += 1) {
      const piece = document.createElement("span");
      piece.className = "effect-confetti-piece";
      piece.style.setProperty("--confetti-x", Math.round(Math.random() * 180 - 90) + "px");
      piece.style.setProperty("--confetti-y", Math.round(Math.random() * 130 + 40) + "px");
      piece.style.setProperty("--confetti-delay", Math.round(Math.random() * 180) + "ms");
      piece.style.setProperty("--confetti-color", ["#d79b38", "#dc713c", "#177d69", "#2563eb"][i % 4]);
      el.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove(), { once: true });
    }
  },

  fireworks(target) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    this.play(el, "effect-achievement-burst");
  }
};
