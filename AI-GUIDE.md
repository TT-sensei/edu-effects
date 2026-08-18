# AI-GUIDE

教材サイトを作るAIが、edu-effectsを既存の共通部品として参照するための短い設計ガイドです。

4資産を組み合わせる全体方針、`edu-components`のイベントとの接続、教材タイプ別レシピは、[edu-componentsのAI-GUIDE](https://github.com/TT-sensei/edu-components/blob/main/AI-GUIDE.md)を中心に参照してください。このガイドは`edu-effects`内のCSS選択に使います。

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
| 基本カード、ボタン、選択肢、フォーム | edu-effects.css |
| 正解・不正解のマークと状態 | edu-feedback.css |
| 色や部品の見た目違い | edu-variants.css |
| 問題、結果、タイマー、テンキー | edu-learning.css |
| 入場、正解、不正解など控えめな動き | edu-motion.css |
| 紙面、ノート、黒板の雰囲気 | edu-editorial.css |
| 暗記シート、並べ替え、ヒント、花マル | edu-interactive.css |
| 学習中の状態演出 | edu-effects-extra.css |
| 強いインパクト、波紋、衝撃波、解除演出 | edu-effects-advanced.css |
| 拡張ボタン、問題UI、結果、ゲームUI | edu-ui-variants.css |
| 正解、達成、バッジ、コンボ、カード演出 | edu-effects-library.css |
| 問題・答え・結果の登場、開示、順番表示 | edu-effects-learning-motion.css |
| 押す・数値変化・ヒント開閉などの操作感 | edu-effects-kinetic.css |
| 見出し、カード、オーロラ、重なりの表現 | edu-effects-creative.css |
| 資料、ヒント、気づき、採点・分析パネル | edu-effects-learning-panels.css |
| 思考中、処理中、画面遷移、先生メモ | edu-effects-interaction-kit.css |
| 問い・ヒント・振り返り・達成を組み合わせる画面 | edu-effects-21st-composer.css |
| 教材ヘッダー、単元カード、活動、結果の骨格 | edu-effects-learning-shell.css |
| 背景、枠、線、基本装飾 | edu-decorations.css |
| 理科、宇宙、ノート、黒板などのテーマ装飾 | edu-decorations-advanced.css |
| 紙吹雪などの任意ヘルパー | js/edu-effects.js |

### 同じ役割の演出を選ぶとき

- `edu-feedback.css` の `.edu-correct-mark` や `.edu-wrong-mark` は、判定を静かに伝える状態部品です。
- `edu-effects-library.css` の `effect-correct-*` / `effect-wrong-*` は、正解・不正解を動きで見せる演出です。
- 迷ったら、毎問の判定には `edu-feedback.css`、特別な演出には `edu-effects-library.css` を使います。同じ役割の新しいCSSは作りません。

### 命名と互換性

装飾の `deco-*` と演出の `effect-*` は既存教材との互換性のため現状維持しています。新しく共通クラスを追加するときは、他教材との衝突を避けるため `edu-` 接頭辞を優先してください。既存の `deco-*` / `effect-*` を一括リネームしないでください。

### 旧カタログ用ファイル

`archive/legacy-catalog/catalog.css`、`archive/legacy-catalog/catalog-showroom.css`、`archive/legacy-catalog/catalog-showcase.js` は旧カタログのレイアウト・検索・演出用です。教材アプリからは読み込みません。現在の公開カタログは `css/catalog-gallery.css`、`js/catalog-gallery.js`、`js/catalog-legacy.js` を使っています。旧カタログにあった実素材は、重複整理のうえ現在の一覧へ復元済みです。

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


## 学習画面向けモーション素材

`edu-effects-learning-motion.css` を追加すると、問題や説明を「見せる順番」まで含めて演出できます。

- `edu-reveal` / `edu-reveal-up`：答え・ヒント・説明の開示
- `edu-focus-ring`：現在の問題や選択箇所を一度だけ強調
- `edu-focus-line`：見出しや重要語句への視線誘導
- `edu-count-in`：ゲーム開始前のカウント
- `edu-stagger`：選択肢やカードを順番に表示
- `edu-hover-lift` / `edu-press`：タップ可能な部品の反応
- `edu-sweep-marker`：重要語句のマーカー表示

毎問の正誤演出とは役割が違うため、問題開始、ヒント開示、画面切替などの節目に使います。読み込み例：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-learning-motion.css">
~~~



## キネティック素材の選び方

`edu-effects-kinetic.css` は、Kineticsのような「触ったときの重さ・反発」を教材向けに整理した素材です。見た目の派手さではなく、操作や状態の変化を伝えるために使います。

- `edu-kinetic-pop`：結果カード、バッジ、画面切替
- `edu-kinetic-number`：得点、XP、コンボ、記録更新
- `edu-kinetic-expand`：ヒントや説明の開閉。JSで is-open を切り替える
- `edu-kinetic-button`：押せるボタンの浮き上がりと押下反応
- `edu-kinetic-xp`：進捗バーの更新時の光
- `edu-kinetic-dot`：保存中、処理中、待機中
- `edu-kinetic-toast`：保存完了などの短い通知

毎問すべてに強い反発を付けず、結果更新、開始、ヒント開示、保存完了など意味のある場面に限定します。
読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-kinetic.css">
~~~



## クリエイティブ素材の選び方

`edu-effects-creative.css` は、React Bitsのような「テキスト・UI・背景を部品として個別に試す」考え方を、教材向けのCSS素材にしたものです。

- 見出しや報酬：`edu-creative-shimmer`、`edu-creative-blur-in`
- 大切な語句：`edu-creative-highlight`
- コレクションや選択カード：`edu-creative-tilt`、`edu-creative-glow-border`、`edu-creative-stack`
- 理科・宇宙・探究背景：`edu-creative-aurora`、`edu-creative-orbit`

背景素材は文字の読みやすさを優先し、重ねすぎないようにします。選択状態には is-active、開閉状態には既存の状態クラスを使います。
読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-creative.css">
~~~



## 学習アプリの共通シェルを使うとき

TT-senseiの複数教材で繰り返し使っている画面構造を、`edu-effects-learning-shell.css` にまとめています。

- 単元選択：`edu-shell-unit-grid` と `edu-shell-unit-card`
- 学習開始：`edu-shell-hero` と `edu-shell-flow`
- 問題・実験：`edu-shell-workspace`、`edu-shell-activity-nav`、`edu-shell-activity-card`
- 理科の予想・根拠：`edu-shell-prediction`、`edu-shell-evidence`
- 結果・正誤：`edu-shell-feedback`、`edu-shell-result-ring`
- 発見図鑑：`edu-shell-discovery-grid`、`edu-shell-discovery-card`

読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-learning-shell.css">
~~~

既存教材の保存処理、問題ロジック、バッジ処理は変更せず、HTML構造にクラスを足して使います。画面幅820px以下では活動ナビが横スクロール型に変わります。


## 学習パネルの選び方

- `edu-panel-context`：問題の資料やヒント
- `edu-panel-insight`：理科の考察や国語の気づき
- `edu-panel-recommendation`：次の練習や復習の提案
- `edu-panel-approval`：答え合わせ、提出前の確認
- `edu-panel-processing`：採点・保存・処理中の状態
- `edu-panel-stream`：結果や分析を段階的に表示



## 学習画面を組み立てるとき

`edu-effects-21st-composer.css` は、部品を一つずつ選び、学習の流れを見える化したいときに使います。

- 問い：学習者が考える対象を置く
- ヒント：必要な人だけ手がかりを受け取れるようにする
- 振り返り：理由・根拠・気づきを残す
- 達成：できたことや次の目標を記録する

既存の問題ロジックや保存処理を変更せず、教材側のHTMLにクラスを足して使います。4種類をすべて置く必要はなく、学習の目的に合う部品だけ選びます。部品を増やす操作をJavaScriptで実装する場合も、外部ライブラリは追加しません。


## 状態・注釈・遷移を使うとき

状態表示は、画面が止まっているのか、採点中なのか、完了したのかを伝えるために使います。色や動きだけに頼らず、`考え中`、`完了`などの文字も添えます。

- `edu-state-orb`：採点中、読み込み中、確認済み
- `edu-transition-page`：問題から結果、単元から活動への切り替え
- `edu-annotation-note`：先生の補足、根拠、見直しポイント
- `edu-pattern-card`：問い・ヒント・結果などの役割整理
- `edu-sheet`：ヒントや確認をタブレットで押しやすく表示

注釈は画面を埋め尽くさず、学習者が次に見る場所や考える根拠を一つだけ示します。強い動きは節目に限定し、reduced-motionでは文字と配置だけで意味が伝わるようにします。
