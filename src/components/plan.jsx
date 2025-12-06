// src/pages/Plan.jsx
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <section id="plan">
      {/* HERO：像簡報封面 */}
      <div className="plan-band plan-hero">
        <div className="plan-hero-grid">
          <div className="plan-hero-main">
            <div className="plan-kicker">PLAN</div>
            <h1 className="plan-title">澎湖民宿官網計畫</h1>
            <p className="plan-subtitle">
              這是一份專門給民宿老闆看的說明。
              不談複雜技術，只談三件事：
              「為什麼需要官網」、「實際會改善什麼」、
              以及「BitShield 可以替你做到哪些事」。
            </p>
            <div className="plan-pill-row">
              <span className="plan-pill">適合：想升級形象的民宿</span>
              <span className="plan-pill">適合：目前只有平台或粉專</span>
              <span className="plan-pill">適合：怕被亂加價的老闆</span>
            </div>
          </div>

          <div className="plan-hero-side">
            <div className="plan-hero-card">
              <p className="plan-hero-label">這個計畫在解決什麼？</p>
              <ul className="plan-hero-list">
                <li>旅客找不到完整資訊，只看到平台上的幾張照片。</li>
                <li>民宿很用心經營，但網路上的呈現跟不上實際品質。</li>
                <li>想做網站，卻擔心預算、後續維護與溝通成本。</li>
              </ul>
              <p className="plan-hero-note">
                你也有這些感覺時，代表這份計畫是為你準備的。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 2：民宿現在常遇到的狀況（痛點） */}
      <div className="plan-band plan-problems">
        <h2 className="plan-section-title">民宿現在常遇到的狀況</h2>
        <p className="plan-section-desc">
          不是民宿不夠好，而是網路上的呈現，常常跟不上你實際的用心。
        </p>

        <div className="plan-problem-grid">
          <div className="plan-problem-card">
            <div className="plan-problem-icon">📱</div>
            <h3>只有平台或粉專</h3>
            <p>
              Booking / Agoda / 粉專就像是「櫃位」，
              但沒有一個真正屬於自己的「店門口」。
              旅客很難在一個地方看到完整資訊。
            </p>
          </div>

          <div className="plan-problem-card">
            <div className="plan-problem-icon">🧭</div>
            <h3>資訊散落、難以找到</h3>
            <p>
              價格在一個地方、交通在另一個地方、房型介紹藏在貼文裡，
              旅客找不到時，往往就改訂別家了。
            </p>
          </div>

          <div className="plan-problem-card">
            <div className="plan-problem-icon">⏳</div>
            <h3>網站老舊、手機版不好用</h3>
            <p>
              早期做的網站沒有針對手機優化，
              字很小、圖片壓縮嚴重，旅客滑幾下就關掉。
            </p>
          </div>

          <div className="plan-problem-card">
            <div className="plan-problem-icon">💸</div>
            <h3>怕預算失控、怕被綁約</h3>
            <p>
              找設計公司擔心費用太高，
              找不熟悉的接案者又怕中途加價或人突然消失。
            </p>
          </div>
        </div>
      </div>

      {/* 區塊 3：有一個官網，會帶來什麼具體幫助？ */}
      <div className="plan-band plan-benefits">
        <h2 className="plan-section-title">有一個官網，會帶來什麼改變？</h2>
        <p className="plan-section-desc">
          對旅客來說，官網就像是「走進民宿門口」；
          對老闆來說，它是一個可以自己說清楚、講明白的空間。
        </p>

        <div className="plan-benefit-grid">
          <div className="plan-benefit-card">
            <h3>建立第一層信任感</h3>
            <p>
              當旅客搜尋民宿名稱時，
              看見的是一個乾淨、完整、有資訊的官網，
              而不是零碎的貼文或陌生網站。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>整理資訊，讓旅客好決定</h3>
            <p>
              房型、價格、設備、早餐、交通方式、常見問題，
              一次清楚列好，讓旅客不再反覆訊問同樣的問題。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>搭配平台，而不是取代平台</h3>
            <p>
              我們不鼓勵完全脫離 OTA，
              而是希望用官網先建立好印象，
              再讓旅客自由選擇透過哪一個管道預訂。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>為之後的品牌發展留空間</h3>
            <p>
              未來如果有 IG、部落格、活動、合作方案，
              都能從官網延伸出去，不會被單一平台綁住。
            </p>
          </div>
        </div>
      </div>

      {/* 中段 CTA：免費評估 */}
      <div className="plan-band plan-mid-cta">
        <h2 className="plan-section-title">不確定自己適不適合做官網？</h2>
        <p className="plan-section-desc">
          你可以先把目前的做法、粉專或平台頁面丟給我們。
          我們會用白話幫你做一份「民宿網路門面診斷」，不收費，也不會強迫你立刻做決定。
        </p>
        <div className="plan-cta-actions">
          <Link to="/#contact" className="btn-primary">
            我要先請你們幫忙看一看
          </Link>
          <Link to="/about" className="btn-secondary">
            先了解 BitShield 的想法
          </Link>
        </div>
      </div>

      {/* 區塊 4：BitShield 的做法（像簡報中的解決方案頁） */}
      <div className="plan-band plan-solution">
        <div className="plan-solution-grid">
          <div className="plan-solution-main">
            <h2 className="plan-section-title">BitShield 想怎麼幫民宿做這件事？</h2>
            <p className="plan-section-desc plan-solution-desc">
              我們不是要做一個很花、很難維護的系統，
              而是先替民宿準備一個穩定、好閱讀、價格透明的「門口」。
            </p>

            <ol className="plan-steps-list">
              <li>
                <span className="plan-steps-num">01</span>
                <div>
                  <div className="plan-steps-title">先了解你的風格與客群</div>
                  <div className="plan-steps-text">
                    你可以用很生活的方式跟我們描述：
                    你希望吸引什麼樣的旅客、你喜歡什麼樣的感覺，
                    我們會用這些當作設計的起點。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">02</span>
                <div>
                  <div className="plan-steps-title">依照預算選擇合適的模板</div>
                  <div className="plan-steps-text">
                    透過套用模板、再進行客製化排版，
                    避免把預算花在從零開發，
                    把心力放在內容呈現與體驗上。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">03</span>
                <div>
                  <div className="plan-steps-title">協助整理照片與文字，統一呈現</div>
                  <div className="plan-steps-text">
                    你提供現有照片與資訊，
                    我們協助整理成清楚的段落與區塊，
                    讓房型與環境被好好地介紹出來。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">04</span>
                <div>
                  <div className="plan-steps-title">說清楚費用與後續修改方式</div>
                  <div className="plan-steps-text">
                    專案開始前會先確認預算與內容，
                    上線後若有需要修改，也會有明確的收費規則，
                    避免出現「後面才發現一堆額外費用」的狀況。
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div className="plan-solution-side">
            <div className="plan-solution-card">
              <p className="plan-solution-label">一句話總結我們的角色</p>
              <p className="plan-solution-quote">
                我們不是要把你推向很複雜的系統，
                而是希望替民宿做好第一個穩定的官方門面，
                讓旅客在搜尋你的名字時，看見一個配得上你用心程度的網站。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 5：簡單比較 — 一般做法 vs BitShield */}
      <div className="plan-band plan-compare">
        <h2 className="plan-section-title">跟一般做網站的方式，有什麼不一樣？</h2>
        <p className="plan-section-desc">
          我們知道做網站有很多選擇。
          這裡用很單純的方式，說明 BitShield 的做法差在哪裡。
        </p>

        <div className="plan-compare-grid">
          <div className="plan-compare-col">
            <div className="plan-compare-tag">常見做法</div>
            <ul className="plan-compare-list">
              <li>一次投入高額預算，細節沒談清楚容易超支。</li>
              <li>很多專有名詞，老闆聽不懂也不好意思問。</li>
              <li>網站上線後，修改一次價格不清楚。</li>
              <li>做完後不知道誰能協助更新或維護。</li>
            </ul>
          </div>
          <div className="plan-compare-col plan-compare-col-highlight">
            <div className="plan-compare-tag plan-compare-tag-primary">
              BitShield 的做法
            </div>
            <ul className="plan-compare-list">
              <li>一開始就談清楚預算範圍與內容，不用擔心中途加價。</li>
              <li>用民宿聽得懂的語言說明，不用硬記技術名詞。</li>
              <li>上線後若有修改需求，有明確、固定的收費方式。</li>
              <li>我們在澎湖讀書與生活，真正理解在地民宿需要什麼。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 區塊 6：CTA — 給民宿老闆看的收束句 */}
      <div className="plan-band plan-cta-band">
        <div className="plan-cta-shell">
          <div className="plan-cta-main">
            <p className="plan-cta-headline">
              如果你覺得自己的民宿，值得一個更好的官網，
              我們很願意先聽聽你的故事。
            </p>
            <p className="plan-cta-sub">
              你可以先把目前的情況、擔心與預算範圍告訴我們。
              我們會幫你做一份簡單的網路門面診斷，
              再一起討論「要不要做」、「要做到什麼程度」，
              而不是一開始就被推向很大的方案。
            </p>
          </div>
          <div className="plan-cta-actions">
            <Link to="/#contact" className="btn-primary">
              先幫我看一下我的情況
            </Link>
            <Link to="/about" className="btn-secondary">
              再多了解 BitShield 一點
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
