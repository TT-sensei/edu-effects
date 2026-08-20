# edu-effects

小学校向けWeb教材の見た目・UI・CSS演出を再利用するためのライブラリです。基本UI、問題画面、正誤、タイマー、結果、バッジ獲得、アンロックなどを、必要なCSSだけ選んで使えます。

## 基本的な使い方

```html
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-effects.css">
<link rel="stylesheet" href="https://tt-sensei.github.io/edu-effects/css/edu-learning.css">
```

必要に応じて追加します。

- 正誤の状態表示：`edu-feedback.css` の `.edu-correct-mark` / `.edu-wrong-mark`
- 問題・タイマー・結果：`edu-learning.css` の `.edu-question` / `.edu-timer` / `.edu-score`
- 正解・不正解・バッジ・コンボ演出：`edu-effects-library.css` の `.effect-correct-pop` / `.effect-wrong-shake` / `.effect-badge-unlock` / `.effect-combo-number`
- 進捗・レベル・アンロックUI：`edu-effects.css`、`edu-ui-variants.css`、`edu-effects-advanced.css` の `.edu-progress` / `.edu-level-card` / `.effect-unlock`

CSSクラスの再生補助が必要な場合だけ、次も読み込みます。

```html
<script src="https://tt-sensei.github.io/edu-effects/js/edu-effects.js"></script>
```

利用できるファイルとクラスは [AI-GUIDE.md](AI-GUIDE.md) と [公開カタログ](https://tt-sensei.github.io/edu-effects/) で確認してください。存在しないクラスを推測せず、必要なファイルだけを読み込みます。

### 3D・カルーセル素材

3D演出やカードの切り替えには `edu-effects-3d.css` を追加します。`.edu-3d-flip-card`、`.edu-3d-cube`、`.edu-3d-carousel`、`.edu-coverflow`、`.edu-auto-carousel`、`.edu-3d-tilt` を収録しています。カバーフローはラジオボタンとCSSだけで切り替わり、JavaScriptは不要です。教材では問題選択や発見カードなど、意味のある切り替えに限定して使ってください。

## 教材制作共通基盤

| プロジェクト | 担当 | GitHub | Pages |
| --- | --- | --- | --- |
| edu-components | 動作・ロジック | [Repository](https://github.com/TT-sensei/edu-components) | [Catalog](https://tt-sensei.github.io/edu-components/) |
| edu-effects | UI・CSS・視覚演出 | [Repository](https://github.com/TT-sensei/edu-effects) | [Catalog](https://tt-sensei.github.io/edu-effects/) |
| sounds-recipe- | Web Audio APIの教材用サウンドレシピ | [Repository](https://github.com/TT-sensei/sounds-recipe-) | [Catalog](https://tt-sensei.github.io/sounds-recipe-/) |
| edu-assets | バッジ・エレメント・コレクション画像 | [Repository](https://github.com/TT-sensei/edu-assets) | [Catalog](https://tt-sensei.github.io/edu-assets/) |

AIで教材を作成する場合のイベント連携と4資産の選び方は、[edu-componentsのAI-GUIDE](https://github.com/TT-sensei/edu-components/blob/main/AI-GUIDE.md)を参照してください。

## 方針

- 外部フォント・画像・ライブラリに依存しない
- `edu-effects`本体を教材ごとに改造しない
- タブレットで押しやすい大きさと`prefers-reduced-motion`に配慮する
- 色や動きだけに頼らず、文字や記号でも状態を伝える

