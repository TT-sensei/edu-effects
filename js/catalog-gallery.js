(() => {
  const materials = [
    {
      title: "大きな選択肢", className: ".edu-choice", category: "question", file: "edu-effects.css", tags: "問題 選択肢 2択 4択 答える",
      preview: '<button class="edu-choice is-selected" type="button"><span aria-hidden="true">A</span><span><strong>条件をそろえる</strong><small>実験で確かめたい条件</small></span></button>',
      copy: '<button class="edu-choice" type="button"><span aria-hidden="true">A</span><span><strong>答え</strong><small>補足説明</small></span></button>'
    },
    {
      title: "問題カード", className: ".edu-question", category: "question", file: "edu-learning.css", tags: "問題 問い 番号 学習",
      preview: '<div class="edu-question"><div class="edu-question-head"><span class="edu-question-number">Q.3</span><span class="edu-badge edu-badge-primary">理科</span></div><p class="edu-question-text">月の形が変わって見えるのはなぜ？</p></div>',
      copy: '<div class="edu-question"><div class="edu-question-head"><span class="edu-question-number">Q.1</span></div><p class="edu-question-text">問題文</p></div>'
    },
    {
      title: "○×問題", className: ".edu-answer-binary", category: "question", file: "edu-ui-variants.css", tags: "丸 ばつ 二択 正誤",
      preview: '<div class="edu-answer-binary"><button class="edu-btn edu-btn-success" type="button">○</button><button class="edu-btn edu-btn-danger" type="button">×</button></div>',
      copy: '<div class="edu-answer-binary"><button class="edu-btn edu-btn-success">○</button><button class="edu-btn edu-btn-danger">×</button></div>'
    },
    {
      title: "答え入力", className: ".edu-input-answer", category: "question", file: "edu-ui-variants.css", tags: "入力 穴埋め 算数 答え",
      preview: '<label class="edu-field"><span class="edu-label">答えを入力</span><input class="edu-input edu-input-answer" value="42" inputmode="numeric" aria-label="答え"></label>',
      copy: '<input class="edu-input edu-input-answer" inputmode="numeric" aria-label="答え">'
    },
    {
      title: "ことば並べ", className: ".edu-sort-board", category: "question", file: "edu-ui-variants.css", tags: "並べ替え ドラッグ 国語 順番",
      stage: "is-grid",
      preview: '<div class="edu-sort-board"><span class="edu-sort-chip">いぬ</span><span class="edu-sort-chip">さる</span><span class="edu-sort-chip">ねこ</span></div>',
      copy: '<div class="edu-sort-board"><span class="edu-sort-chip">ことば</span><span class="edu-sort-chip">ことば</span></div>'
    },
    {
      title: "リングタイマー", className: ".edu-timer-ring", category: "question", file: "edu-learning.css", tags: "時間 カウントダウン 60秒 チャレンジ",
      preview: '<div class="edu-timer-ring" style="--value:68" data-label="SEC"><strong>41</strong></div>',
      copy: '<div class="edu-timer-ring" style="--value:68" data-label="SEC"><strong>41</strong></div>'
    },
    {
      title: "資料・ヒント", className: ".edu-panel-context", category: "feedback", file: "edu-effects-learning-panels.css", tags: "ヒント 資料 文脈 説明",
      preview: '<div class="edu-panel-context"><span class="edu-panel-label">HINT</span><strong>まず「はしら」を見よう</strong><p style="margin:.4em 0 0">ページにある言葉の最初と最後が分かります。</p></div>',
      copy: '<div class="edu-panel-context"><span class="edu-panel-label">HINT</span>ヒントの内容</div>'
    },
    {
      title: "気づきパネル", className: ".edu-panel-insight", category: "feedback", file: "edu-effects-learning-panels.css", tags: "気づき 考察 分析 紫",
      stage: "is-violet",
      preview: '<div class="edu-panel-insight"><span class="edu-panel-label">INSIGHT</span><strong>同じところと違うところ</strong><p style="margin:.4em 0 0">二つの資料を比べると変化が見えてきます。</p></div>',
      copy: '<div class="edu-panel-insight"><span class="edu-panel-label">INSIGHT</span>気づいたこと</div>'
    },
    {
      title: "先生のひとこと", className: ".edu-speech-bubble", category: "feedback", file: "edu-interactive.css", tags: "先生 吹き出し アドバイス コメント",
      preview: '<div class="edu-speech-bubble"><span class="edu-speech-avatar">先</span><span class="edu-speech-text"><strong>いい見方です！</strong><br>理由も書くと、もっと伝わります。</span></div>',
      copy: '<div class="edu-speech-bubble"><span class="edu-speech-avatar">先</span><span class="edu-speech-text">アドバイス</span></div>'
    },
    {
      title: "考え中オーブ", className: ".edu-state-orb", category: "feedback", file: "edu-effects-interaction-kit.css", tags: "状態 思考中 待機 読み込み orb",
      stage: "is-dark",
      preview: '<div><div class="edu-state-orb">考え中</div><div class="edu-state-orb-label">答えを組み立てています</div></div>',
      copy: '<div class="edu-state-orb">考え中</div><div class="edu-state-orb-label">処理しています</div>'
    },
    {
      title: "先生メモ", className: ".edu-annotation-note", category: "feedback", file: "edu-effects-interaction-kit.css", tags: "注釈 レビュー 先生 メモ 確認",
      stage: "is-warm",
      preview: '<div class="edu-annotation-note is-question"><strong>ここを確認</strong><br>問いと選択肢が一画面に収まっていますか？</div>',
      copy: '<div class="edu-annotation-note is-question"><strong>確認</strong><br>コメント</div>'
    },
    {
      title: "正解リング", className: ".effect-correct-ring", category: "feedback", file: "edu-effects-library.css", tags: "正解 丸 判定 アニメーション",
      stage: "is-grid", effect: "effect-correct-ring",
      preview: '<div class="edu-card edu-card-pad" style="text-align:center"><strong style="font-size:1.25rem">正解！</strong><p class="edu-card-meta">その調子です</p></div>',
      copy: '<div class="effect-correct-ring">正解！</div>'
    },
    {
      title: "ランク結果", className: ".edu-rank-card", category: "reward", file: "edu-ui-variants.css", tags: "結果 Sランク 評価 スコア",
      stage: "is-warm", effect: "effect-impact",
      preview: '<div class="edu-rank-card"><span class="edu-rank-badge edu-rank-s">S</span><div><strong>すばらしい！</strong><p class="edu-card-meta">BEST SCORE · 1280</p></div></div>',
      copy: '<div class="edu-rank-card"><span class="edu-rank-badge edu-rank-s">S</span><div><strong>すばらしい！</strong><p>BEST SCORE</p></div></div>'
    },
    {
      title: "単元クリア", className: ".edu-complete", category: "reward", file: "edu-ui-variants.css", tags: "完了 クリア 達成 チェック",
      effect: "effect-stamp",
      preview: '<div class="edu-complete"><span class="edu-complete-mark">✓</span><strong>単元クリア</strong><p style="margin:.35em 0 0">すべてのミッション達成！</p></div>',
      copy: '<div class="edu-complete"><span class="edu-complete-mark">✓</span><strong>単元クリア</strong></div>'
    },
    {
      title: "XPゲージ", className: ".edu-xp", category: "reward", file: "edu-ui-variants.css", tags: "経験値 進捗 レベル ゲージ",
      stage: "is-violet",
      preview: '<div class="edu-card edu-card-pad" style="width:100%"><div class="edu-xp edu-kinetic-xp"><div class="edu-xp-head"><span>研究XP</span><strong>72 / 100</strong></div><div class="edu-xp-track"><div class="edu-xp-value" style="width:72%"></div></div></div></div>',
      copy: '<div class="edu-xp"><div class="edu-xp-head"><span>XP</span><strong>72 / 100</strong></div><div class="edu-xp-track"><div class="edu-xp-value" style="width:72%"></div></div></div>'
    },
    {
      title: "連続記録", className: ".edu-streak", category: "reward", file: "edu-interactive.css", tags: "連続 コンボ streak 記録 継続",
      stage: "is-dark", effect: "edu-kinetic-number",
      preview: '<div class="edu-streak edu-streak-hot"><span class="edu-streak-icon">✦</span><span><b class="edu-streak-value">12</b><small class="edu-streak-label">連続正解</small></span></div>',
      copy: '<div class="edu-streak edu-streak-hot"><span class="edu-streak-icon">✦</span><span><b class="edu-streak-value">12</b><small class="edu-streak-label">連続正解</small></span></div>'
    },
    {
      title: "発見コレクション", className: ".edu-card-collection", category: "reward", file: "edu-ui-variants.css", tags: "カード 図鑑 コレクション バッジ 発見",
      stage: "is-violet", effect: "effect-badge-unlock",
      preview: '<div class="edu-card edu-card-collection edu-card-pad"><span class="edu-badge edu-badge-primary">NEW</span><h3 class="edu-card-title">月のひみつ</h3><p class="edu-card-meta">DISCOVERY 08</p></div>',
      copy: '<article class="edu-card edu-card-collection edu-card-pad"><h3 class="edu-card-title">発見カード</h3><p class="edu-card-meta">DISCOVERY 01</p></article>'
    },
    {
      title: "バッジ獲得", className: ".effect-badge-unlock", category: "reward", file: "edu-effects-library.css", tags: "バッジ ごほうび 獲得 回転 光",
      stage: "is-dark", effect: "effect-badge-unlock",
      preview: '<div class="effect-badge-icon" style="position:relative;display:grid;width:92px;height:92px;place-items:center;border-radius:50%;color:#171923;background:#d9ff43;font-size:2.5rem"><span class="effect-badge-shine"></span>★</div>',
      copy: '<div class="effect-badge-unlock"><div class="effect-badge-icon"><span class="effect-badge-shine"></span>★</div></div>'
    },
    {
      title: "インパクト", className: ".effect-impact", category: "motion", file: "edu-effects-advanced.css", tags: "ドン 強調 スコア 数字 動き",
      stage: "is-warm", effect: "effect-impact",
      preview: '<div style="font-size:3rem;font-weight:950;letter-spacing:-.08em">+100 XP</div>',
      copy: '<div class="effect-impact">+100 XP</div>'
    },
    {
      title: "光が走る", className: ".effect-glint", category: "motion", file: "edu-effects-advanced.css", tags: "キラ 光 glint 達成 カード",
      stage: "is-dark", effect: "effect-glint",
      preview: '<div class="edu-card edu-card-dark edu-card-pad" style="width:min(100%,280px);text-align:center"><strong>NEW RECORD</strong><p class="edu-card-meta">BEST 01:24</p></div>',
      copy: '<div class="effect-glint">NEW RECORD</div>'
    },
    {
      title: "キネティック登場", className: ".edu-kinetic-pop", category: "motion", file: "edu-effects-kinetic.css", tags: "登場 反発 pop モーション",
      stage: "is-grid", effect: "edu-kinetic-pop",
      preview: '<div class="edu-card edu-card-pad"><strong>できた！</strong><p class="edu-card-meta">タップの結果を伝える</p></div>',
      copy: '<div class="edu-kinetic-pop">できた！</div>'
    },
    {
      title: "答えを開く", className: ".edu-reveal", category: "motion", file: "edu-effects-learning-motion.css", tags: "開示 ヒント 答え reveal",
      stage: "is-violet", effect: "edu-reveal-up",
      preview: '<div class="edu-card edu-card-pad"><span class="edu-badge edu-badge-primary">ANSWER</span><h3 class="edu-card-title">太陽の光</h3><p class="edu-card-meta">月が光って見える理由</p></div>',
      copy: '<div class="edu-reveal edu-reveal-up">開く内容</div>'
    },
    {
      title: "順番に表示", className: ".edu-stagger", category: "motion", file: "edu-effects-learning-motion.css", tags: "順番 リスト 選択肢 stagger",
      effect: "edu-stagger",
      preview: '<div class="edu-stagger" style="display:grid;gap:7px;width:100%"><button class="edu-btn edu-btn-secondary">観察する</button><button class="edu-btn edu-btn-secondary">比べる</button><button class="edu-btn edu-btn-secondary">まとめる</button></div>',
      copy: '<div class="edu-stagger"><div>1つ目</div><div>2つ目</div><div>3つ目</div></div>'
    },
    {
      title: "ページ切り替え", className: ".edu-transition-page", category: "motion", file: "edu-effects-interaction-kit.css", tags: "画面遷移 ページ 切替 transition",
      stage: "is-dark", effect: "edu-transition-page",
      preview: '<div class="edu-card edu-card-pad" style="color:#15171c"><span class="edu-badge edu-badge-success">STEP 2</span><h3 class="edu-card-title">結果をたしかめる</h3></div>',
      copy: '<section class="edu-transition-page">次の画面</section>'
    },
    {
      title: "理科の方眼", className: ".deco-theme-science", category: "decoration", file: "edu-decorations-advanced.css", tags: "理科 科学 方眼 背景 実験",
      preview: '<section class="deco-surface deco-theme-science"><span class="edu-paper-label">SCIENCE</span><h3>実験の記録</h3><p>変える条件と同じ条件を整理しよう。</p></section>',
      copy: '<section class="deco-surface deco-theme-science">内容</section>'
    },
    {
      title: "ノート背景", className: ".deco-theme-note", category: "decoration", file: "edu-decorations-advanced.css", tags: "ノート 紙 横線 振り返り",
      preview: '<section class="deco-surface deco-theme-note"><h3>今日の振り返り</h3><p>分かったこと・次に調べたいこと</p></section>',
      copy: '<section class="deco-surface deco-theme-note">内容</section>'
    },
    {
      title: "黒板テーマ", className: ".deco-theme-chalk", category: "decoration", file: "edu-decorations-advanced.css", tags: "黒板 チョーク 教室 背景",
      stage: "is-dark",
      preview: '<section class="deco-surface deco-theme-chalk"><span class="edu-paper-label">TODAY</span><h3>めあて</h3><p>二つの資料を比べて考えよう。</p></section>',
      copy: '<section class="deco-surface deco-theme-chalk">内容</section>'
    },
    {
      title: "宇宙テーマ", className: ".deco-theme-space", category: "decoration", file: "edu-decorations-advanced.css", tags: "宇宙 星 月 背景 理科",
      stage: "is-dark",
      preview: '<section class="deco-surface deco-theme-space"><span class="edu-badge edu-badge-outline">SPACE LAB</span><h3>月と太陽</h3><p>見え方の変化を追ってみよう。</p></section>',
      copy: '<section class="deco-surface deco-theme-space">内容</section>'
    },
    {
      title: "オーロラ背景", className: ".edu-creative-aurora", category: "decoration", file: "edu-effects-creative.css", tags: "オーロラ 光 背景 探究",
      stage: "is-dark",
      preview: '<section class="edu-creative-aurora" style="display:grid;width:100%;min-height:160px;place-items:center;padding:24px;border-radius:16px"><strong style="position:relative;z-index:2;font-size:1.5rem">探究をはじめよう</strong></section>',
      copy: '<section class="edu-creative-aurora">内容</section>'
    },
    {
      title: "重なるカード", className: ".edu-creative-stack", category: "decoration", file: "edu-effects-creative.css", tags: "カード 重なり コレクション stack",
      stage: "is-violet",
      preview: '<article class="edu-card edu-card-pad edu-creative-stack" style="width:min(88%,280px)"><span class="edu-badge edu-badge-primary">COLLECTION</span><h3 class="edu-card-title">発見カード</h3><p class="edu-card-meta">08 / 24</p></article>',
      copy: '<article class="edu-card edu-creative-stack">カードの内容</article>'
    }
  ];

  const labels = {
    question: "ANSWER / 答える",
    feedback: "FEEDBACK / 伝える",
    reward: "REWARD / ほめる",
    motion: "MOTION / 動かす",
    decoration: "DECORATION / 飾る"
  };

  const grid = document.getElementById("material-grid");
  const search = document.getElementById("material-search");
  const clear = document.getElementById("search-clear");
  const visibleCount = document.getElementById("visible-count");
  const total = document.getElementById("material-total");
  const empty = document.getElementById("catalog-empty");
  const toast = document.getElementById("copy-toast");
  const motionToggle = document.getElementById("motion-toggle");
  let activeCategory = "all";
  let toastTimer;

  const escapeHtml = value => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  function renderCards() {
    grid.innerHTML = materials.map((material, index) => `
      <article class="material-card" data-index="${index}" data-category="${material.category}" data-search="${escapeHtml(`${material.title} ${material.className} ${material.file} ${material.tags}`.toLowerCase())}">
        <div class="material-preview ${material.stage || ""}" data-preview>${material.preview}</div>
        <button class="material-replay" type="button" data-replay aria-label="${material.title}を再生">↻</button>
        <div class="material-info">
          <div><span class="material-category">${labels[material.category]} · ${material.file}</span><h3>${material.title}</h3><code>${material.className}</code></div>
          <button class="material-copy" type="button" data-copy-index="${index}">HTMLをコピー</button>
        </div>
      </article>`).join("");
    total.textContent = String(materials.length);
    filterCards();
  }

  function filterCards() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    document.querySelectorAll(".material-card").forEach(card => {
      const visible = (activeCategory === "all" || card.dataset.category === activeCategory) && (!query || card.dataset.search.includes(query));
      card.classList.toggle("catalog-hidden", !visible);
      if (visible) count += 1;
    });
    visibleCount.textContent = String(count);
    empty.hidden = count !== 0;
  }

  function selectCategory(category, shouldScroll = false) {
    activeCategory = category;
    document.querySelectorAll("[data-category]").forEach(button => {
      if (!button.matches("button")) return;
      button.classList.toggle("is-active", button.dataset.category === category);
      button.setAttribute("aria-pressed", String(button.dataset.category === category));
    });
    filterCards();
    if (shouldScroll) document.getElementById("catalog").scrollIntoView({ behavior: document.body.classList.contains("motion-off") ? "auto" : "smooth" });
  }

  function playMaterial(card) {
    const material = materials[Number(card.dataset.index)];
    const preview = card.querySelector("[data-preview]");
    preview.innerHTML = material.preview;
    const target = preview.firstElementChild;
    if (document.body.classList.contains("motion-off")) return;
    if (material.effect === "effect-correct-ring") {
      target.classList.add(material.effect);
    } else if (material.effect) {
      window.EduEffects?.play ? window.EduEffects.play(target, material.effect) : target.classList.add(material.effect);
    } else {
      window.EduEffects?.play ? window.EduEffects.play(target, "edu-kinetic-pop-soft") : target.classList.add("edu-kinetic-pop-soft");
    }
  }

  function showToast(message = "コピーしました") {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1600);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast();
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast();
    }
  }

  grid.addEventListener("click", event => {
    const replay = event.target.closest("[data-replay]");
    if (replay) playMaterial(replay.closest(".material-card"));
    const copy = event.target.closest("[data-copy-index]");
    if (copy) copyText(materials[Number(copy.dataset.copyIndex)].copy);
  });

  document.querySelectorAll("button[data-category]").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category, button.closest(".gallery-collections") !== null));
  });
  search.addEventListener("input", filterCards);
  clear.addEventListener("click", () => { search.value = ""; search.focus(); filterCards(); });
  document.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", () => copyText(document.getElementById(button.dataset.copy).textContent)));

  document.getElementById("random-material").addEventListener("click", () => {
    selectCategory("all");
    search.value = "";
    filterCards();
    const cards = Array.from(document.querySelectorAll(".material-card"));
    const chosen = cards[Math.floor(Math.random() * cards.length)];
    chosen.scrollIntoView({ behavior: document.body.classList.contains("motion-off") ? "auto" : "smooth", block: "center" });
    window.setTimeout(() => playMaterial(chosen), 450);
  });

  document.getElementById("hero-demo-play").addEventListener("click", () => {
    const card = document.getElementById("hero-demo-card");
    if (!document.body.classList.contains("motion-off")) {
      window.EduEffects?.play(card, "effect-glint");
      window.EduEffects?.confetti(card.parentElement, 16);
    }
  });

  function setMotionOff(isOff) {
    document.body.classList.toggle("motion-off", isOff);
    motionToggle.setAttribute("aria-pressed", String(isOff));
    motionToggle.textContent = isOff ? "動き OFF" : "動き ON";
    try { localStorage.setItem("edu-effects-motion", isOff ? "off" : "on"); } catch (error) { /* no-op */ }
  }

  motionToggle.addEventListener("click", () => setMotionOff(!document.body.classList.contains("motion-off")));
  let savedMotion = null;
  try { savedMotion = localStorage.getItem("edu-effects-motion"); } catch (error) { /* no-op */ }
  setMotionOff(savedMotion ? savedMotion === "off" : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  renderCards();
})();
