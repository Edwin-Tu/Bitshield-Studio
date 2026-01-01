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
              我們目前提供四項服務：「建立網站」、「年度維護」、
              「單次維護（大改）」、「單次維護（小改）」。
              想讓你一眼就知道，花這個費用會得到哪些幫助。
            </p>
            <p className="plan-highlight">
              <strong>價格簡單、說明清楚，</strong>
              重點是網站真的能替民宿做事。
            </p>
          </div>

          <div className="services-hero-side">
            <div className="services-hero-card">
              <p className="services-hero-label">這一頁可以幫你解答：</p>
              <ul className="services-hero-list">
                <li>做一個官網大概需要多少預算？</li>
                <li>上線後，修改內容跟版面怎麼算？</li>
                <li>一年大概要準備多少網站相關費用？</li>
              </ul>
              <p className="services-hero-note">
                如果只是想先抓個概念，也可以先把目前的情況傳給我們，
                我們會用白話幫你看過一次。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 0：我適合哪一種方案？ 導引區（用 plan-core 樣式） */}
      <div className="plan-band plan-core">
        <h2 className="plan-section-title">我適合哪一種方案？</h2>
        <p className="plan-section-desc">
          如果你還不確定自己需要哪一種服務，可以先從以下幾個情況對照看看。
        </p>

        <div className="plan-core-grid">
          <div className="plan-core-card">
            <div className="plan-core-icon">🏠</div>
            <h3>目前沒有官網</h3>
            <p>
              旅客只能從平台或粉專找到你，想要有一個自己的「門面」。
              <br />
              → 建議從「建立網站」開始。
            </p>
          </div>

          <div className="plan-core-card">
            <div className="plan-core-icon">🧾</div>
            <h3>官網有了，但資訊常常要改</h3>
            <p>
              每年都會調整價目、照片或活動內容，不想每次都另外算一次。
              <br />
              → 建議使用「年度維護」。
            </p>
          </div>

          <div className="plan-core-card">
            <div className="plan-core-icon">🛠️</div>
            <h3>版面想大幅調整一次</h3>
            <p>
              例如重新整理房型頁、多加一個介紹頁，改動比較大。
              <br />
              → 可以選「單次維護（大改）」。
            </p>
          </div>

          <div className="plan-core-card">
            <div className="plan-core-icon">✏️</div>
            <h3>只想改一點點內容</h3>
            <p>
              例如更新價目、換幾張照片，其他地方都先維持。
              <br />
              → 選「單次維護（小改）」就足夠。
            </p>
          </div>
        </div>
      </div>

      {/* 區塊 1：四個主要服務卡片（拆成 適合 / 包含 / 不包含） */}
      <div className="plan-band services-band-main">
        <h2 className="plan-section-title">主要服務項目</h2>
        <p className="plan-section-desc">
          以下金額以「一般民宿形象官網」為前提，
          實際會依需求微調，但方向會盡量維持這個區間。
        </p>

        <div className="services-card-grid">
          {/* 建立網站 */}
          <div className="service-card">
            <div className="service-card-header">
              <div className="service-name">建立網站（一次性專案）</div>
              <div className="service-price">
                NT$ 6,000
                <span>／單次</span>
              </div>
              <div className="service-tag">適合：還沒有官網、或官網很久沒更新的民宿</div>
            </div>

            <div className="service-card-body">
              <div className="service-col">
                <div className="service-col-title">適合的情況</div>
                <ul className="service-meta">
                  <li>現在只有平台或粉專，沒有自己的網站。</li>
                  <li>希望有一個乾淨、好閱讀的民宿官網。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">包含內容</div>
                <ul className="service-meta">
                  <li>以模板為基礎，調整成符合民宿風格的版面。</li>
                  <li>基本頁面：首頁、房型簡介、聯絡方式等。</li>
                  <li>手機版可正常瀏覽，旅客用手機查也看得清楚。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">不包含</div>
                <ul className="service-meta">
                  <li>專業攝影、Logo / 品牌設計。</li>
                  <li>多語系網站、完整訂房系統、OTA 串接。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 年度維護 */}
          <div className="service-card">
            <div className="service-card-header">
              <div className="service-name">年度維護方案</div>
              <div className="service-price">
                NT$ 1,000
                <span>／年</span>
              </div>
              <div className="service-tag">適合：一年內常常需要調整資訊的民宿</div>
            </div>

            <div className="service-card-body">
              <div className="service-col">
                <div className="service-col-title">適合的情況</div>
                <ul className="service-meta">
                  <li>一年會多次調整價目、活動或照片。</li>
                  <li>不想每改一次都另外算費用。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">包含內容</div>
                <ul className="service-meta">
                  <li>一年網域費，不用自己去管理續約。</li>
                  <li>年度內提供「24 次小改」＋「4 次大改」。</li>
                  <li>以線上訊息溝通為主，處理日常更新。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">不包含</div>
                <ul className="service-meta">
                  <li>新增大量新頁面或重新設計整個網站。</li>
                  <li>額外購買新網域、伺服器升級等費用。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 單次維護（大改） */}
          <div className="service-card">
            <div className="service-card-header">
              <div className="service-name">單次維護（大改）</div>
              <div className="service-price">
                NT$ 500
                <span>／次</span>
              </div>
              <div className="service-tag">適合：偶爾需要大幅調整版面的情況</div>
            </div>

            <div className="service-card-body">
              <div className="service-col">
                <div className="service-col-title">適合的情況</div>
                <ul className="service-meta">
                  <li>想重新整理某一頁的架構與排版。</li>
                  <li>例如新增一個介紹頁、重做房型列表頁。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">包含內容</div>
                <ul className="service-meta">
                  <li>針對單一頁面或大區塊重新設計版面。</li>
                  <li>調整段落順序、資訊呈現方式。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">不包含</div>
                <ul className="service-meta">
                  <li>同時改動多頁、整站全面改版。</li>
                  <li>額外新增後台系統或新功能。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 單次維護（小改） */}
          <div className="service-card">
            <div className="service-card-header">
              <div className="service-name">單次維護（小改）</div>
              <div className="service-price">
                NT$ 200
                <span>／次</span>
              </div>
              <div className="service-tag">適合：只需要微調一點內容的情況</div>
            </div>

            <div className="service-card-body">
              <div className="service-col">
                <div className="service-col-title">適合的情況</div>
                <ul className="service-meta">
                  <li>一年只會改一兩次內容。</li>
                  <li>只想調整文字或少量圖片。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">包含內容</div>
                <ul className="service-meta">
                  <li>修改純文字（例如價目、公告）。</li>
                  <li>替換幾張照片或小範圍樣式。</li>
                </ul>
              </div>

              <div className="service-col">
                <div className="service-col-title">不包含</div>
                <ul className="service-meta">
                  <li>整頁大幅調整、重新設計版面。</li>
                  <li>一次處理大量內容重寫或重拍。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 2：對照表（給想快速掃過的人看） */}
      <div className="plan-band services-band-table">
        <h2 className="plan-section-title">一眼看懂：服務與收費方式</h2>
        <p className="plan-section-desc">
          如果你只想快速比較各項服務的差別，可以直接看這張表。
        </p>

        <div className="services-table-wrapper">
          <table className="services-table">
            <thead>
              <tr>
                <th>服務內容</th>
                <th>簡單說明</th>
                <th>收費方式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>建立網站</td>
                <td>一次性製作民宿官網，含模板調整與基本頁面。</td>
                <td className="services-table-price">NT$ 6,000 ／ 次</td>
              </tr>
              <tr>
                <td>年度維護</td>
                <td>含網域＋年度 24 次小改、4 次大改。</td>
                <td className="services-table-price">NT$ 1,000 ／ 年</td>
              </tr>
              <tr>
                <td>單次維護（大改）</td>
                <td>單次整頁或大區塊調整，適合較大變動。</td>
                <td className="services-table-price">NT$ 500 ／ 次</td>
              </tr>
              <tr>
                <td>單次維護（小改）</td>
                <td>純文字、圖片或小範圍樣式調整。</td>
                <td className="services-table-price">NT$ 200 ／ 次</td>
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
