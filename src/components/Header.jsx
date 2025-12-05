import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt="BitShield Logo" />
          <span>BitShield｜民宿網站製作</span>
        </div>

        <nav className="nav-links">
          {onHome ? (
            <>
              <a href="#services">服務內容</a>
              <a href="#demo">網站範例</a>
              <Link to="/about">關於我們</Link>
              <a href="#contact">聯絡我們</a>
            </>
          ) : (
            <>
              {/* 在 /about 等頁面時，改用 Link 帶 hash 回首頁 */}
              <Link to="/#services">服務內容</Link>
              <Link to="/#demo">網站範例</Link>
              <Link to="/about">關於我們</Link>
              <Link to="/#contact">聯絡我們</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
