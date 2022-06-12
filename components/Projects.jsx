import React from "react";
import { StyledProjects } from "./styles/Projects.styled";

function Projects({ pageRefs }) {
  return (
    <StyledProjects
      id="projects"
      className="fullpage"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
    >
      Projects
    </StyledProjects>
  );
}

export default Projects;
