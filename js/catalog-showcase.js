(() => {
  const root = document.documentElement;
  const body = document.body;
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = document.getElementById("motion-switch");
  const heroButton = document.getElementById("hero-play");
  const heroLabel = document.getElementById("hero-play-label");
  const catalogCards = Array.from(document.querySelectorAll("[data-catalog-card]"));
  const categoryNames = {
    ui: "UI",
    question: "QUESTION",
    result: "RESULT",
    effect: "MOTION",
    decoration: "DECO"
  };

  function savedMotionPreference() {
    try { return localStorage.getItem("edu-effects-motion"); }
    catch (error) { return null; }
  }

  function saveMotionPreference(value) {
    try { localStorage.setItem("edu-effects-motion", value); }
    catch (error) { /* The switch still works when storage is unavailable. */ }
  }

  function setMotionOff(isOff, persist = true) {
    body.classList.toggle("motion-off", isOff);
    if (!motionButton) return;
    motionButton.setAttribute("aria-pressed", String(isOff));
    motionButton.textContent = isOff ? "動きを再開" : "動きを止める";
    if (persist) saveMotionPreference(isOff ? "off" : "on");
  }

  const storedMotion = savedMotionPreference();
  setMotionOff(storedMotion ? storedMotion === "off" : reduceQuery.matches, false);
  motionButton?.addEventListener("click", () => setMotionOff(!body.classList.contains("motion-off")));

  const heroScenes = [
    { className: "effect-impact", label: "ドン！ 数字や結果を強く見せる" },
    { className: "effect-ripple", label: "波紋。正解のよろこびを広げる" },
    { className: "effect-glint", label: "キラッ。特別な達成を知らせる" },
    { className: "effect-unlock", label: "アンロック。次の学びを開く" }
  ];
  let heroSceneIndex = 0;

  function playClass(target, className) {
    if (!target || body.classList.contains("motion-off")) return;
    if (window.EduEffects?.play) window.EduEffects.play(target, className);
    else {
      target.classList.remove(className);
      void target.offsetWidth;
      target.classList.add(className);
    }
  }

  heroButton?.addEventListener("click", () => {
    const scene = heroScenes[heroSceneIndex % heroScenes.length];
    heroButton.classList.remove(...heroScenes.map(item => item.className));
    playClass(heroButton, scene.className);
    if (heroLabel) heroLabel.textContent = scene.label;
    if (scene.className === "effect-ripple" && window.EduEffects?.confetti) {
      window.EduEffects.confetti(heroButton.closest(".ref-playground-board"));
    }
    heroSceneIndex += 1;
  });

  document.querySelectorAll("[data-showcase-action]").forEach(button => {
    button.addEventListener("click", () => {
      const scene = button.closest(".ref-scene");
      const target = scene?.querySelector("[data-showcase-target]");
      const action = button.dataset.showcaseAction;
      if (action === "confetti" && window.EduEffects?.confetti) {
        window.EduEffects.confetti(scene);
        playClass(target, "effect-level-up");
      } else {
        playClass(target, action);
      }
    });
  });

  catalogCards.forEach(card => {
    const kind = document.createElement("span");
    kind.className = "ref-card-kind";
    kind.setAttribute("aria-hidden", "true");
    kind.textContent = categoryNames[card.dataset.category] || "UI";
    card.appendChild(kind);
  });

  const countTargets = document.querySelectorAll("[data-material-count]");
  countTargets.forEach(target => { target.textContent = String(catalogCards.length); });

  document.getElementById("surprise-me")?.addEventListener("click", () => {
    const visibleCards = catalogCards.filter(card => !card.classList.contains("ref-catalog-card-hidden"));
    const pool = visibleCards.length ? visibleCards : catalogCards;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    if (!chosen) return;
    chosen.scrollIntoView({ behavior: body.classList.contains("motion-off") ? "auto" : "smooth", block: "center" });
    chosen.classList.add("edu-focus-ring");
    window.setTimeout(() => chosen.classList.remove("edu-focus-ring"), 1400);
  });

  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".ref-nav a[href^='#']"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: .05 });

    sections.forEach(section => {
      section.dataset.reveal = "";
      revealObserver.observe(section);
    });

    const navObserver = new IntersectionObserver(entries => {
      const current = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === "#" + current.target.id;
        link.classList.toggle("is-current", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -65%", threshold: [0, .1, .5] });

    sections.forEach(section => navObserver.observe(section));
  } else {
    sections.forEach(section => section.classList.add("is-revealed"));
  }

  root.classList.add("catalog-enhanced");
})();
