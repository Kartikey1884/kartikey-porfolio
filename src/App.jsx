import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;