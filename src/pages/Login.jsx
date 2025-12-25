import "../App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">開始合作</h1>

        <p className="login-subtitle">
          使用 Google 帳戶登入後，
          <br />
          即可填寫需求、查看專案進度與後續聯繫。
        </p>

        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          使用 Google 登入
        </button>

        <p className="login-note">
          我們不會取得你的密碼，
          <br />
          僅使用基本帳戶資訊作為合作聯繫用途。
        </p>
      </div>
    </div>
  );
}
