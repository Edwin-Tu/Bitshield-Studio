import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">BitShield 團隊背景</h2>
      <p className="section-desc">
        我們是一群就讀於澎湖科技大學資訊工程系的學生，
        長期在澎湖生活、學習，也在這裡觀察到許多民宿和在地店家，
        需要更好的網路呈現方式。
      </p>

      <div className="card">
        <p>
          我們不是大型公司，也沒有誇張的技術包裝，
          但我們擅長用踏實的方法，替店家打造好用、看得見成果的網站。
        </p>

        <p style={{ marginTop: "1rem" }}>
          在課業以外，我們也經營自己的小專案、店面與合作案，累積了：
        </p>
        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
          <li>基礎的網站前端能力</li>
          <li>與店家溝通的實務經驗</li>
          <li>對在地產業的理解</li>
          <li>對「什麼樣的網站對民宿真正有幫助」的感受</li>
        </ul>

        <p style={{ marginTop: "1rem" }}>
          因為我們本身就是生活在澎湖的人，
          我們知道旅客在搜尋民宿時會看哪些資訊，
          也知道民宿主最怕的是：網站很貴、太複雜、無法維護、又沒人協助。
        </p>

        <p style={{ marginTop: "1rem" }}>
          所以，我們選擇提供一套簡單、明確、固定費用、不會亂加價的網站建置方案：
        </p>
        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
          <li>使用模板製作，價格透明</li>
          <li>內容由民宿提供，我們協助排版上稿</li>
          <li>上線後若要修改，也有簡單明確的費用</li>
          <li>不需要昂貴後端、不需要持續付主機費</li>
        </ul>

        <p style={{ marginTop: "1rem" }}>
          我們能做到的事情很實在：
          讓每一家民宿都有一個乾淨、可信、好閱讀的官方網站，
          幫助你在網路上被旅客看見。
        </p>

        <p style={{ marginTop: "1rem" }}>
          我們還在成長，但我們會努力、會負責、會把每一個合作當成真正的案子來完成。
          對我們來說，這不只是賺取收入，而是希望用我們現階段能做到的能力，
          替澎湖的店家做一點實質的幫助。
        </p>

        {/* 從關於我們連回首頁各區塊的按鈕 */}
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
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
    </section>
  );
};

export default About;
