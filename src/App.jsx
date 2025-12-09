import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Demo from "./components/Demo";
import Team from "./components/Team";
import Contact from "./components/Contact";
import About from "./components/About";
<<<<<<< HEAD
import Pricing from "./components/Pricing";   // <<<<<< 新增 Pricing 頁面匯入
=======
import Plan from "./components/plan";
>>>>>>> origin/main

// 首頁（Home）內容
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); 
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
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
      <Plan/>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD

        {/* 新增 Pricing 路由 */}
        <Route path="/pricing" element={<Pricing />} />
=======
        <Route path="/plan" element={<Plan />} />
>>>>>>> origin/main
      </Routes>
    </>
  );
}

export default App;
