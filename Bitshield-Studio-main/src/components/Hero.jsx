import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div>
        <h1 className="hero-title">為民宿打造安心又好看的官方網站</h1>

        <p className="hero-subtitle">
          我們是一群在澎湖學習與生活的資工學生組成的小團隊，
          專門替民宿打造乾淨、好看、價格透明的官方網站。
          我們了解民宿最需要的不是複雜的系統，
          而是一個能讓旅客快速找到資訊、建立信任感的入口。
          因此，我們提供簡單明確的建置流程、固定費用、清楚的維護方式，
          讓每位民宿主都能輕鬆擁有屬於自己的官方網站。
          踏實、好溝通、做得漂亮、價格不亂加——這就是我們能帶給你的服務。
        </p>

        <div className="hero-buttons">
          <a href="#services" className="btn-primary">了解民宿網站服務</a>
          <a href="#contact" className="btn-secondary">我要討論專案</a>
        </div>

        <p className="hero-tag">
          正在進行與學校合作的產學計畫，持續優化民宿網站體驗與基本安全設定。
        </p>
      </div>

      <div>
        <img src={logo} alt="BitShield 示意圖" />
      </div>
    </section>
  );
};

export default Hero;
