import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      {/* HEADER BAND：Who we are + Stats */}
      <div className="about-band about-band-header">
        <div className="about-header-grid">
          <div className="about-header-text">
            <div className="about-kicker">WHO WE ARE</div>
            <h2 className="section-title">BitShield 團隊背景</h2>
            <p className="section-desc">
              我們是一群就讀於澎湖科技大學資訊工程系的學生，
              長期在澎湖生活、學習，也在這裡觀察到許多民宿和在地店家，
              需要更好的網路呈現方式。
              我們不是大型公司，也沒有誇張的技術包裝，
              但我們擅長用踏實的方法，替店家打造好用、看得見成果的網站。
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">🏝️</div>
              <div className="about-stat-content">
                <div className="about-stat-label-row">
                  <span className="about-stat-index">01</span>
                  <span className="about-stat-label">Based in 澎湖</span>
                </div>
                <div className="about-stat-desc">
                  我們本身就在澎湖生活、上課與工作，
                  對在地民宿與店家的日常需求有實際感受。
                </div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🏡</div>
              <div className="about-stat-content">
                <div className="about-stat-label-row">
                  <span className="about-stat-index">02</span>
                  <span className="about-stat-label">專注民宿與在地店家</span>
                </div>
                <div className="about-stat-desc">
                  不做大而全的系統，
                  把心力放在「民宿怎麼被旅客看見」和
                  「店家怎麼在網路上說清楚自己」。
                </div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">💳</div>
              <div className="about-stat-content">
                <div className="about-stat-label-row">
                  <span className="about-stat-index">03</span>
                  <span className="about-stat-label">固定費用、不亂加價</span>
                </div>
                <div className="about-stat-desc">
                  使用模板製作、價格透明，
                  寧可把條件寫清楚，也不想讓老闆擔心之後會被加東加西。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORY BAND：我們怎麼走到這裡 */}
      <div className="about-band about-band-story">
        <div className="about-story-card">
          <h3 className="about-story-title">我們怎麼走到這裡？</h3>
          <p className="about-story-intro">
            BitShield 不是從商業計畫書開始，而是從在澎湖生活的日常經驗累積出來的。
          </p>

          <ul className="about-timeline">
            <li className="about-timeline-item">
              <span className="about-timeline-dot" />
              <div className="about-timeline-content">
                我們在澎湖科技大學資訊工程系學習，
                白天上課、寫程式，平常也會在島上走走、
                看看民宿和在地店家的招牌、廣告與網站。
              </div>
            </li>

            <li className="about-timeline-item">
              <span className="about-timeline-dot" />
              <div className="about-timeline-content">
                很多時候，我們看到的是：
                民宿很用心經營，實際住宿體驗也很好，
                但網路上的呈現卻跟不上——
                網站老舊、資訊不完整，甚至沒有自己的官方網站。
              </div>
            </li>

            <li className="about-timeline-item">
              <span className="about-timeline-dot" />
              <div className="about-timeline-content">
                在課業以外，我們開始接一些小專案、
                也實際投入店面與合作案，
                一邊練習前端技術，一邊學習如何和老闆溝通、
                如何把店家的故事翻成網頁上看得懂的內容。
              </div>
            </li>

            <li className="about-timeline-item">
              <span className="about-timeline-dot" />
              <div className="about-timeline-content">
                我們慢慢整理出一個感受：
                民宿和多數店家，其實不需要複雜系統，
                他們真正需要的是：
                一個乾淨、可信、好閱讀的官網，
                讓旅客可以快速找到資訊，也能建立第一層信任。
              </div>
            </li>
          </ul>

          <p className="about-story-outro">
            我們還在成長，但會努力、會負責、
            會把每一個合作當成真正的案子來完成。
            對我們來說，這不只是賺取收入，而是希望用我們現階段能做到的能力，
            替澎湖的店家做一點實質的幫助。
          </p>
        </div>
      </div>

      {/* PROCESS BAND：流程 + 強 CTA */}
      <div className="about-band about-band-process">
        <div className="about-process-grid">
          <div className="about-process-card">
            <div className="about-process-toprow">
              <div className="about-process-icon">🧭</div>
              <div className="about-step-label">STEP 1</div>
            </div>
            <div className="about-process-title">一起確認風格與範本</div>
            <p className="about-process-desc">
              我們會先和民宿主聊一聊，
              了解你希望旅客看到什麼樣的感覺，
              再從我們準備好的模板與範例中，挑選最適合的一種。
            </p>
          </div>

          <div className="about-process-card">
            <div className="about-process-toprow">
              <div className="about-process-icon">📝</div>
              <div className="about-step-label">STEP 2</div>
            </div>
            <div className="about-process-title">由你提供內容，我們負責排版上稿</div>
            <p className="about-process-desc">
              民宿主提供文字、房型資訊、照片與基本資料，
              我們負責把這些內容整理成乾淨、好閱讀的頁面，
              不需要你學會任何技術。
            </p>
          </div>

          <div className="about-process-card">
            <div className="about-process-toprow">
              <div className="about-process-icon">🚀</div>
              <div className="about-step-label">STEP 3</div>
            </div>
            <div className="about-process-title">上線與後續調整方式</div>
            <p className="about-process-desc">
              網站上線後，如果未來有需要修改，我們會提供簡單明確的收費方式。
              使用模板製作、固定費用、不亂加價，
              也避免你被綁在昂貴後端或複雜主機方案裡。
            </p>
          </div>
        </div>

        {/* 強 CTA：希望讓人想合作 */}
        <div className="about-cta-shell">
          <div className="about-cta-main">
            <p className="about-cta-headline">
              想替民宿多準備一個「好看又好用的官方網站」嗎？
            </p>
            <p className="about-cta-sub">
              如果你對網站很陌生也沒關係，
              你只需要把自己的民宿故事告訴我們，剩下的交給 BitShield。
            </p>
          </div>

          <div className="about-cta-actions">
            <Link to="/#contact" className="btn-primary">
              先聊聊合作可能
            </Link>
            <Link to="/#demo" className="btn-secondary">
              看看我們做過的樣子
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
