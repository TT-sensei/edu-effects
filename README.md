# edu-effects

教材サイト制作でAIと人間が再利用するための、共通CSS / Effectsライブラリです。

基本UI、学習UI、タイマー、インタラクティブ部品、学習用Effects、Decoration素材を、必要なファイルだけ読み込んで使えます。

まずは [AI-GUIDE.md](AI-GUIDE.md) と [公開カタログ](https://tt-sensei.github.io/edu-effects/) を確認してください。見本サイトでは各素材を再生し、クラス名とHTMLをコピーできます。

## 使い方

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
~~~

正解演出や結果画面の動きが必要なときだけ、追加で読み込みます。

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-feedback.css">
~~~

## 主な素材

- レイアウト：\`.edu-container\` \`.edu-grid\` \`.edu-row-between\`
- 画面：\`.edu-header\` \`.edu-main\` \`.edu-card\`
- 操作：\`.edu-btn-primary\` \`.edu-btn-secondary\` \`.edu-choice\` \`.edu-tabs\`
- 状態：\`.edu-badge-*\` \`.edu-status-*\` \`.edu-lock\`
- 学習UI：\`.edu-progress\` \`.edu-reward\` \`.edu-correct-mark\`
- 補助：\`.edu-modal\` \`.edu-toast\` \`.edu-empty\`
- アニメーション：\`.edu-answer-pop\` \`.edu-shake\` \`.edu-pulse\` \`.edu-pop\`

## 方針

- 外部フォント・画像・JavaScriptなし
- 既存教材へ少しずつ追加できるクラス設計
- タブレットで押しやすい最小48pxを意識
- \`prefers-reduced-motion\` に対応
- 色、余白、角丸、影はCSS変数で変更可能
- 子ども向けでも幼くなりすぎない、教材アプリ向けの見た目

## ライセンス

TT-senseiの教材サイトで自由に利用するための共通素材です。


## 追加CSS

基本CSSに加えて、必要な用途だけ読み込めます。

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-variants.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-motion.css">
~~~

### edu-variants.css

テーマを親要素に付けるだけで色の雰囲気を変更できます。

- \`.edu-theme-soft\`：やわらかい青紫
- \`.edu-theme-warm\`：落ち着いた暖色
- \`.edu-theme-nature\`：自然・理科向け
- \`.edu-theme-night\`：夜間・集中モード

部品のバリエーションもあります。

- ボタン：\`.edu-btn-outline\` \`.edu-btn-ghost\` \`.edu-btn-gradient\` \`.edu-btn-lg\` \`.edu-btn-sm\`
- カード：\`.edu-card-flat\` \`.edu-card-highlight\` \`.edu-card-dark\` \`.edu-card-accent\`
- 選択肢：\`.edu-choice-compact\` \`.edu-choice-large\` \`.edu-choice-numbered\`
- 進捗：\`.edu-progress-thin\` \`.edu-progress-tall\` \`.edu-progress-segmented\` \`.edu-progress-ring\`

### edu-learning.css

- 問題画面：\`.edu-question\` \`.edu-answer-grid\`
- 結果画面：\`.edu-stat\` \`.edu-score\`
- 手順表示：\`.edu-stepper\`
- テンキー：\`.edu-keypad\` \`.edu-key\`
- 考察・比較：\`.edu-note\` \`.edu-comparison\`
- 履歴・予定：\`.edu-timeline\`
- 読み込み中：\`.edu-skeleton\`

### edu-motion.css

\`.edu-enter\`、\`.edu-count-up\`、\`.edu-soft-glow\`、\`.edu-float\`、\`.edu-success-burst\`、\`.edu-wrong-shake\` など、控えめな演出を追加できます。



## AIっぽさを抑えたデザイン

丸いカード、強いグラデーション、青紫中心の配色を避けたい場合は、edu-editorial.cssを追加します。

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-editorial.css">
~~~

アプリ全体を紙面・教材プリントに近い雰囲気にする例です。

~~~html
<div class="edu-app edu-style-editorial edu-theme-paper">
  ...
</div>
~~~

利用できる追加パーツ：

- edu-paper-note：ノート風の注意・ヒント
- edu-paper-label：手書きラベル風の小見出し
- edu-ruled-answer：記述欄・考察欄
- edu-section-rule：区切り線つき見出し
- edu-theme-chalk：黒板のような落ち着いた配色



### タイマー

edu-learning.cssには3種類のタイマーがあります。

- edu-timer：残り時間を文字で表示するバッジ型
- edu-timer-ring：--valueとdata-labelを使うリング型
- edu-timer-bar：残り時間を横棒で表示するバー型

残り時間に応じて、edu-timer-warningやedu-timer-dangerを付け替えて使います。


タイマーの見た目違い：

- edu-timer-minimal：数字だけを見せる
- edu-timer-outline：背景なしの線だけ
- edu-timer-gradient：目立たせる強調型
- edu-timer-dots：残り時間や残り問題数を粒で表示

edu-timer-dotsは、子要素のedu-timer-dotにis-litを付け外しして表示を更新します。


## インタラクティブ学習パーツ

edu-interactive.cssを追加すると、次の部品を使えます。

- edu-mask / edu-blank：暗記シート・穴埋め
- edu-dropzone / edu-sort-item：並べ替え・ドラッグ枠
- edu-streak：連続正解・継続記録
- edu-stamp-card / edu-stamp：スタンプカード
- edu-hint / edu-accordion：折りたたみヒント
- edu-marker：重要語句のマーカー
- edu-ruby：ルビの行間調整
- edu-mark-flower：花マル採点
- edu-speech-bubble：先生のアドバイス

読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-interactive.css">
~~~

edu-maskのクリック動作やedu-dropzoneの並べ替え処理は、教材側のJavaScriptで追加できます。


## 学習用エフェクト

edu-effects-extra.cssを追加すると、学習中の状態変化を短いアニメーションで表現できます。

- edu-effect-correct：正解
- edu-effect-wrong：不正解・再挑戦
- edu-effect-combo：連続正解
- edu-effect-stamp：合格印
- edu-effect-unlock：単元解放
- edu-effect-slide-up：結果やカードの登場
- edu-effect-focus：現在の問題の強調
- edu-effect-highlight：重要語句の強調
- edu-effect-complete：単元完了
- edu-effect-paper-in：紙面風の登場

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-extra.css">
~~~

状態が変わるタイミングでクラスを追加し、終了後に外すか、同じ要素を作り直して再生します。reduced-motionにも対応しています。


## Effects素材集

edu-effects-library.cssは、学習状態やゲーム演出をまとめた素材集です。

- 正解：effect-correct-pop / effect-correct-ring / effect-correct-sparkle
- 不正解：effect-wrong-shake / effect-wrong-cross / effect-wrong-wobble
- 達成：effect-achievement-glow / effect-achievement-burst / effect-confetti
- バッジ獲得：effect-badge-unlock
- レベルアップ：effect-level-up
- コンボ：effect-combo-number / effect-combo-fire
- 画面演出：effect-flash / effect-zoom-in / effect-dim
- カード：effect-card-lift / effect-card-flip

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-library.css">
<script src="https://tt-sensei.github.io/edu-effects/js/edu-effects.js"></script>
~~~

紙吹雪やエフェクトの再生には、必要なときだけ EduEffects.play() や EduEffects.confetti() を使います。

## Decoration素材集

edu-decorations.cssは、完成UIではなくサイトごとの雰囲気を作るための素材です。

- 背景：deco-grid / deco-dots / deco-wave / deco-circuit / deco-halftone
- 演出背景：deco-rays / deco-sparkles
- 手作り風：deco-sketch / deco-tape / deco-note
- 囲み・区切り：deco-frame / deco-divider / deco-bubble
- 形：deco-shape-circle / deco-shape-square / deco-shape-blob

テイストは deco-pop、deco-science、deco-digital、deco-note、deco-retro、deco-fantasy、deco-minimal を組み合わせます。

よく使う組み合わせには名前付きクラスもあります：deco-science-grid、deco-science-circuit、deco-digital-dots、deco-digital-halftone、deco-pop-rays、deco-note-paper、deco-fantasy-shapes、deco-minimal-divider。

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-decorations.css">
~~~


## 拡張UI素材集

edu-ui-variants.cssには、基本UIから選べる見た目違いと用途別パーツを収録しています。

- ボタン：edu-btn-3d / edu-btn-game / edu-btn-round / edu-btn-icon / edu-btn-xl
- 問題：edu-answer-binary / edu-answer-card / edu-input-answer / edu-fill-blank / edu-sort-board
- 結果：edu-rank-card / edu-stars / edu-xp / edu-record / edu-complete
- ゲームUI：edu-game-hud / edu-hp / edu-boss / edu-stage / edu-lives / edu-mission / edu-combo-meter
- カード：edu-card-textbook / edu-card-sticky / edu-card-chalk / edu-card-game / edu-card-research / edu-card-collection

## Effects拡張

edu-effects-advanced.cssには、基本Effectsと使い分ける追加演出があります。

- effect-glint：光が走る
- effect-impact：ドンと出る
- effect-ripple：波紋
- effect-screen-shake：画面振動
- effect-stamp：スタンプ
- effect-number-fly：数字・XPが飛ぶ
- effect-unlock：アンロック表示
- effect-check-draw：控えめなチェック

## Decoration拡張

edu-decorations-advanced.cssには、教材のテーマをはっきり分ける背景を収録しています。

- deco-theme-science：理科・方眼
- deco-theme-space：宇宙
- deco-theme-digital：デジタル
- deco-theme-japanese：和風
- deco-theme-note：ノート
- deco-theme-chalk：黒板
- deco-theme-arcade：レトロゲーム
- deco-theme-pop：ポップ
- deco-theme-fantasy：ファンタジー

必要なCSSだけ読み込みます。

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-ui-variants.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-advanced.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-decorations-advanced.css">
~~~

### 採点マークの選び方

従来のedu-mark-flowerは互換性のため残しています。普段の教材では、次の控えめなマークを推奨します。

- edu-mark-check：チェック＋丸
- edu-mark-circle：丸囲み
- edu-mark-stamp：採点スタンプ
- edu-mark-pencil：先生の手書きチェック風


## 学習画面向けモーション素材

`edu-effects-learning-motion.css` は、CSSアニメーションの小さな実験を教材向けに整理した追加素材です。問題の登場、答えの開示、注目箇所の強調、開始カウント、段階的な表示に使えます。

読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-learning-motion.css">
~~~

主なクラス：

- `edu-reveal` / `edu-reveal-up`：答えや説明を覆いから開く
- `edu-focus-ring` / `edu-focus-line`：今見る場所を短く強調
- `edu-count-in`：開始前のカウント表示
- `edu-stagger`：選択肢や手順を順番に表示
- `edu-hover-lift` / `edu-press`：押せる部品の軽い反応
- `edu-sweep-marker`：重要語句にマーカーを引く

`prefers-reduced-motion` に対応し、動きを止めても内容が読めるようにしています。
