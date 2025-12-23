import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Demo from "./components/Demo";
import Team from "./components/Team";
import Contact from "./components/Contact";
import About from "./components/About";
import Plan from "./components/plan";
import Login from "./components/Login";

// 首頁（Home）內容
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // 例如 "#services" -> "services"
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 沒有 hash，就回到頁首
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
      <Plan/>
    </main>
  );
}

function App() {
  // 將 Google 回傳的 id_token 解析並存到 localStorage
  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id_token = params.get('id_token');
    if (id_token) {
      const user = parseJwt(id_token);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      // 移除 url 上的參數，不要留 token
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
