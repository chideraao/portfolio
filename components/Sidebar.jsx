import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { ArrowBack, Github, Open, Web } from "./icons";
import { SidebarStyled } from "./styles/Projects.styled";
import { SidebarContext } from "./utils/Context";

function Sidebar({ project }) {
  const [show, setShow] = useContext(SidebarContext);
  const sidebarRef = useRef();

  const handleClick = () => {
    setShow(false);
  };

  useEffect(() => {
    sidebarRef.current.focus();

    /** handle click outside sidebar */
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    const handleEscKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setShow(false);
      }
    };

    // Bind the event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setShow]);

  return (
    <>
      {show && (
        <>
          <div className="overlay"></div>
          <SidebarStyled
            className={show ? "wrapper fadeInLeft active" : "wrapper"}
            ref={sidebarRef}
            tabIndex="0"
            aria-label={`View ${project.title} description`}
          >
            <div className="sidebar-content">
              <div className="sidebar-header">
                <span
                  onClick={handleClick}
                  aria-label="Go back to projects"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") return handleClick();
                  }}
                >
                  <ArrowBack />
                </span>
                <h3
                  onClick={handleClick}
                  aria-label="Go back to projects"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") return handleClick();
                  }}
                >
                  Back to Home
                </h3>
              </div>
              <div className="sidebar-main">
                <div className="sidebar-heading">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>

                <div className="image-container">
                  <span>
                    <Image
                      src={project.gifUrl || project.imageUrl}
                      alt={`${project.title} image`}
                      layout="fill"
                      unoptimized={true}
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
                    {project.technologies.map((tech, index) => {
                      return <span key={index}>{tech}</span>;
                    })}
                  </p>
                  <h2>
                    <Web /> Website
                  </h2>
                  <a
                    href={project.link}
                    target="_blank"
                    aria-label={`Go to ${project.title}'s website`}
                    rel="noreferrer"
                  >
                    {project.link}
                  </a>
                  <h2>
                    <Github /> Github
                  </h2>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Go to ${project.title}'s Github`}
                  >
                    {project.github}
                  </a>
                </div>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              className="open-project"
              aria-label={`Go to ${project.title}'s website`}
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
