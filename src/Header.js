import React from 'react';
import logo from './bitshield.png'
function Header() {
  return (
    <header className="hero">
      <img src= {logo} alt="網站Logo" className="logo" />
      <div className="hero-text">
        <h1>量身打造品牌網站</h1>
        <p>專屬設計 · 科技視覺 · 業界效能兼具<br />三秒抓住目標客戶眼球！</p>
        <a href="#contact" className="cta-btn">立即聯絡我們</a>
      </div>
    </header>
  );
}

export default Header;
