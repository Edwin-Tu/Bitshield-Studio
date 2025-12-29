import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Plan from "./pages/plan";
import Profile from "./pages/Profile/Profile";
import { useAuth } from "./context/AuthContext";

// 簡單的 Admin 頁（之後可換成真的後台）
function AdminPage({ user }) {
  return (
    <main style={{ padding: 24 }}>
      <h2>Admin</h2>
      <p>已登入：{user?.email}</p>
      <p>角色：{user?.role}</p>
    </main>
  );
}

// 路由保護：未登入導回首頁（符合你的政策）
function RequireAuth({ children }) {
  const { user, loading } = useAuth();

  // 還在向後端確認登入狀態時，先顯示載入
  if (loading) {
    return <div style={{ padding: 24 }}>載入登入狀態中…</div>;
  }

  // 未登入：一律回首頁（不導去 /login）
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Routes>
        {/* 公開頁 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin 頁：需要登入才可進入；未登入回首頁 */}
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminPage user={user} />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
