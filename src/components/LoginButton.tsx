import { useState } from "react";
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
    <div>
      {email ? (
        <div>
          <p>目前登入：{email}</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <button onClick={handleLogin}>使用 Google 登入</button>
      )}
    </div>
  );
};

export default LoginButton;
