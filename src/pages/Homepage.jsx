import Hero from "../components/Hero";
import Services from "./Services";
import Demo from "./Demo";
import Team from "./Team";
import Contact from "../context/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Demo />
      <Team />
      <Contact />
    </>
  );
}

export default HomePage;
