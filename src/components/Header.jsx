import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const onAbout = location.pathname === "/about";
  const onPlan = location.pathname === "/plan";
  const onServices = location.pathname === "/services";

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
            {/* 服務內容：一律導向 /services */}
            <Link
              to="/services"
              className={`nav-link ${onServices ? "nav-link-active" : ""}`}
            >
              服務內容
            </Link>

            {/* 網站範例：在首頁用錨點，其他頁回到首頁再捲動 */}
            {onHome ? (
              <a href="#demo" className="nav-link">
                網站範例
              </a>
            ) : (
              <Link to="/#demo" className="nav-link">
                網站範例
              </Link>
            )}

            {/* 關於我們 */}
            <Link
              to="/about"
              className={`nav-link ${onAbout ? "nav-link-active" : ""}`}
            >
              關於我們
            </Link>

            {/* 計畫專區 */}
            <Link
              to="/plan"
              className={`nav-link ${onPlan ? "nav-link-active" : ""}`}
            >
              計畫專區
            </Link>
          </nav>

          {/* 右側 CTA：仍然導回首頁的聯絡區塊 */}
          {onHome ? (
            <a href="#contact" className="nav-cta">
              洽談合作
            </a>
          ) : (
            <Link to="/#contact" className="nav-cta">
              洽談合作
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
