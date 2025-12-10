import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Plan from "./components/plan";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </>
  );
}

export default App;
