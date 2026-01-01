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

  // MVP：哪些入口「已完成」？未完成就 disabled（當代辦/規劃用）
  // 你之後只要把 false 改成 true，就會自動變可點。
  const FEATURES = {
    dashboard: false, // /dashboard
    project: false, // /project
    tickets: false, // /tickets
  };

  // 點外面關閉 dropdown
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

  // loading：占位，避免版面跳動
  if (loading) {
    return (
      <button className="nav-cta nav-cta-user" type="button" disabled>
        <span className="nav-user-name">...</span>
      </button>
    );
  }

  // 未登入：顯示 [登入]
  if (!user) {
    return (
      <button className="nav-cta" type="button" onClick={loginRedirect}>
        登入
      </button>
    );
  }

  // 已登入：顯示使用者頭像＋名稱（與登入按鈕外觀對齊）
  const displayName = user.name || user.email || "使用者";
  const avatarSrc =
    user.picture || user.avatar || "https://www.gravatar.com/avatar/?d=mp";

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
          {/* MVP 行為入口（未完成先 disabled，顯示「即將推出」） */}
          <MenuLinkItem
            to="/dashboard"
            enabled={FEATURES.dashboard}
            onNavigate={() => setOpen(false)}
          >
            <Link to="/profile" className="nav-link">
              個人檔案
            </Link>
          </MenuLinkItem>

          <MenuLinkItem
            to="/project"
            enabled={FEATURES.project}
            onNavigate={() => setOpen(false)}
          >
            專案進度
          </MenuLinkItem>

          <MenuLinkItem
            to="/tickets"
            enabled={FEATURES.tickets}
            onNavigate={() => setOpen(false)}
          >
            問題回報
          </MenuLinkItem>

          <div className="nav-user-sep" />

          {/* 登出 */}
          <button
            type="button"
            className="nav-user-item nav-logout"
            onClick={async () => {
              await logout();
              setOpen(false);
              // 你的政策：登出後回首頁
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

/**
 * 下拉選單的入口項目
 * enabled=false 時顯示「即將推出」，且不可點（方案 B）
 */
function MenuLinkItem({ to, enabled, onNavigate, children }) {
  if (!enabled) {
    return (
      <button type="button" className="nav-user-item is-disabled" disabled>
        <span>{children}</span>
        <span className="nav-soon">即將推出</span>
      </button>
    );
  }

  return (
    <Link
      to={to}
      className="nav-user-item"
      onClick={() => {
        onNavigate?.();
      }}
    >
      {children}
    </Link>
  );
}
