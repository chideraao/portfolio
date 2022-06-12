import { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

function Main({ theme, setTheme }) {
  const pageRefs = useRef({});
  console.log(pageRefs);

  const scrollToSection = () => {
    // use offsetHeight to get the height of the element
    // use scrollTop to get the current scroll position
    // use scrollIntoView to scroll to the element
  };

  return (
    <main className="main">
      <Hero theme={theme} setTheme={setTheme} pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
      <div className="mouse_scroll" onClick={scrollToSection}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll_arrows"></span>
        </div>
      </div>
    </main>
  );
}

export default Main;
