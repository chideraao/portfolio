import { useRef, useEffect, useState, useCallback } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

function Main({ theme, setTheme }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);

  const scrollToSection = () => {
    let next = pageRefs.current[1];
    next.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="main" style={{ position: "relative" }}>
      <Hero theme={theme} setTheme={setTheme} pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
      {active <= 2 ? (
        <div className="mouse_scroll" onClick={scrollToSection}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll_arrows"></span>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default Main;
