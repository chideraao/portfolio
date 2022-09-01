import Image from "next/image";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { StyledProjects } from "./styles/Projects.styled";
import { IndexContext, SidebarContext } from "./utils/Context";
import ProjectsData from "./utils/projectsData";

function Projects({ pageRefs }) {
  const [show, setShow] = useContext(SidebarContext);
  const [index, setIndex] = useContext(IndexContext);

  const handleClick = (id) => {
    setShow(true);
    setIndex(id);
  };

  return (
    <>
      <StyledProjects
        id="projects"
        className="fullpage"
        ref={(el) => pageRefs.current.push(el)}
      >
        <div className="container">
          <div className="projects-content">
            <div className="projects-heading">
              <h2>Some personal projects</h2>
            </div>
            <div className="projects-main">
              {ProjectsData.map((project, idx) => {
                return (
                  <div
                    key={idx}
                    className="project-item"
                    tabIndex="0"
                    onClick={() => handleClick(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") return handleClick(idx);
                    }}
                  >
                    <div className="image-container">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} project preview`}
                        layout="fill"
                        unoptimized={true}
                      />
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      {project.technologies && (
                        <p className="">
                          {project.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </StyledProjects>
    </>
  );
}

export default Projects;
