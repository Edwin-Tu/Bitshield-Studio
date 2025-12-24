// src/components/Pricing.jsx

const pricingOverview = [
  { label: "網站建立（一次性）", price: "NT$ 5,000" },
  { label: "年度維護方案", price: "NT$ 1,000 / 年" },
  { label: "單次維護（大改）", price: "NT$ 500 / 次" },
  { label: "單次維護（小改）", price: "NT$ 200 / 次" }
];

const pricingCards = [
  {
    title: "建立網站",
    price: "NT$ 5,000",
    highlight: "一次付清，包含版型客製與基本上線設定。",
    items: [
      "首頁、房型介紹、交通地圖、相簿與聯絡方式等基本頁面",
      "套用既有版型，依民宿風格做文字與圖片調整",
      "協助設定網域、SSL 憑證與基本 SEO 設定"
    ]
  },
  {
    title: "年度維護方案",
    price: "NT$ 1,000 / 年",
    highlight: "一年內包含 24 次小改、4 次大改，適合有固定更新需求的民宿。",
    items: [
      "小改：文字、圖片、價格、活動資訊等日常調整",
      "大改：新增區塊或頁面、重做排版等較大幅度調整",
      "可彈性分配在一年內使用，不用一次用完"
    ],
    note: "若當年度未用完的次數，原則上不累計到下一年，可視合作情況彈性處理。"
  },
  {
    title: "單次維護",
    price: "大改 NT$ 500 / 次；小改 NT$ 200 / 次",
    highlight: "不想包年也可以，只在需要的時候再請我們修改。",
    items: [
      "單次維護（大改）：適合一次要調整較多內容或版面時",
      "單次維護（小改）：適合偶爾調整文字、圖片或小範圍版面",
      "可視實際工作量，事先溝通後再確認金額"
    ]
  }
];

const Pricing = () => {
  return (
    <main className="pricing-page">
      <section className="pricing-container">
        {/* 標題 */}
        <h2 className="section-title">服務內容與價格表</h2>
        <p className="section-desc">
          我們希望收費方式簡單、透明、好理解，下面是目前針對民宿官網的基本方案。
        </p>

        {/* 合作流程卡片 */}
        <div className="pricing-flow">
          <h3 className="pricing-flow-title">合作流程（約 2–4 週）</h3>
          <ol className="pricing-flow-list">
            <li>初步討論：了解民宿狀況與需求，確認預算與合作方式。</li>
            <li>準備資料：提供照片、房型與價格、交通方式、聯絡方式與民宿故事。</li>
            <li>設計與修改：我們製作網站草稿，與你一起調整到滿意為止。</li>
            <li>上線與教學：網站正式上線，並說明之後需要修改時要怎麼聯絡我們。</li>
          </ol>
        </div>

        {/* 價格總覽小卡片 */}
        <div className="pricing-overview-row">
          {pricingOverview.map((item, idx) => (
            <div key={idx} className="pricing-overview-card">
              <p className="pricing-overview-label">{item.label}</p>
              <p className="pricing-overview-price">{item.price}</p>
            </div>
          ))}
        </div>

        {/* 詳細方案卡片 */}
        <div className="pricing-card-row">
          {pricingCards.map((card, idx) => (
            <article key={idx} className="pricing-card">
              <h3 className="pricing-card-title">{card.title}</h3>
              <p className="pricing-card-price">{card.price}</p>
              <p className="pricing-card-highlight">{card.highlight}</p>

              <ul className="pricing-card-list">
                {card.items.map((text, i) => (
                  <li key={i}>• {text}</li>
                ))}
              </ul>

              {card.note && (
                <p className="pricing-card-note">
                  {card.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="pricing-footer-note">
          ※ 若需要訂房系統、後台管理或其他客製功能，可以在討論需求時另外報價。
        </p>
      </section>
    </main>
  );
};

export default Pricing;
