import gsap, { Power3, Power4 } from "gsap";
import { useRef, useEffect, useState, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import { useMediaQuery } from "./hooks/UseMediaQuery";
import { Codepen, Dev, Github, LinkedIn, Twitter } from "./icons";
import Loading from "./Loading";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import { IndexContext, SidebarContext } from "./utils/Context";
import ProjectsData from "./utils/projectsData";

function Main({ theme, setTheme }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [show, setShow] = useContext(SidebarContext);
  const [index, setIndex] = useContext(IndexContext);
  let isMobile = useMediaQuery("(max-width: 470px)");

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
        ref={(el) => (body = el)}
        style={
          show
            ? { pointerEvents: "none", position: "relative" }
            : { position: "relative" }
        }
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
      {show ? <Sidebar project={ProjectsData[index]} /> : ""}
      {isMobile ? (
        <div className="socials fadeInBottom">
          <a
            href="https://github.com/chideraao"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's Github"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/dera-okeke-295718178/"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's LinkedIn"
          >
            <LinkedIn />
          </a>
          <a
            href="https://dev.to/chideraao"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's Dev.to"
          >
            <Dev />
          </a>
          <a
            href="https://codepen.io/chideraao"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's Codepen"
          >
            <Codepen />
          </a>
          <a
            href="https://twitter.com/Chideraa_O"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's Twitter"
          >
            <Twitter />
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Main;
