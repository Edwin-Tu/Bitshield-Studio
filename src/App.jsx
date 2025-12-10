import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Plan from "./components/plan";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <>
      {/* 上方導覽列 */}
      <Header />

      {/* 這裡先把登入按鈕放在 Header 下方，方便你測試 */}
      <div style={{ padding: "1rem" }}>
        <LoginButton />
      </div>

      {/* 路由區域 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </>
  );
}

export default App;
