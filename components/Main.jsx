import { useRef, useEffect, useState, useCallback } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

function Main({ theme, setTheme }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState(pageRefs?.current[0]);

  const handleScroll = useCallback(() => {
    // setCurrent(pageRefs.current[active]);
    // setActive(current.offsetTop / window.innerHeight);

    // let current = pageRefs.current[0];
    let next = pageRefs.current[0];
    console.log(next.offsetTop / window.innerHeight);

    console.log(next);

    next.scrollIntoView();
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = () => {
    // use offsetHeight to get the height of the element
    // use scrollTop to get the current scroll position
    // use scrollIntoView to scroll to the element
    let current = pageRefs.current[0];
    let next = pageRefs.current[3];
    console.log(next.offsetTop / window.innerHeight);

    console.log(next);

    next.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="main">
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
