import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowBack, Github, Open, Web } from "./icons";
import { SidebarStyled } from "./styles/Projects.styled";

function Sidebar() {
  const [show, setShow] = useState(true);
  const sidebarRef = useRef();

  useEffect(() => {
    /** handle click outside sidebar */
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    // Bind the event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {show && (
        <>
          <div className="overlay"></div>
          <SidebarStyled
            className={show ? "wrapper active" : "wrapper"}
            ref={sidebarRef}
          >
            <div className="sidebar-content">
              <div className="sidebar-header">
                <ArrowBack />
                <h3>Back to Projects</h3>
              </div>
              <div className="sidebar-main">
                <div className="sidebar-heading">
                  <h1>Basecoin</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum necessitatibus corporis excepturi magnam sit sint.
                  </p>
                </div>

                <div className="image-container">
                  <span>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/dhera-gram.appspot.com/o/Screen%20Recording%202022-07-30%20at%2013.46.38.gif?alt=media&token=eef1ceeb-6776-4c08-8efa-3159166e1e9c"
                      alt="project-image"
                      layout="fill"
                    />
                  </span>
                </div>
                <div className="sidebar-desc">
                  <h2>About</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae, iure tenetur pariatur cumque incidunt tempora nisi
                    enim eius non totam perferendis, neque sit deserunt. Dicta
                    quidem perspiciatis, voluptatibus quisquam sint natus at?
                    Eligendi animi molestias quas quam neque possimus et,
                    doloremque, delectus mollitia quibusdam amet temporibus
                    perferendis porro laboriosam? Ipsam!
                  </p>
                  <h2>Technologies</h2>
                  <p>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Chart.js</span>
                    <span>Firebase</span>
                  </p>
                  <h2>
                    <Web /> Website
                  </h2>
                  <a
                    href="https://friendly-ramanujan-2f68e3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://friendly-ramanujan-2f68e3.netlify.app/
                  </a>
                  <h2>
                    <Github /> Github
                  </h2>
                  <a
                    href="https://github.com/chideraao/coinbase-y"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/chideraao/coinbase-y
                  </a>
                </div>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href=""
              className="open-project"
            >
              Open Project
              <Open />
            </a>
          </SidebarStyled>
        </>
      )}
    </>
  );
}

export default Sidebar;
