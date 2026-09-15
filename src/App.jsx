import Navbar from "./components/layout/navbar/navbar";
import Hero from "./components/sections/hero/hero";
import About from "./components/sections/About/about";
import Skills from "./components/sections/Skills/Skills";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;