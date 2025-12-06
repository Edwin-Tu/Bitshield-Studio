import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const onAbout = location.pathname === "/about";
  const onPlan = location.pathname === "/plan";

  return (
    <header>
      <div className="nav">
        {/* 左側 Logo + 品牌文字 */}
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

                {/* 計畫專區（新的路由） */}
                <Link
                  to="/plan"
                  className={`nav-link ${onPlan ? "nav-link-active" : ""}`}
                >
                  計畫專區
                </Link>
              </>
            ) : (
              <>
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

                {/* 計畫專區在子頁面應該保持路由 */}
                <Link
                  to="/plan"
                  className={`nav-link ${onPlan ? "nav-link-active" : ""}`}
                >
                  計畫專區
                </Link>
              </>
            )}
          </nav>

          {/* 右側 CTA：之後你想換掉也可以 */}
          <Link to="/#contact" className="nav-cta">
            洽談合作
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
