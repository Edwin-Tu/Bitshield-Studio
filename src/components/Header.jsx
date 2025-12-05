import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const onAbout = location.pathname === "/about";

  // 讓「洽談合作」按鈕在 /about 時也能跳回首頁 contact
  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <header>
      <div className="nav">
        {/* 左側 Logo + 品牌文字，整塊可點回首頁 */}
        <Link to="/" className="nav-brand-link">
          <div className="nav-left">
            <img src={logo} alt="BitShield Logo" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">BitShield</span>
              <span className="nav-brand-tagline">民宿網站製作</span>
            </div>
          </div>
        </Link>

        <div className="nav-right">
          <nav className="nav-links">
            {onHome ? (
              <>
                <a href="#services" className="nav-link">
                  服務內容
                </a>
                <a href="#demo" className="nav-link">
                  網站範例
                </a>
                <Link
                  to="/about"
                  className={`nav-link ${onAbout ? "nav-link-active" : ""}`}
                >
                  關於我們
                </Link>
                <a href="#contact" className="nav-link">
                  聯絡我們
                </a>
              </>
            ) : (
              <>
                {/* 在 /about 等頁面時，改用 Link 帶 hash 回首頁 */}
                <Link to="/#services" className="nav-link">
                  服務內容
                </Link>
                <Link to="/#demo" className="nav-link">
                  網站範例
                </Link>
                <Link
                  to="/about"
                  className={`nav-link ${onAbout ? "nav-link-active" : ""}`}
                >
                  關於我們
                </Link>
                <Link to="/#contact" className="nav-link">
                  聯絡我們
                </Link>
              </>
            )}
          </nav>

          {/* 右側 CTA */}
          <Link to={contactHref} className="nav-cta">
            洽談合作
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
