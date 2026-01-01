import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { signInWithGoogle, signOutFirebase, onAuthState } from "../firebase";

/**
 * AuthContext.jsx（修正版）
 * 目的：
 * 1) 避免 Context 預設為 null，導致 TS/IDE 推斷 useAuth() 可能為 null
 * 2) useAuth() 強制保證回傳「一定有值」，若未被 AuthProvider 包住就直接丟錯（方便除錯）
 */

// 後端 API 位址（優先讀環境變數，否則用本機）
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// 不用 createContext(null)，改用 undefined，並由 useAuth() 做防呆
const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // 目前登入使用者
  const [loading, setLoading] = useState(true); // 是否正在確認登入狀態

  // 使用 Firebase Auth 的 onAuthStateChanged 監聽登入狀態
  useEffect(() => {
    const unsub = onAuthState((fbUser) => {
      if (fbUser) {
        setUser({
          uid: fbUser.uid,
          name: fbUser.displayName || "",
          email: fbUser.email || "",
          picture: fbUser.photoURL || "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // 登入：使用 Firebase Google popup（或可改成 redirect）
  const loginRedirect = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Firebase signIn error', err);
    }
  };

  const logout = async () => {
    try {
      await signOutFirebase();
    } catch (err) {
      console.error('Firebase signOut error', err);
    } finally {
      setUser(null);
    }
  };

  // useMemo：避免每次 render 都產生新 object，減少不必要 re-render
  const value = useMemo(
    () => ({ user, loading, loginRedirect, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * useAuth：保證回傳一定有值
 * 若你忘記在最外層包 <AuthProvider>，會直接丟錯，方便快速定位問題
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth 必須在 <AuthProvider> 內使用（請檢查 main.jsx / App 外層包裹）");
  }
  return ctx;
}

export default AuthContext;
