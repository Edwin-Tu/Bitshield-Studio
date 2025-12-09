import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services">
      <h2 className="section-title">我們能幫民宿做什麼</h2>
      <p className="section-desc">
        從版型設計、前端開發到上線教學，都由我們一條龍處理。
        資安部分目前還在進一步學習中，會先協助完成基本安全設定。
      </p>

      <div className="card-grid">
        <article className="card">
          <h3>民宿官方網站設計</h3>
          <p>
            RWD 響應式版面、首頁、房型介紹、相簿、交通地圖與聯絡表單，
            一次幫你規劃好。
          </p>
          <Link to="/pricing">
            了解詳情
          </Link>
        </article>

        <article className="card">
          <h3>網站建置與基本安全</h3>
          <p>
            協助設定網域、憑證（HTTPS）、簡單備份與管理帳號建議，
            為未來進階資安打好基礎。
          </p>
          <a href="#services">未來資安服務規劃</a>
        </article>

        <article className="card">
          <h3>產學合作與在地支持</h3>
          <p>
            配合學校產學計畫，聚焦澎湖等旅宿地區，實際訪談民宿主，
            持續優化網站體驗。
          </p>
          <a href="#about">認識我們的產學計畫</a>
        </article>
      </div>
    </section>
  );
};

export default Services;
