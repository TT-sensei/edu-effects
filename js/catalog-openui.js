// OpenUI-inspired education patterns for the edu-effects catalog.
// TT-sensei original patterns: dependency-free, tablet-first, education focused.
window.EduEffectsLegacyMaterials = (window.EduEffectsLegacyMaterials || []).concat([
  {
    title: "ノート・振り返り", className: ".edu-notebook", category: "feedback", file: "edu-openui.css",
    tags: "ノート 振り返り 記録 学びメモ reflection notebook",
    preview: '<section class="edu-notebook"><h3 class="edu-notebook-title">今日の学び</h3><div class="edu-notebook-line">分かったこと：月の形が変わって見える理由</div><div class="edu-notebook-line">もっと知りたいこと：月の位置</div></section>',
    copy: '<section class="edu-notebook"><h3 class="edu-notebook-title">今日の学び</h3><div class="edu-notebook-line">分かったこと</div><div class="edu-notebook-line">もっと知りたいこと</div></section>'
  },
  {
    title: "学習進捗バー", className: ".edu-openui-progress", category: "reward", file: "edu-openui.css",
    tags: "進捗 プログレス 学習状況 progress status",
    preview: '<div class="edu-openui-progress"><div class="edu-openui-progress-head"><span>今日のミッション</span><strong>6 / 8</strong></div><div class="edu-openui-progress-track"><div class="edu-openui-progress-value" style="width:75%"></div></div></div>',
    copy: '<div class="edu-openui-progress"><div class="edu-openui-progress-head"><span>学習の進み</span><strong>6 / 8</strong></div><div class="edu-openui-progress-track"><div class="edu-openui-progress-value" style="width:75%"></div></div></div>'
  },
  {
    title: "コンパクトタイマー", className: ".edu-openui-timer", category: "question", file: "edu-openui.css",
    tags: "タイマー 時間 カウントダウン 60秒 timer",
    preview: '<div class="edu-openui-timer"><span class="edu-openui-timer-value">00:41</span><span class="edu-openui-timer-label">のこり</span></div>',
    copy: '<div class="edu-openui-timer"><span class="edu-openui-timer-value">00:60</span><span class="edu-openui-timer-label">のこり</span></div>'
  },
  {
    title: "重ねカード", className: ".edu-stack-cards", category: "reward", file: "edu-openui.css",
    tags: "カード 重ねる 図鑑 コレクション stack",
    preview: '<div class="edu-stack-cards"><article class="edu-stack-card"><strong>月のひみつ</strong><p>発見カード 08</p></article><article class="edu-stack-card" aria-hidden="true"></article><article class="edu-stack-card" aria-hidden="true"></article></div>',
    copy: '<div class="edu-stack-cards"><article class="edu-stack-card"><strong>発見カード</strong><p>08 / 24</p></article><article class="edu-stack-card" aria-hidden="true"></article><article class="edu-stack-card" aria-hidden="true"></article></div>'
  },
  {
    title: "学習パネル", className: ".edu-openui-panel", category: "feedback", file: "edu-openui.css",
    tags: "パネル ヒント 資料 AI 学習 panel",
    preview: '<section class="edu-openui-panel"><div class="edu-openui-panel-head"><h3 class="edu-openui-panel-title">考えるヒント</h3><span class="edu-openui-panel-meta">HINT</span></div><div class="edu-openui-panel-body">二つの資料の「同じところ」と「違うところ」を比べよう。</div><div class="edu-openui-panel-actions"><button class="edu-btn edu-btn-secondary" type="button">資料を見る</button></div></section>',
    copy: '<section class="edu-openui-panel"><div class="edu-openui-panel-head"><h3 class="edu-openui-panel-title">考えるヒント</h3><span class="edu-openui-panel-meta">HINT</span></div><div class="edu-openui-panel-body">ここにヒントを入れます。</div><div class="edu-openui-panel-actions"><button class="edu-btn edu-btn-secondary" type="button">くわしく見る</button></div></section>'
  },
  {
    title: "学習ステップ", className: ".edu-filmstrip", category: "motion", file: "edu-openui.css",
    tags: "ステップ 手順 探究 実験 予想 観察 考察 filmstrip",
    preview: '<div class="edu-filmstrip"><article class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 1</span><strong>予想する</strong><p>結果を考える</p></article><article class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 2</span><strong>実験する</strong><p>条件を変える</p></article><article class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 3</span><strong>考察する</strong><p>結果を比べる</p></article></div>',
    copy: '<div class="edu-filmstrip"><article class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 1</span><strong>予想する</strong><p>考えてみよう</p></article><article class="edu-filmstrip-item"><span class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 2</span><strong>試す</strong><p>確かめよう</p></article><article class="edu-filmstrip-item"><span class="edu-filmstrip-step">STEP 3</span><strong>まとめる</strong><p>分かったこと</p></article></div>'
  },
  {
    title: "タブレット画面フレーム", className: ".edu-device", category: "decoration", file: "edu-openui.css",
    tags: "タブレット ICT 画面 フレーム device tablet",
    stage: "is-dark",
    preview: '<div class="edu-device"><div class="edu-device-screen"><div style="padding:24px"><span class="edu-badge edu-badge-primary">TABLET</span><h3 style="margin:.6em 0">学習アプリの画面</h3><p style="margin:0">タブレットで見たときのイメージを紹介できます。</p></div></div><div class="edu-device-caption">TABLET PREVIEW</div></div>',
    copy: '<div class="edu-device"><div class="edu-device-screen"><div style="padding:24px"><h3>教材画面</h3><p>ここに教材を入れます。</p></div></div><div class="edu-device-caption">TABLET PREVIEW</div></div>'
  },
  {
    title: "ナビゲーション・ステップ", className: ".edu-openui-steps", category: "motion", file: "edu-openui.css",
    tags: "ナビ ステップ 進行 手順 navigation steps 学習",
    preview: '<nav class="edu-openui-steps" aria-label="学習の進行"><span class="is-done"><b>1</b>問題</span><span class="is-active"><b>2</b>考える</span><span><b>3</b>まとめる</span></nav>',
    copy: '<nav class="edu-openui-steps" aria-label="学習の進行"><span class="is-done"><b>1</b>問題</span><span class="is-active"><b>2</b>考える</span><span><b>3</b>まとめる</span></nav>'
  },
  {
    title: "ステータスチップ", className: ".edu-openui-status", category: "feedback", file: "edu-openui.css",
    tags: "状態 ステータス チップ 完了 正解 待機 status chip",
    preview: '<div class="edu-openui-status-row"><span class="edu-openui-status is-success">✓ できた</span><span class="edu-openui-status is-warning">● もう一度</span><span class="edu-openui-status">○ 未挑戦</span></div>',
    copy: '<span class="edu-openui-status is-success">✓ できた</span>'
  },
  {
    title: "数値カウンター", className: ".edu-openui-counter", category: "reward", file: "edu-openui.css",
    tags: "数 カウント スコア 回数 バッジ counter score",
    preview: '<div class="edu-openui-counter"><strong>12</strong><span>連続正解</span></div>',
    copy: '<div class="edu-openui-counter"><strong>12</strong><span>連続正解</span></div>'
  },
  {
    title: "ヒント開閉", className: ".edu-openui-disclosure", category: "feedback", file: "edu-openui.css",
    tags: "ヒント 開く 閉じる disclosure details hint",
    preview: '<details class="edu-openui-disclosure" open><summary>ヒントを見る</summary><p>まず、問題文の大切な言葉に線を引いてみよう。</p></details>',
    copy: '<details class="edu-openui-disclosure"><summary>ヒントを見る</summary><p>ここにヒントを書きます。</p></details>'
  },
  {
    title: "ミニプロフィール", className: ".edu-openui-profile", category: "reward", file: "edu-openui.css",
    tags: "プロフィール キャラクター ナビ キャラ avatar navi",
    preview: '<div class="edu-openui-profile"><span class="edu-openui-profile-avatar">な</span><div><strong>なみ</strong><small>探究レベル 6</small></div></div>',
    copy: '<div class="edu-openui-profile"><span class="edu-openui-profile-avatar">A</span><div><strong>なまえ</strong><small>レベル 1</small></div></div>'
  },
  {
    title: "教材ツールバー", className: ".edu-openui-toolbar", category: "question", file: "edu-openui.css",
    tags: "ツールバー 戻る ヒント リセット toolbar controls",
    preview: '<div class="edu-openui-toolbar"><button class="edu-btn edu-btn-secondary" type="button">← 戻る</button><span>問題 3 / 10</span><button class="edu-btn edu-btn-secondary" type="button">ヒント</button></div>',
    copy: '<div class="edu-openui-toolbar"><button class="edu-btn edu-btn-secondary">← 戻る</button><span>問題 3 / 10</span><button class="edu-btn edu-btn-secondary">ヒント</button></div>'
  }
]);
