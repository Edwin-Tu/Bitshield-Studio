// Header.jsx
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import LoginButton from "./LoginButton";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

function handleGoogleLogin() {
  window.location.href = `${apiUrl}/auth/google`;
}

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const onAbout = location.pathname === "/about";
  const onPlan = location.pathname === "/plan";
  const onServices = location.pathname === "/services";
  const onLogin = location.pathname === "/login";
  return (
    <header>
      <div className="nav">
        {/* 左側 Logo */}
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
            <Link
              to="/services"
              className={`nav-link ${onServices ? "nav-link-active" : ""}`}
            >
              服務內容
            </Link>

            {onHome ? (
              <a href="#demo" className="nav-link">
                網站範例
              </a>
            ) : (
              <Link to="/#demo" className="nav-link">
                網站範例
              </Link>
            )}

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
            <Link
              to="/login"
              className={`nav-link ${onLogin ? "nav-link-active" : ""}`}
            >
              登入
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
