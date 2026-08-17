# AI-GUIDE

教材サイトを作るAIが、edu-effectsを既存の共通部品として参照するための短い設計ガイドです。

## まず守ること

1. 既存のクラスを優先して使う。
2. 同じ役割のCSSを新しく作らない。
3. 必要なCSSファイルだけ読み込む。
4. 学習内容と操作性を優先し、演出は短く控えめにする。
5. タブレットで押せる大きさを保つ。目安は48px以上。
6. prefers-reduced-motionを無視しない。
7. 外部フォント、外部ライブラリ、画像API、サーバーを追加しない。
8. 迷ったら公開カタログで見本を確認する。

## 指示の書き方

- edu-effectsのAI-GUIDE.mdを参照して作る。
- 基本UIはedu-effects.cssの既存クラスを使う。
- 問題画面はedu-learning.cssを使う。
- 正解時はeffect-correct-ring、不正解時はeffect-wrong-shakeを使う。
- バッジ獲得はeffect-badge-unlock、紙吹雪はEduEffects.confetti()を使う。
- 理科らしい背景はdeco-science-grid、ノート風はdeco-note-paperを使う。
- 新しいクラスを作る前に、似た既存クラスがないか確認する。

## 目的別のファイル選択

| 目的 | 読み込むファイル |
| --- | --- |
| カード、ボタン、選択肢、フォーム | edu-effects.css |
| 色や部品の見た目違い | edu-variants.css |
| 問題、結果、タイマー、テンキー | edu-learning.css |
| 入場、正解、不正解など控えめな動き | edu-motion.css |
| 紙面、ノート、黒板の雰囲気 | edu-editorial.css |
| 暗記シート、並べ替え、ヒント、花マル | edu-interactive.css |
| 学習中の状態演出 | edu-effects-extra.css |
| 強いインパクト、波紋、衝撃波、解除演出 | edu-effects-advanced.css |
| 拡張ボタン、問題UI、結果、ゲームUI | edu-ui-variants.css |
| 正解、達成、バッジ、コンボ、カード演出 | edu-effects-library.css |
| 背景、枠、線、装飾 | edu-decorations.css |
| 紙吹雪などの任意ヘルパー | js/edu-effects.js |

## 読み込み例

通常の教材：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
~~~

問題と正誤演出がある教材：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-library.css">
~~~

落ち着いた紙面風の教材：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-editorial.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-decorations.css">
~~~

EffectsのJSヘルパーを使う場合：

~~~html
<script src="https://tt-sensei.github.io/edu-effects/js/edu-effects.js"></script>
~~~

## Effectsの選び方

### 正解

- effect-correct-pop：小さくポンと出す。毎問使いやすい。
- effect-correct-ring：○が広がる。選択肢や答えの周囲に向く。
- effect-correct-sparkle：キラキラを足す。結果カードや小さな報酬に向く。

### 不正解

- effect-wrong-shake：問題や入力欄を左右に揺らす。
- effect-wrong-cross：×を重ねる。答えの判定を明確にする。
- effect-wrong-wobble：強すぎない再確認の合図にする。

### 達成・報酬

- effect-achievement-glow：合格、単元完了、目標達成。
- effect-achievement-burst：達成時の光の広がり。
- effect-confetti：特別な達成だけ。毎問使わない。
- effect-badge-unlock：バッジ獲得の出現、回転、光。
- effect-level-up：レベルが上がったときの見出し演出。
- effect-combo-number + effect-combo-fire：連続正解の数値と炎。

### 画面・カード

- effect-flash：画面の一瞬の反応。
- effect-zoom-in：結果や重要カードの登場。
- effect-dim：画面の状態変化。
- effect-card-lift：カードが下から跳ねて登場。
- effect-card-flip：表裏を切り替えるカード。

## Effectsの使い方

CSSアニメーションは、対象にクラスを付けて使います。同じ演出をもう一度再生する場合は、クラスを一度外してから付け直します。

~~~js
EduEffects.play(answer, "effect-correct-ring");
~~~

紙吹雪は、紙吹雪を表示したい親要素に呼び出します。

~~~js
EduEffects.confetti(resultCard, 18);
~~~

紙吹雪や強い演出は、単元完了や特別なバッジ獲得など、意味のある場面に限定します。

## Decorationの選び方

Decorationは完成した画面ではなく、背景や線を組み合わせる材料です。

### テイスト

- deco-pop：明るく勢いのある教材、低学年向けの軽いアクセント。
- deco-science：理科、観察、実験、自然。
- deco-digital：情報、データ、プログラミング。
- deco-note：ノート、記録、振り返り。
- deco-retro：昔の道具、歴史、ゲーム風。
- deco-fantasy：報酬、冒険、コレクション。
- deco-minimal：説明、管理、落ち着いた画面。

### 名前付きの組み合わせ

- deco-science-grid：理科らしい方眼背景。
- deco-science-circuit：理科・デジタル寄りの回路背景。
- deco-digital-dots：データ画面のドット背景。
- deco-digital-halftone：印刷・ゲーム風のハーフトーン。
- deco-pop-rays：達成やスタート画面の集中線。
- deco-note-paper：紙面・ノート風の背景。
- deco-fantasy-shapes：報酬やコレクションの形装飾。
- deco-minimal-divider：説明を区切る控えめな線。

~~~html
<section class="deco-surface deco-science-grid">
  <h2>実験の記録</h2>
</section>
~~~

基本素材とトーンを分けて組み合わせることもできます。

~~~html
<section class="deco-surface deco-grid deco-science deco-tape">
  ...
</section>
~~~

## 学習画面の基本方針

- 1画面で問題、選択肢、次の操作が見えるようにする。
- 重要なボタンは画面下部または親指で届く位置に置く。
- スクロールが必要な場合は、問題選択後に問題位置へ移動する。
- 正解・不正解の色だけに頼らず、文字や記号も添える。
- 動きが止まっても内容が理解できるようにする。
- reduced-motionではアニメーションなしでも状態が伝わるようにする。
- localStorageなど既存の保存方式を優先し、外部DBを追加しない。

## 新しいCSSを追加する前の確認

1. edu-effects.cssに近い部品がないか。
2. edu-learning.css、edu-interactive.cssに目的の部品がないか。
3. edu-effects-library.cssやedu-decorations.cssに近い演出がないか。
4. 既存クラスの組み合わせで表現できないか。
5. それでも不足する場合だけ、新しいファイルとクラスを提案する。

新しいクラスを作る場合は、用途が分かる名前、reduced-motion対応、タブレットでの確認、公開カタログへの見本追加をセットにします。


## 拡張素材を選ぶとき

基本セットで足りない場合は、edu-ui-variants.cssを追加します。

- ボタンの雰囲気を変える：edu-btn-3d、edu-btn-game、edu-btn-round
- ○×や入力問題：edu-answer-binary、edu-input-answer
- 並べ替え：edu-sort-board、edu-sort-chip
- 結果画面：edu-rank-card、edu-stars、edu-xp、edu-complete
- ゲーム画面：edu-hp、edu-boss、edu-stage、edu-lives、edu-mission
- 教材の種類を出す：edu-card-textbook、edu-card-research、edu-card-collection

演出の選択例：

- 低学年の正解：既存のedu-mark-checkまたはedu-mark-circle
- 算数ゲームの正解：effect-impact、effect-number-fly、effect-combo-fire
- 理科の発見：effect-ripple、effect-shockwave、deco-theme-science
- 落ち着いた教材：effect-check-draw、edu-mark-pencil、deco-theme-note
- バッジ獲得：effect-unlock、effect-badge-unlock、deco-theme-fantasy

Decorationのテーマを使う場合は、edu-decorations-advanced.cssを追加します。テーマは1つを土台にし、必要な場合だけdeco-tape、deco-border-corner、deco-sparklesなどを重ねます。背景を重ねすぎて文字が読みにくくならないようにします。
