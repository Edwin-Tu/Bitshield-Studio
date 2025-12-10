/*import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const LoginButton = () => {
  const [email, setEmail] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setEmail(result.user.email);
    } catch (err) {
      console.error(err);
      alert("登入失敗");
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    setEmail(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {email && (
        <span className="nav-link" style={{ opacity: 0.8 }}>
          {email}
        </span>
      )}

      {email ? (
        <button className="nav-cta" onClick={handleLogout}>
          登出
        </button>
      ) : (
        <button className="nav-cta" onClick={handleLogin}>
           登入
        </button>
      )}
    </div>
  );
};

export default LoginButton;
