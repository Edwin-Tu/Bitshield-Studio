import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/bitshield.png";

function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY <= 5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hero ${isTop ? "hero--expanded" : "hero--compact"}`}>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="網站Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/aboutus">關於我們</Link></li>
          <li><Link to="/services">服務內容</Link></li>
          <li><Link to="/contact">聯絡我們</Link></li>
          <li><a href="#learning">學習</a></li>
          <li><Link to="/login">登入</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
