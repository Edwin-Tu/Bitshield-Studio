import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      {/* 上方小標籤列，增加年輕感 */}
      <div className="about-pill-row">
        <span className="about-pill">在澎湖生活的資工學生</span>
        <span className="about-pill">專注民宿與在地店家</span>
        <span className="about-pill">乾淨好讀的品牌官網</span>
      </div>

      <h2 className="section-title">BitShield 團隊背景</h2>
      <p className="section-desc">
        我們是一群就讀於澎湖科技大學資訊工程系的學生，
        長期在澎湖生活、學習，也在這裡觀察到許多民宿和在地店家，
        需要更好的網路呈現方式。
      </p>

      <div className="about-layout">
        {/* 左側：主文案（依 docx 整理） */}
        <div className="about-main-card">
          <p>
            我們不是大型公司，也沒有誇張的技術包裝，
            但我們擅長用踏實的方法，替店家打造好用、看得見成果的網站。
          </p>

          <p style={{ marginTop: "0.5rem" }}>
            在課業以外，我們也經營自己的小專案、店面與合作案，累積了：
          </p>
          <ul>
            <li>基礎的網站前端能力</li>
            <li>與店家溝通的實務經驗</li>
            <li>對在地產業的理解</li>
            <li>對「什麼樣的網站對民宿真正有幫助」的感受</li>
          </ul>

          <p>
            因為我們本身就是生活在澎湖的人，
            我們知道旅客在搜尋民宿時會看哪些資訊，
            也知道民宿主最怕的是：網站很貴、太複雜、無法維護、又沒人協助。
          </p>

          <p style={{ marginTop: "0.75rem" }}>
            所以，我們選擇提供一套簡單、明確、固定費用、不會亂加價的網站建置方案：
          </p>
          <ul>
            <li>使用模板製作，價格透明</li>
            <li>內容由民宿提供，我們協助排版上稿</li>
            <li>上線後若要修改，也有簡單明確的費用</li>
            <li>不需要昂貴後端、不需要持續付主機費</li>
          </ul>

          <p>
            我們能做到的事情很實在：
            讓每一家民宿都有一個乾淨、可信、好閱讀的官方網站，
            幫助你在網路上被旅客看見。
          </p>

          <p style={{ marginTop: "0.75rem" }} className="about-cta-text">
            我們還在成長，但我們會努力、會負責、會把每一個合作當成真正的案子來完成。
            對我們來說，這不只是賺取收入，而是希望用我們現階段能做到的能力，
            替澎湖的店家做一點實質的幫助。
          </p>

          {/* CTA：導回首頁各區塊 */}
          <div className="about-cta-row">
            <Link to="/#services" className="btn-primary">
              我想先看服務內容
            </Link>
            <Link to="/#demo" className="btn-secondary">
              想看看網站範例
            </Link>
            <Link to="/#contact" className="btn-secondary">
              直接聯絡你們
            </Link>
          </div>
        </div>

        {/* 右側：抽象視覺，不用真實照片 */}
        <aside className="about-aside">
          <div className="about-aside-inner">
            <div className="about-aside-badge-row">
              <span className="about-aside-badge">Based in 澎湖</span>
              <span className="about-aside-badge">Student Studio</span>
              <span className="about-aside-badge">For B&B Owners</span>
            </div>

            <h3 className="about-aside-title">我們在這裡生活，也在這裡做網站</h3>
            <p className="about-aside-subtitle">
              BitShield 不是遙遠的外包團隊，而是每天在澎湖走路、上課、看海的學生。
              我們用現在能做到的技術，替民宿做一個真正實用的官方網站。
            </p>

            {/* 抽象 avatar 群組：用字母代表成員，而非真人照 */}
            <div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Our crew</div>
              <div className="about-avatar-row">
                <div className="about-avatar">
                  <span>B</span>
                </div>
                <div className="about-avatar">
                  <span>S</span>
                </div>
                <div className="about-avatar">
                  <span>W</span>
                </div>
                <div className="about-avatar">
                  <span>+</span>
                </div>
              </div>
            </div>

            {/* 關鍵字列：補強年輕 & 專業印象 */}
            <ul className="about-key-list">
              <li>
                <span className="about-key-dot" />
                <span>乾淨、好閱讀的頁面設計，而不是複雜的系統介面。</span>
              </li>
              <li>
                <span className="about-key-dot" />
                <span>流程清楚、價格固定，不用擔心被亂加項目。</span>
              </li>
              <li>
                <span className="about-key-dot" />
                <span>從旅客角度思考：他們點進來，會先找什麼？</span>
              </li>
            </ul>

            <p className="about-aside-tagline">
              「踏實、好溝通、做得漂亮、價格不亂加」——
              這是我們希望被記住的樣子。
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
