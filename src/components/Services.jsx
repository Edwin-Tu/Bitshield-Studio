// src/pages/Services.jsx
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services-page">
      {/* HERO 區：說明這頁在幹嘛 */}
      <div className="plan-band services-hero">
        <div className="services-hero-grid">
          <div className="services-hero-main">
            <div className="services-kicker">SERVICES</div>
            <h1 className="services-title">服務項目與價目表</h1>
            <p className="services-subtitle">
              BitShield 目前提供四項主要服務：
              「建立網站」、「年度維護」、「單次維護（大改）」、
              「單次維護（小改）」。這一頁會把內容與收費方式說清楚，
              方便你評估是否適合現在的民宿。
            </p>
            <p className="plan-highlight">
              <strong>價格盡量簡單、透明，</strong>
              重點是讓你知道：「花這個錢，網站會替你做到哪些事」。
            </p>
          </div>

          <div className="services-hero-side">
            <div className="services-hero-card">
              <p className="services-hero-label">這頁可以幫你解答的問題</p>
              <ul className="services-hero-list">
                <li>做一個官網大概要多少錢？裡面包含什麼？</li>
                <li>上線之後，如果要調整內容或版面要怎麼算？</li>
                <li>我一年大概需要預留多少網站相關的費用？</li>
              </ul>
              <p className="services-hero-note">
                如果你只是想先抓個感覺，
                也可以把目前的情況傳給我們，先請我們幫忙看看。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 1：四個主要服務卡片 */}
      <div className="plan-band services-band-main">
        <h2 className="plan-section-title">主要服務項目</h2>
        <p className="plan-section-desc">
          下列價格以一般規格的民宿形象官網為前提。
          如果是更複雜的功能或特殊需求，我們會另外討論，先講清楚再開始。
        </p>

        <div className="services-card-grid">
          {/* 建立網站 */}
          <div className="service-card">
            <div className="service-name">建立網站（一次性專案）</div>
            <div className="service-price">
              NT$ 6,000
              <span> · 單次</span>
            </div>
            <ul className="service-meta">
              <li>以現成模板為基礎，依民宿風格調整排版與顏色。</li>
              <li>適合需要一個乾淨、好閱讀的民宿形象官網。</li>
              <li>包含基本頁面（例如首頁、房型簡介、聯絡方式）。</li>
            </ul>
          </div>

          {/* 年度維護 */}
          <div className="service-card">
            <div className="service-name">年度維護方案</div>
            <div className="service-price">
              NT$ 1,000
              <span> / 年</span>
            </div>
            <ul className="service-meta">
              <li>包含一年網域費。</li>
              <li>年度內提供「24 次小改」＋「4 次大改」。</li>
              <li>適合每年都會調整價格、照片、活動資訊的民宿。</li>
            </ul>
          </div>

          {/* 單次維護（大改） */}
          <div className="service-card">
            <div className="service-name">單次維護（大改）</div>
            <div className="service-price">
              NT$ 500
              <span> / 次</span>
            </div>
            <ul className="service-meta">
              <li>適用於整個區塊或整頁的排版調整。</li>
              <li>例如：新增一個頁面、重新整理房型介紹頁。</li>
              <li>未使用年度維護方案的情況下，可單次選擇。</li>
            </ul>
          </div>

          {/* 單次維護（小改） */}
          <div className="service-card">
            <div className="service-name">單次維護（小改）</div>
            <div className="service-price">
              NT$ 200
              <span> / 次</span>
            </div>
            <ul className="service-meta">
              <li>適用於純文字或圖片的小範圍調整。</li>
              <li>例如：更新價目、修改幾張照片、調整一小段 CSS。</li>
              <li>
                如果一年內會常常微調內容，會比較建議直接使用年度維護方案。
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 區塊 2：對照表（給想快速掃過的人看） */}
      <div className="plan-band services-band-table">
        <h2 className="plan-section-title">服務項目一覽表</h2>
        <p className="plan-section-desc">
          這張表適合想快速比較「做網站」與「維護」之間差異的老闆。
          成本結構是我們內部在計算的，頁面上只會呈現你實際需要付的金額。
        </p>

        <div className="services-table-wrapper">
          <table className="services-table">
            <thead>
              <tr>
                <th>服務內容</th>
                <th>服務說明</th>
                <th>收費方式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>建立網站</td>
                <td>一次性製作民宿官網，含模板調整與基本頁面。</td>
                <td className="services-table-price">NT$ 6,000 / 次</td>
              </tr>
              <tr>
                <td>年度維護</td>
                <td>含網域＋年度 24 次小改、4 次大改。</td>
                <td className="services-table-price">NT$ 1,000 / 年</td>
              </tr>
              <tr>
                <td>單次維護（大改）</td>
                <td>單次整頁或大區塊調整，適合較大變動。</td>
                <td className="services-table-price">NT$ 500 / 次</td>
              </tr>
              <tr>
                <td>單次維護（小改）</td>
                <td>純文字、圖片或小範圍樣式調整。</td>
                <td className="services-table-price">NT$ 200 / 次</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="services-note">
          小改：改純文字或圖片，小範圍的 CSS / JS。<br />
          大改：整頁架構調整，例如新增頁面或大幅重排版面。<br />
          以上價格以民宿網站為主，若有其他型態的網站，我們會依實際需求另外估價。
        </p>
      </div>

      {/* 區塊 3：CTA */}
      <div className="plan-band plan-cta-band">
        <div className="plan-cta-shell">
          <div className="plan-cta-main">
            <p className="plan-cta-headline">
              不確定自己適合哪一種方案？可以先把情況跟我們說。
            </p>
            <p className="plan-cta-sub">
              你可以先傳目前的粉專、平台頁面或既有網站給我們看，
              我們會用白話幫你做一份簡單的「網路門面診斷」，
              再一起討論是先做網站、還是先從維護開始比較適合。
            </p>
          </div>
          <div className="plan-cta-actions">
            <Link to="/#contact" className="btn-primary">
              傳目前資料給 BitShield 看看
            </Link>
            <Link to="/plan" className="btn-secondary">
              回去看民宿官網計畫說明
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
