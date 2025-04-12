import { useRef, useEffect, useState, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Articles from "./Articles";
import { useMediaQuery } from "./hooks/UseMediaQuery";
import { Codepen, Dev, Github, LinkedIn, Twitter } from "./icons";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import { IndexContext, SidebarContext } from "./utils/Context";
import ProjectsData from "./utils/projectsData";

function Main({ theme, setTheme, posts }) {
  const pageRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [show, setShow] = useContext(SidebarContext);
  const [index, setIndex] = useContext(IndexContext);
  let isMobile = useMediaQuery("(max-width: 470px)");

  let body = useRef(null);

  return (
    <>
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
        <Articles pageRefs={pageRefs} posts={posts} />
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
            href="https://www.linkedin.com/in/dera-okeke/"
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
          {/* <a
            href="https://twitter.com/Chideraa_O"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Dera Okeke's Twitter"
          >
            <Twitter />
          </a> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Main;
