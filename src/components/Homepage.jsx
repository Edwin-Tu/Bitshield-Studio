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