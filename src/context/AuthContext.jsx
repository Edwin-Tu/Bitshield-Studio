import React, { createContext, useContext, useEffect, useState } from "react";

// 建立登入狀態的 Context（全站共用）
const AuthContext = createContext(null);

// 後端 API 位址（優先讀環境變數，否則用本機）
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Provider：包住 App，提供 user / loading / login / logout
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);      // 目前登入使用者
  const [loading, setLoading] = useState(true); // 是否正在確認登入狀態

  // App 啟動時向後端查詢「我是不是已登入」
  useEffect(() => {
    let mounted = true; // 防止元件卸載後還 setState

    async function fetchMe() {
      try {
        const res = await fetch(`${API_URL}/auth/me`, {// /auth/me：取得目前登入者（用 cookie/session，所以要 include）
          credentials: "include",
        });

        if (!mounted) return;

        if (res.ok) {
          const data = await res.json();
          setUser(data?.ok && data.user ? data.user : null);// 後端回傳 ok 且有 user → 視為已登入
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);// 任何錯誤都當作未登入
      } finally {
        if (mounted) setLoading(false);// 確認結束 → 關掉 loading
      }
    }

    fetchMe();

    // cleanup：元件卸載時停止更新狀態
    return () => {
      mounted = false;
    };
  }, []);

  // 登入：導向後端 Google OAuth
  const loginRedirect = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  // 登出：呼叫後端登出 API，最後清掉前端 user
  const logout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      // 登出失敗也不影響前端清狀態
    } finally {
      setUser(null);
    }
  };

  // 將登入相關資料/方法提供給所有子元件
  return (
    <AuthContext.Provider value={{ user, loading, loginRedirect, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 方便取用 AuthContext 的 Hook
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
