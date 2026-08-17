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
