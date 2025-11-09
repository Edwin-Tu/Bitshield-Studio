function Home() {
  return (
    <div className="section">
      {/* 團隊成員卡片 */}
      <div className="card">
        <div className="card-title">團隊成員</div>
        <div className="team-intro">
          <div className="member">
            <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/377a1faf-dbc1-4c17-99de-5a88273cf67c.png" alt="劉興源" className="avatar" />
            <div className="info">
              <strong>劉興源</strong>
              <p>AI助理開發者／Python與智能應用專家，負責架構與工程。</p>
              <a href="https://bryan-9603012.github.io" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
            </div>
          </div>
          <div className="member">
            <img src="image.jpeg" alt="成員B" className="avatar" />
            <div className="info">
              <strong>木偶師</strong>
              <p>前端設計師，熱愛UI/UX，專長 HTML/CSS 動效。</p>
              <a href="https://thetimelesspuppeteer.github.io/myself" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
            </div>
          </div>
          <div className="member">
            <img src="image.jpeg" alt="成員C" className="avatar" />
            <div className="info">
              <strong>凃彥任</strong>
              <p>雲端工程師，擅長伺服器與效能優化，基礎架構主導。</p>
              <a href="https://edwin-tu.github.io" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">服務內容</div>
        <ul>
          <li>客製化網頁設計 — 依品牌形象量身規劃</li>
          <li>響應式網站 — 手機/平板/桌機自適應</li>
          <li>SEO優化 — 提升搜尋引擎曝光</li>
          <li>互動動效 — 專業 CSS/JS 效果</li>
          <li>品牌設計 — Logo、色彩、識別系統統合</li>
        </ul>
        <div className="testimonial">「合作後，我們的線上詢問量翻倍，品牌形象大大提升！」 — 客戶回饋</div>
        <a href="#contact" className="cta-btn" style={{marginTop: '14px'}}>預約免費諮詢</a>
      </div>

      <div className="card">
        <div className="card-title">技能專長</div>
        <div className="skills">
          <div className="skill">HTML5</div>
          <div className="skill">Modern CSS</div>
          <div className="skill">Responsive</div>
          <div className="skill">Accessibility</div>
          <div className="skill">Design Systems</div>
          <div className="skill">Performance</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">成就與認證</div>
        <div className="achievements">
          <div className="achievement"><span role="img" aria-label="coder">🧑‍💻</span>程式設計基礎</div>
          <div className="achievement"><span role="img" aria-label="idea">💡</span>創新設計認證</div>
          <div className="achievement"><span role="img" aria-label="web">🌐</span>網頁開發證書</div>
          <div className="achievement"><span role="img" aria-label="success">🏅</span>專案成功完成</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">服務方案與價格</div>
        <table className="pricing">
          <thead>
            <tr>
              <th>方案</th>
              <th>內容</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>標準型</td>
              <td>單頁設計＋基本SEO</td>
              <td>$8,000</td>
            </tr>
            <tr>
              <td>進階型</td>
              <td>多頁＋響應式＋品牌Logo</td>
              <td>$18,000</td>
            </tr>
            <tr>
              <td>客製化</td>
              <td>依需求量身服務</td>
              <td>個別報價</td>
            </tr>
          </tbody>
        </table>
        <div style={{marginTop:8}}>所有方案均享有2次免費修改，三個月內免費維護。</div>
        <div style={{marginTop:4}}>付款條件：50%預付，50%完工後付清。</div>
      </div>

      <div className="card" id="contact">
        <div className="card-title">聯絡我們</div>
        <div className="card-desc">
          所在地：台灣<br />
          開放時間：2025年12月起<br />
          語言：中文（繁體）、英文<br />
          信箱：cloudweb@example.com
        </div>
        <a href="mailto:cloudweb@example.com" className="cta-btn">立即來信</a>
      </div>
    </div>
  );
}
export default Home;
