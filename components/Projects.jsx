import Image from "next/image";
import React from "react";
import { StyledProjects } from "./styles/Projects.styled";
import PROJECTS_DATA from "./utils/projectsData";

function Projects({ pageRefs }) {
  return (
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
            {PROJECTS_DATA.map((project, idx) => {
              return (
                <div key={idx} className="project-item">
                  <span className="project-media">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={570}
                      height={400}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

export default Projects;
