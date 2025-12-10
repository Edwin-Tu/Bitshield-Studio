// src/components/LoginButton.tsx
import { useState } from "react";
import { signInWithPopup, User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "../firebase";

type Role = "user" | "admin";

const LoginButton = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      // 1. Google 登入
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setCurrentUser(user);

      // 2. 準備 users/{uid} 這筆文件
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        // 第一次登入：建立文件並給預設角色 user
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: "user", // 預設一般使用者
          createdAt: new Date(),
        });
        setRole("user");
      } else {
        // 已存在：讀取既有角色
        const data = snap.data() as { role?: Role };
        const userRole = data.role ?? "user";
        setRole(userRole);
      }

      console.log("登入成功，角色：", role);
    } catch (err) {
      console.error("Login error", err);
      alert("登入失敗，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    setCurrentUser(null);
    setRole(null);
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>目前登入：{currentUser.email}</p>
          <p>角色：{role ?? "讀取中..."}</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "登入中..." : "使用 Google 登入"}
        </button>
      )}
    </div>
  );
};

export default LoginButton;
