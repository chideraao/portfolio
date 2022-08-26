import gsap, { Power3, Power4 } from "gsap";
import { useRef, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Loading from "./Loading";
import Projects from "./Projects";

function Main({ theme, setTheme }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);

  let screen = useRef(null);
  let body = useRef(null);

  // useEffect(() => {
  //   var tl = gsap.timeline();
  //   tl.to(screen, {
  //     duration: 2,
  //     height: "100%",
  //     ease: Power3.easeInOut,
  //   });
  //   tl.to(screen, {
  //     duration: 2,
  //     left: "100%",
  //     ease: Power3.easeInOut,
  //     delay: 0,
  //   });
  //   tl.set(screen, { left: "-100%" });
  //   gsap
  //     .to(body, {
  //       duration: 3,
  //       css: {
  //         opacity: "0.99",
  //         pointerEvents: "auto",
  //         ease: Power4.easeInOut,
  //       },
  //     })
  //     .delay(5.5);
  //   return () => {
  //     gsap.to(body, {
  //       duration: 3,
  //       css: {
  //         opacity: "0",
  //         pointerEvents: "none",
  //       },
  //     });
  //   };
  // }, []);

  return (
    <>
      {/* <div className="load-container">
        <div
          className="load-screen1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fffafc",
          }}
          ref={(el) => (screen = el)}
        >
      <Loading />
      </div>
      </div> */}
      <main
        className="main"
        style={{ position: "relative" }}
        ref={(el) => (body = el)}
      >
        <Hero
          theme={theme}
          setTheme={setTheme}
          pageRefs={pageRefs}
          active={active}
        />
        <About pageRefs={pageRefs} />
        <Projects pageRefs={pageRefs} />
        <Contact pageRefs={pageRefs} />
      </main>
    </>
  );
}

export default Main;
