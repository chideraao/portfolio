import React from "react";
import { StyledProjects } from "./styles/Projects.styled";

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
          <div className="projects-main"></div>
        </div>
      </div>
    </StyledProjects>
  );
}

export default Projects;
