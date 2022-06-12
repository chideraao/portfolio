import React from "react";
import { StyledAbout } from "./styles/About.styled";

function About({ pageRefs }) {
  return (
    <StyledAbout
      id="about"
      className="fullpage"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      About
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </StyledAbout>
  );
}

export default About;
