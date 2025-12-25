import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";

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
            <NavItem to="/services" active={location.pathname === "/services"}>
              服務內容
            </NavItem>

            {/* 在首頁用錨點，不在首頁用 router link */}
            {onHome ? (
              <a href="#demo" className="nav-link">
                網站範例
              </a>
            ) : (
              <Link to="/#demo" className="nav-link">
                網站範例
              </Link>
            )}

            <NavItem to="/about" active={location.pathname === "/about"}>
              關於我們
            </NavItem>

            <NavItem to="/plan" active={location.pathname === "/plan"}>
              計畫專區
            </NavItem>

            {/* 登入 / 使用者狀態 */}
            <AuthArea />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

function NavItem({ to, active, children }) {
  return (
    <Link to={to} className={`nav-link ${active ? "nav-link-active" : ""}`}>
      {children}
    </Link>
  );
}

function AuthArea() {
  const { user, loading, loginRedirect, logout } = useAuth();
  const [open, setOpen] = useState(false);

  // 讓 dropdown 點外面會關閉
  const wrapRef = useRef(null);
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // loading：用同樣的按鈕樣式占位，避免版面跳動
  if (loading) {
    return (
      <button className="nav-cta nav-cta-user" type="button" disabled>
        <span className="nav-user-name">...</span>
      </button>
    );
  }

  // 未登入：顯示 [登入] CTA
  if (!user) {
    return (
      <button className="nav-cta" type="button" onClick={loginRedirect}>
        登入
      </button>
    );
  }

  // 已登入：按鈕外觀跟 nav-cta 對齊（同尺寸/同質感）
  const displayName = user.name || user.email || "使用者";
  const avatarSrc = user.picture || user.avatar || "https://www.gravatar.com/avatar/?d=mp";

  return (
    <div className="nav-user" ref={wrapRef}>
      <button
        type="button"
        className="nav-cta nav-cta-user"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <img className="nav-avatar" src={avatarSrc} alt={displayName} />
        <span className="nav-user-name" title={displayName}>
          {displayName}
        </span>
      </button>

      {open && (
        <div className="nav-user-menu" role="menu">
          {/* 顯示 email（如果有） */}
          {user.email && <div className="nav-user-item">{user.email}</div>}

          <button
            type="button"
            className="nav-user-item nav-logout"
            onClick={async () => {
              await logout();
              setOpen(false);
              window.location.href = "/";
            }}
          >
            登出
          </button>
        </div>
      )}
    </div>
  );
}
