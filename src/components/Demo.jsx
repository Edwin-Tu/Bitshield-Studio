const Demo = () => {
  return (
    <section id="demo">
      <h2 className="section-title">我們做過的版型範例</h2>
      <p className="section-desc">
        以下是目前正在製作中的民宿網站示範版型，未來會持續增加不同風格，讓民宿主能先看到成品長怎麼樣。
      </p>

      <div className="demo-grid">
        <div className="demo-item">
          <img
            src="https://placehold.co/600x360?text=Demo+1"
            alt="簡約溫暖風格網站示意圖"
          />
          <h3>簡約溫暖風格</h3>
          <p>適合文青、清新、簡潔的民宿品牌。</p>
        </div>

        <div className="demo-item">
          <img
            src="https://placehold.co/600x360?text=Demo+2"
            alt="島嶼海景風格網站示意圖"
          />
          <h3>島嶼海景風格</h3>
          <p>專為海島旅宿打造：海浪色系、地圖與房型展示。</p>
        </div>

        <div className="demo-item">
          <img
            src="https://placehold.co/600x360?text=Demo+3"
            alt="自然木質風格網站示意圖"
          />
          <h3>自然木質風格</h3>
          <p>柔和大地色系，適合親子與自然系民宿。</p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
