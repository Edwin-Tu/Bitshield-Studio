const Team = () => {
  return (
    <section id="team">
      <h2 className="section-title">團隊介紹</h2>
      <p className="section-desc">我們是一群具有資安背景的學生，專注於網站開發與旅宿數位化。</p>

      <div className="team-grid">
        <div className="team-card">
          <img src="https://placehold.co/200x200?text=Photo" alt="member" />
          <h3>成員 A</h3>
          <p className="team-role">前端開發 / 設計</p>
          <p>負責 UI/UX、React、前端工程架構。</p>
        </div>

        <div className="team-card">
          <img src="https://placehold.co/200x200?text=Photo" alt="member" />
          <h3>成員 B</h3>
          <p className="team-role">網站工程 / 伺服器</p>
          <p>網域設定、網站部署、功能開發。</p>
        </div>

        <div className="team-card">
          <img src="https://placehold.co/200x200?text=Photo" alt="member" />
          <h3>成員 C</h3>
          <p className="team-role">資安學習 / 內容規劃</p>
          <p>協助基本安全設定、協助撰寫網站內容。</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
