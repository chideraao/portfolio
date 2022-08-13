import { useRef, useEffect, useState, useCallback } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Main({ theme, setTheme }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState(pageRefs?.current[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   const sections = document.querySelectorAll(".fullpage");

  //   // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true.
  //   // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
  //   const scrolling = {
  //     enabled: true,
  //     events: "scroll,wheel,touchmove,pointermove".split(","),
  //     prevent: (e) => e.preventDefault(),
  //     disable() {
  //       if (scrolling.enabled) {
  //         scrolling.enabled = false;
  //         window.addEventListener("scroll", gsap.ticker.tick, {
  //           passive: true,
  //         });
  //         scrolling.events.forEach((e, i) =>
  //           (i ? document : window).addEventListener(e, scrolling.prevent, {
  //             passive: false,
  //           })
  //         );
  //       }
  //     },
  //     enable() {
  //       if (!scrolling.enabled) {
  //         scrolling.enabled = true;
  //         window.removeEventListener("scroll", gsap.ticker.tick);
  //         scrolling.events.forEach((e, i) =>
  //           (i ? document : window).removeEventListener(e, scrolling.prevent)
  //         );
  //       }
  //     },
  //   };

  //   function goToSection(section, anim, i) {
  //     if (scrolling.enabled) {
  //       // skip if a scroll tween is in progress
  //       scrolling.disable();
  //       gsap.to(window, {
  //         scrollTo: { y: section, autoKill: false },
  //         onComplete: scrolling.enable,
  //         duration: 0,
  //       });

  //       anim && anim.restart();
  //     }
  //   }

  //   sections.forEach((section, i) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top bottom-=1",
  //       end: "bottom top+=1",
  //       onEnter: () => goToSection(section),
  //       onEnterBack: () => goToSection(section),
  //     });
  //   });
  // }, []);

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
