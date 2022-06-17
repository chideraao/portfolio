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

  var stopAnimation = function () {
    setTimeout(function () {
      isAnimating = false;
    }, 300);
  };

  var bottomIsReached = function (elem) {
    var rect = elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function (elem) {
    var rect = elem[0].getBoundingClientRect();
    return rect.top >= 0;
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
