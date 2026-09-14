import Navbar from "./components/layout/navbar/navbar";
import Hero from "./components/sections/hero/hero";
import About from "./components/sections/About/about";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;