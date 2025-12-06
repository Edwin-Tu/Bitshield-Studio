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
              我們想替澎湖的民宿，準備一個「配得上你用心程度」的官方網站。
              不用很複雜，也不用很花，只要乾淨、好讀、價格透明。
            </p>
            <p className="plan-highlight">
              旅客願不願意訂房，往往取決於
              <strong> 搜尋你名字時看到的第一眼。</strong>
            </p>
            <div className="plan-pill-row">
              <span className="plan-pill">目前只有平台或粉專</span>
              <span className="plan-pill">網站很久沒更新</span>
              <span className="plan-pill">擔心預算被拉高</span>
            </div>
          </div>

          <div className="plan-hero-side">
            <div className="plan-hero-card">
              <p className="plan-hero-label">這份計畫想解決的事情</p>
              <ul className="plan-hero-list">
                <li>民宿很用心，但網路上的呈現看不出來。</li>
                <li>旅客只能從平台上幾張照片，猜民宿到底長怎樣。</li>
                <li>老闆想做官網，卻擔心費用、溝通與後續維護。</li>
              </ul>
              <p className="plan-hero-note">
                如果以上有一點讓你有共鳴，我們很願意先聽聽你的故事。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 1：民宿最在意的三件事 */}
      <div className="plan-band plan-core">
        <h2 className="plan-section-title">我們知道民宿最在意的三件事</h2>
        <p className="plan-section-desc">
          多數民宿老闆不是不想做網站，而是有太多顧慮。
          所以我們先從這三件事開始處理。
        </p>

        <div className="plan-core-grid">
          <div className="plan-core-card">
            <div className="plan-core-icon">💸</div>
            <h3>費用要可控、不會一直加</h3>
            <p>
              一開始就把範圍、預算說清楚，
              避免做到一半才發現金額一路往上加。
              你可以很清楚知道自己花錢換到什麼。
            </p>
          </div>
          <div className="plan-core-card">
            <div className="plan-core-icon">🛠️</div>
            <h3>上線後有人能幫忙改</h3>
            <p>
              價格調整、照片更新、活動資訊，
              我們會提供簡單明確的修改方式與費用，
              不會讓你覺得「網站做完就沒人管」。
            </p>
          </div>
          <div className="plan-core-card">
            <div className="plan-core-icon">🧭</div>
            <h3>不要太複雜、聽得懂就好</h3>
            <p>
              不需要懂程式、不需要懂後端。
              我們用民宿聽得懂的語言來說明，
              讓你知道每個區塊在替你做什麼。
            </p>
          </div>
        </div>
      </div>

      {/* 區塊 2：民宿現在常遇到的狀況（痛點） */}
      <div className="plan-band plan-problems">
        <h2 className="plan-section-title">現在多數民宿遇到的狀況</h2>
        <p className="plan-section-desc">
          這不是誰的錯，只是大家平常太忙於接待與維護環境，
          很少有時間整理自己的網路門面。
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
            <div className="plan-problem-icon">🧩</div>
            <h3>資訊散落、看了還是霧煞煞</h3>
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
            <div className="plan-problem-icon">🤯</div>
            <h3>怕預算失控、怕被綁約</h3>
            <p>
              找設計公司擔心費用太高，
              找不熟悉的接案者又怕中途加價或人突然消失。
            </p>
          </div>
        </div>
      </div>

      {/* 區塊 3：有官網會帶來什麼改變 */}
      <div className="plan-band plan-benefits">
        <h2 className="plan-section-title">有一個官網，實際會帶來什麼改變？</h2>
        <p className="plan-section-desc">
          官網不是要取代平台，而是幫你的民宿多一個穩定、可靠的門面。
        </p>

        <p className="plan-highlight">
          <strong>一個乾淨的官網，往往勝過十篇零散的貼文。</strong>
        </p>

        <div className="plan-benefit-grid">
          <div className="plan-benefit-card">
            <h3>建立第一層信任感</h3>
            <p>
              當旅客搜尋民宿名稱時，
              看見的是有資訊、有照片、有故事的官網，
              而不是陌生網站或空空的搜尋結果。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>讓旅客快速了解、好下決定</h3>
            <p>
              房型、價格、設備、早餐、交通方式、常見問題，
              一次清楚列好，減少旅客反覆私訊詢問。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>搭配平台使用，而不是對抗平台</h3>
            <p>
              我們不鼓勵完全脫離 OTA，
              而是用官網先建立好印象，
              再讓旅客選擇最方便的訂房方式。
            </p>
          </div>
          <div className="plan-benefit-card">
            <h3>為之後的品牌發展留位置</h3>
            <p>
              未來如果有活動、合作方案、社群內容，
              都能從官網延伸出去，不會被單一平台綁住。
            </p>
          </div>
        </div>
      </div>

      {/* 區塊 4：官網示意（假 UI 片段） */}
      <div className="plan-band plan-demo-band">
        <h2 className="plan-section-title">網站大概會長什麼樣子？（示意）</h2>
        <p className="plan-section-desc">
          下面不是實際作品，而是「我們會替民宿做成的樣子」示意圖。
          真正合作時，我們會依照每一間民宿的風格重新調整。
        </p>

        <div className="plan-demo-grid">
          <div className="plan-demo-card">
            <div className="plan-demo-header">海邊民宿 · 首頁 Hero 示意</div>
            <div className="plan-demo-hero-block">
              <div className="plan-demo-hero-text">
                <div className="plan-demo-hero-title">住進海邊的一小段日常。</div>
                <div className="plan-demo-hero-sub">
                  一句簡短的民宿介紹、搭配主要照片與「查看房型」按鈕，
                  讓旅客一眼就看見你的特色。
                </div>
                <div className="plan-demo-hero-buttons">
                  <span className="plan-demo-btn-primary">查看房型</span>
                  <span className="plan-demo-btn-secondary">加 LINE 詢問</span>
                </div>
              </div>
              <div className="plan-demo-hero-image" />
            </div>
          </div>

          <div className="plan-demo-card">
            <div className="plan-demo-header">房型與常見問題示意</div>
            <div className="plan-demo-rooms">
              <div className="plan-demo-room-card">
                <div className="plan-demo-room-img" />
                <div className="plan-demo-room-title">海景雙人房</div>
                <div className="plan-demo-room-meta">含早餐 · 可加床</div>
              </div>
              <div className="plan-demo-room-card">
                <div className="plan-demo-room-img" />
                <div className="plan-demo-room-title">家庭四人房</div>
                <div className="plan-demo-room-meta">適合親子 · 近市區</div>
              </div>
            </div>
            <div className="plan-demo-faq">
              <div className="plan-demo-faq-item" />
              <div className="plan-demo-faq-item" />
              <div className="plan-demo-faq-item" />
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 5：方案區（商品化） */}
      <div className="plan-band plan-plans">
        <h2 className="plan-section-title">我們目前規劃的幾種做法</h2>
        <p className="plan-section-desc">
          費用會依照實際需求調整，這裡只是大方向，讓你有一個心理準備。
        </p>

        <div className="plan-plans-grid">
          <div className="plan-plan-card">
            <div className="plan-plan-tag">起步方案</div>
            <h3>基礎形象官網</h3>
            <p className="plan-plan-desc">
              適合剛起步、預算有限，但希望有一個乾淨、正式門面的民宿。
            </p>
            <ul className="plan-plan-list">
              <li>首頁＋房型簡介＋聯絡方式</li>
              <li>套用模板＋基礎客製化</li>
              <li>手機版優化</li>
            </ul>
          </div>

          <div className="plan-plan-card plan-plan-card-highlight">
            <div className="plan-plan-tag plan-plan-tag-primary">常見選擇</div>
            <h3>完整介紹版</h3>
            <p className="plan-plan-desc">
              適合已經穩定營運，希望更完整呈現空間故事與房型資訊的民宿。
            </p>
            <ul className="plan-plan-list">
              <li>首頁＋房型頁＋關於我們＋交通資訊</li>
              <li>協助整理文字與照片內容</li>
              <li>基礎 SEO 與分析工具安裝</li>
            </ul>
          </div>

          <div className="plan-plan-card">
            <div className="plan-plan-tag">進階選擇</div>
            <h3>品牌強化版</h3>
            <p className="plan-plan-desc">
              適合希望建立更鮮明形象、未來可能搭配活動或合作專案的民宿。
            </p>
            <ul className="plan-plan-list">
              <li>加強視覺風格與排版一致性</li>
              <li>預留活動／消息區塊</li>
              <li>依狀況客製更多段落與頁面</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 中段 CTA：免費診斷 */}
      <div className="plan-band plan-mid-cta">
        <h2 className="plan-section-title">還不確定自己適不適合做官網？</h2>
        <p className="plan-section-desc">
          你可以先把粉專、平台頁面或現有網站丟給我們。
          我們會用白話做一份「民宿網路門面診斷」，不收費，也不會強迫你立刻做決定。
        </p>
        <div className="plan-cta-actions">
          <Link to="/#contact" className="btn-primary">
            免費幫我看一下我的情況
          </Link>
          <Link to="/about" className="btn-secondary">
            先了解 BitShield 的背景
          </Link>
        </div>
      </div>

      {/* 區塊 6：BitShield 的做法（流程） */}
      <div className="plan-band plan-solution">
        <div className="plan-solution-grid">
          <div className="plan-solution-main">
            <h2 className="plan-section-title">BitShield 會怎麼陪你一起做這件事？</h2>
            <p className="plan-section-desc plan-solution-desc">
              我們不是要把你推向很複雜的系統，
              而是一步一步替你把「民宿的故事」整理成一個好進得去的門口。
            </p>

            <ol className="plan-steps-list">
              <li>
                <span className="plan-steps-num">01</span>
                <div>
                  <div className="plan-steps-title">一起聊聊你希望被怎麼看見</div>
                  <div className="plan-steps-text">
                    你可以用很生活的方式跟我們描述：
                    希望吸引什麼樣的旅客、你喜歡什麼樣的感覺，
                    我們會用這些作為設計的方向。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">02</span>
                <div>
                  <div className="plan-steps-title">選擇模板，再針對民宿客製</div>
                  <div className="plan-steps-text">
                    透過套用模板、再進行客製化排版，
                    避免把預算花在從零開發，
                    把重點放在「旅客看不看得懂」、「好不好用」。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">03</span>
                <div>
                  <div className="plan-steps-title">整理照片與文字，變成清楚的版面</div>
                  <div className="plan-steps-text">
                    你提供現有照片與資訊，
                    我們協助整理成房型區塊、環境介紹、常見問題，
                    讓旅客不需要再到處翻找資訊。
                  </div>
                </div>
              </li>
              <li>
                <span className="plan-steps-num">04</span>
                <div>
                  <div className="plan-steps-title">說清楚費用與後續修改方式</div>
                  <div className="plan-steps-text">
                    專案開始前會先確認預算與內容，
                    上線後若有修改需求，也會有明確、固定的收費規則，
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
                我們不是要把你推向很大的案子，
                而是希望替民宿做好第一個穩定的官方門面，
                讓旅客在搜尋你的名字時，看見一個配得上你用心程度的網站。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 區塊 7：簡單比較 — 一般做法 vs BitShield */}
      <div className="plan-band plan-compare">
        <h2 className="plan-section-title">跟一般做網站的方式，有什麼不一樣？</h2>
        <p className="plan-section-desc">
          做官網有很多選擇，我們只是其中一種方式。
          這裡簡單說明我們跟常見做法的差別。
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
              <li>一開始就談清楚預算範圍與內容，不怕中途被加價。</li>
              <li>用民宿聽得懂的語言說明，不硬塞技術名詞。</li>
              <li>上線後若有修改，有明確、固定、公開的收費方式。</li>
              <li>我們在澎湖讀書與生活，真正理解在地民宿需要什麼。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 區塊 8：最終 CTA */}
      <div className="plan-band plan-cta-band">
        <div className="plan-cta-shell">
          <div className="plan-cta-main">
            <p className="plan-cta-headline">
              如果你覺得自己的民宿，值得一個更好的官網，
              我們很願意先幫你看一看目前的情況。
            </p>
            <p className="plan-cta-sub">
              你可以先把粉專、平台頁面或現有網站傳給我們。
              我們會用白話做一份簡單的「民宿網路門面診斷」，
              再一起討論「要不要做」、「要做到什麼程度」，而不是一開始就談最大的方案。
            </p>
          </div>
          <div className="plan-cta-actions">
            <Link to="/#contact" className="btn-primary">
              傳目前的資料給 BitShield 看看
            </Link>
            <Link to="/about" className="btn-secondary">
              再多了解我們一點
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
