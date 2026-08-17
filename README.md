# edu-effects

TT-senseiの教材サイトで共通利用する、落ち着いたUI用CSS素材集です。

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

