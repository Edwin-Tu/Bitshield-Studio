import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Plan from "./components/plan";
import Login from "./components/Login";

// 首頁（Home）內容
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Services />
      <Demo />
      <Team />
      <Contact />
      <Plan />
    </main>
  );
}

// 簡單的 Admin 頁（你之後可以換成真的 Dashboard）
function AdminPage({ user }) {
  return (
    <main style={{ padding: 24 }}>
      <h2>Admin</h2>
      <p>已登入：{user?.email}</p>
      <p>角色：{user?.role}</p>
    </main>
  );
}

function App() {
  const [auth, setAuth] = useState({
    loading: true,
    loggedIn: false,
    user: null,
  });

  // 啟動時向後端詢問「我有沒有登入」
  useEffect(() => {
    fetch("http://localhost:4000/api/me", {
      credentials: "include", // 關鍵：讓瀏覽器帶 cookie
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setAuth({ loading: false, loggedIn: true, user: data.user });
        } else {
          setAuth({ loading: false, loggedIn: false, user: null });
        }
      })
      .catch(() => {
        setAuth({ loading: false, loggedIn: false, user: null });
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/services" element={<Services />} />

        {/* Login 頁：放「用 Google 登入」按鈕 */}
        <Route path="/login" element={<Login />} />

        {/* Admin 頁：需要登入，否則導回 /login */}
        <Route
          path="/admin"
          element={
            auth.loading ? (
              <div style={{ padding: 24 }}>載入登入狀態中…</div>
            ) : auth.loggedIn ? (
              <AdminPage user={auth.user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
