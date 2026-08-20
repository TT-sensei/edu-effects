(() => {
  const visual = '<div class="edu-filter-demo-visual"></div>';
  const extra = [
    {title:"白黒・未クリア",className:".edu-image-grayscale",category:"decoration",file:"edu-effects-filters.css",tags:"画像 白黒 グレースケール 未クリア ロック",stage:"is-dark",
      preview:'<div class="edu-image-lock"><div class="edu-filter-demo-visual edu-filter-demo-mountain"></div></div><span class="edu-image-caption">未クリア</span>',
      copy:'<div class="edu-image-lock"><img class="edu-image-grayscale" src="image.jpg" alt="画像"><span class="edu-image-caption">未クリア</span></div>'},
    {title:"ぼかし・答え開示",className:".edu-image-blur",category:"feedback",file:"edu-effects-filters.css",tags:"画像 ぼかし ヒント 答え 開示",stage:"is-violet",
      preview:'<div class="edu-image-reveal"><div class="edu-filter-demo-visual edu-filter-demo-map"></div></div><span class="edu-image-caption">ホバーで開示</span>',
      copy:'<div class="edu-image-reveal"><img class="edu-image-filter edu-image-blur" src="hint.jpg" alt="ヒント画像"></div>'},
    {title:"歴史資料・セピア",className:".edu-image-sepia",category:"decoration",file:"edu-effects-filters.css",tags:"画像 セピア 歴史 社会 資料",stage:"is-warm",
      preview:'<div class="edu-image-filter edu-image-sepia edu-filter-demo-paper"></div><span class="edu-image-caption">歴史資料</span>',
      copy:'<img class="edu-image-filter edu-image-sepia" src="history.jpg" alt="歴史資料">'},
    {title:"カラー開示",className:".edu-image-color-reveal",category:"feedback",file:"edu-effects-filters.css",tags:"画像 白黒 カラー 開示 発見",stage:"is-grid",
      preview:'<div class="edu-filter-demo-visual edu-filter-demo-color edu-image-color-reveal"></div><span class="edu-image-caption">色が戻る</span>',
      copy:'<img class="edu-image-filter edu-image-color-reveal" src="discovery.jpg" alt="発見画像">'},
    {title:"資料マスク開示",className:".edu-image-mask",category:"motion",file:"edu-effects-filters.css",tags:"画像 マスク 開示 資料 アニメーション",stage:"is-violet",
      preview:'<div class="edu-image-mask"><div class="edu-filter-demo-visual edu-filter-demo-chart"></div></div><span class="edu-image-caption">左から開示</span>',
      copy:'<div class="edu-image-mask"><img class="edu-image-filter" src="chart.jpg" alt="資料"></div>'},
    {title:"観察写真ズーム",className:".edu-image-zoom",category:"motion",file:"edu-effects-filters.css",tags:"画像 ズーム 観察 理科 拡大",stage:"is-dark",
      preview:'<div class="edu-image-zoom"><div class="edu-filter-demo-visual edu-filter-demo-leaf"></div></div><span class="edu-image-caption">細部に注目</span>',
      copy:'<div class="edu-image-zoom"><img class="edu-image-filter" src="observation.jpg" alt="観察写真"></div>'},
    {title:"画像比較",className:".edu-image-compare",category:"feedback",file:"edu-effects-filters.css",tags:"画像 比較 前後 変化 資料",stage:"is-grid",
      preview:'<div class="edu-image-compare"><div class="edu-image-compare__before"></div><div class="edu-image-compare__after"></div></div><span class="edu-image-caption">Before / After</span>',
      copy:'<div class="edu-image-compare"><img class="edu-image-compare__before" src="before.jpg" alt="前"><img class="edu-image-compare__after" src="after.jpg" alt="後"></div>'}
  ];
  window.EduEffectsLegacyMaterials = (window.EduEffectsLegacyMaterials || []).concat(extra);
})();