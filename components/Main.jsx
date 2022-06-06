import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

function Main({ theme, setTheme }) {
  return (
    <main className="main">
      <Hero theme={theme} setTheme={setTheme} />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
