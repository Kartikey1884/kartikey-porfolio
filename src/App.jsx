import { useEffect, useState } from "react";

import Navbar from "./components/layout/navbar/navbar";
import Footer from "./components/layout/Footer/Footer";
import Reveal from "./components/layout/Reveal/Reveal";

import Hero from "./components/sections/hero/hero";
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

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
    <Footer />
    </>
  );
}

export default App;