# edu-effects

小学校向けWeb教材の **UI・CSS・アニメーション・視覚演出を共通化するライブラリ**です。

「教材ごとに毎回CSSを作る」のではなく、学習画面・問題・正誤・進捗・報酬・背景・インタラクションなどを共通部品として利用し、教材全体の使いやすさと世界観をそろえることを目的にしています。

🌐 **公開カタログ**  
https://tt-sensei.github.io/edu-effects/

## できること

edu-effectsには、教材でよく使う次のようなUIと演出があります。

- 基本カード、ボタン、選択肢、フォーム
- 問題・答え・タイマー・結果画面
- 正解・不正解の状態表示
- 正解、不正解、コンボ、達成、レベルアップなどの演出
- 進捗、レベル、アンロック、報酬UI
- 学習用パネル、ヒント、振り返り、分析表示
- ノート、紙面、黒板、理科、デジタル、ファンタジーなどの装飾
- 3Dカード、キューブ、カルーセル、カバーフロー
- 画像の白黒、ぼかし、開示、ロック、ズーム、比較
- 操作時の反応や画面遷移
- `prefers-reduced-motion` に対応した動きの制御

## 基本的な使い方

最初は基本UIと学習UIだけを読み込みます。

```html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
```

必要な機能だけ追加します。

```html
<!-- 正解・不正解 -->
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-feedback.css">

<!-- 正解・バッジ・コンボなどの演出 -->
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects-library.css">

<!-- 背景・装飾 -->
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-decorations.css">
```

JavaScriptヘルパーが必要な場合だけ読み込みます。

```html
<script src="https://tt-sensei.github.io/edu-effects/js/edu-effects.js"></script>
```

## ファイルの選び方

| 目的 | ファイル |
| --- | --- |
| 基本UI | `edu-effects.css` |
| 問題・タイマー・結果・テンキー | `edu-learning.css` |
| 正解・不正解の状態 | `edu-feedback.css` |
| UIのバリエーション | `edu-variants.css` / `edu-ui-variants.css` |
| 控えめなアニメーション | `edu-motion.css` |
| 正解・達成・バッジ・コンボ | `edu-effects-library.css` |
| 学習画面向けモーション | `edu-effects-learning-motion.css` |
| 操作時の反応 | `edu-effects-kinetic.css` / `edu-effects-interaction-kit.css` |
| 学習用パネル | `edu-effects-learning-panels.css` |
| 学習画面の骨格 | `edu-effects-learning-shell.css` |
| 問い・ヒント・振り返りの組み合わせ | `edu-effects-21st-composer.css` |
| 強い達成・解除・衝撃演出 | `edu-effects-advanced.css` |
| 見出し・カード・クリエイティブ表現 | `edu-effects-creative.css` |
| 背景・線・基本装飾 | `edu-decorations.css` |
| 理科・宇宙・ノートなどのテーマ装飾 | `edu-decorations-advanced.css` |
| 紙面・ノート風 | `edu-editorial.css` |
| 暗記・並べ替え・ヒントなど | `edu-interactive.css` |
| 3D・カルーセル | `edu-effects-3d.css` |
| 画像の開示・ぼかし・ズーム・比較 | `edu-effects-filters.css` |
| JavaScriptヘルパー | `js/edu-effects.js` |

実際に利用できるクラスやサンプルは、必ず **AI-GUIDE.md** または公開カタログで確認してください。存在しないクラスを推測して作らないことを基本とします。

## 演出は「学習を助けるため」に使う

edu-effectsは、派手なゲーム演出を増やすためだけのライブラリではありません。

正解したことが分かる、次に何をすればよいか分かる、進歩を感じられる、重要な情報に気づける、といった **学習上の意味を持つ演出**を優先します。

たとえば毎問の正誤判定には控えめな演出を使い、単元クリアやバッジ獲得などの特別な場面だけ強い演出を使います。

```js
EduEffects.play(answer, "effect-correct-ring");
EduEffects.confetti(resultCard, 18);
```

紙吹雪などの強い演出は、毎回ではなく「特別な達成」に限定することを推奨します。

## Decoration

背景や装飾は、教材の内容に合わせて組み合わせます。

代表的なテーマには次があります。

- `deco-pop`：明るく元気な教材
- `deco-science`：理科・観察・実験
- `deco-digital`：情報・データ・プログラミング
- `deco-note`：ノート・記録・振り返り
- `deco-retro`：歴史・昔の道具・レトロ表現
- `deco-fantasy`：冒険・報酬・コレクション
- `deco-minimal`：説明・管理・落ち着いた画面

例：

```html
<section class="deco-surface deco-science-grid">
  <h2>実験の記録</h2>
</section>
```

## 画像の見せ方

`edu-effects-filters.css` を使うと、元画像を変更せずに表示方法だけを変えられます。

- 未クリア → 白黒
- ヒント → ぼかし
- 歴史資料 → セピア
- 未解放 → ロック
- 観察写真 → ズーム
- 変化の比較 → Before / After

内容を隠す場合は、「ヒント」「未解放」などの文字情報も添え、色や動きだけに頼らないようにします。

## タブレット・アクセシビリティ

TT-senseiの教材は学校のタブレットでの利用を前提としています。

- タップしやすい大きさを確保する。目安は48px以上
- 問題、選択肢、主要操作をできるだけ1画面に収める
- 重要な操作を画面下部など押しやすい位置に置く
- 色だけで正解・不正解を判断させない
- `prefers-reduced-motion` を尊重する
- アニメーションがなくても学習内容が理解できるようにする
- 外部フォント、外部ライブラリ、画像API、サーバーに依存しない

## AIで教材を作るとき

AIに教材を作らせる場合は、まず既存のedu-effectsに似た部品がないか確認してください。

1. 公開カタログまたは `AI-GUIDE.md` を確認する
2. 既存クラスを優先して使う
3. 必要なCSSファイルだけ読み込む
4. 同じ役割のCSSを教材側で新しく作らない
5. 演出よりも学習内容と操作性を優先する
6. タブレット操作とアクセシビリティを確認する
7. 新しい共通部品が必要なら、教材内にコピーするのではなくedu-effects側への追加を検討する

特にAI開発では、クラス名やファイル名を推測しないことが重要です。

詳細なAI向けルールは [AI-GUIDE.md](AI-GUIDE.md) を参照してください。

## 4つの共通基盤

TT-senseiの教材では、画像・UI・動作・サウンドを分けて共通化しています。

| プロジェクト | 役割 | GitHub | Pages |
| --- | --- | --- | --- |
| **edu-components** | 動作・ロジック・共通コンポーネント | https://github.com/TT-sensei/edu-components | https://tt-sensei.github.io/edu-components/ |
| **edu-effects** | UI・CSS・視覚演出 | https://github.com/TT-sensei/edu-effects | https://tt-sensei.github.io/edu-effects/ |
| **edu-assets** | バッジ・エレメント・コレクション画像 | https://github.com/TT-sensei/edu-assets | https://tt-sensei.github.io/edu-assets/ |
| **sounds-recipe-** | Web Audio APIの教材用サウンド | https://github.com/TT-sensei/sounds-recipe- | https://tt-sensei.github.io/sounds-recipe-/ |

たとえば、バッジ獲得なら、

`edu-components` → 獲得処理  
`edu-assets` → バッジ画像  
`edu-effects` → 獲得演出  
`sounds-recipe-` → 効果音

というように役割を分けて組み合わせます。

## 互換性について

`deco-*` と `effect-*` は既存教材との互換性を維持するため、現在の命名を基本的に変更しません。

新しい共通クラスを追加する場合は `edu-` 接頭辞を優先します。既存教材のクラスを一括リネームしないでください。

`archive/legacy-catalog/` 以下は旧カタログ用のファイルです。教材アプリから直接読み込まず、現在の公開カタログを利用してください。

## 基本方針

edu-effectsは、TT-senseiが作る小学校向けWeb教材の「共通の見た目と動き」を一か所で管理するための基盤です。

新しい教材を作るときは、まず次の順番で考えます。

```text
1. 既存のedu-effectsで使えるUIはあるか？
2. 既存の演出で学習上の目的を表せるか？
3. 必要なCSSだけ読み込めるか？
4. edu-assetsやedu-componentsと組み合わせられるか？
5. 本当に新しい共通部品が必要ならedu-effectsへ追加できないか？
```

教材ごとに独自CSSを増やすのではなく、共通部品を育てていくことを基本とします。

## License

このリポジトリのソフトウェアコードは、**PolyForm Noncommercial License 1.0.0** の条件で提供します。

学校・家庭での非営利利用、教育機関での利用、研究・実験・個人学習などの非商用目的で利用できます。商用目的での利用は許可していません。

ライセンスの全文は [LICENSE](LICENSE) を確認してください。

Copyright © 2026 TT-sensei.
