import Navbar from "./components/layout/navbar/navbar";
import Hero from "./components/sections/hero/hero";
import About from "./components/sections/About/about";
import Skills from "./components/sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;