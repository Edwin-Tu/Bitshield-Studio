import React from 'react';
import logo from './bitshield.png';

function Header() {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="網站Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">關於我們</a></li>
          <li><a href="#services">服務內容</a></li>
          <li><a href="#contact">聯絡我們</a></li>
          <li><a herf="#login">登入</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
