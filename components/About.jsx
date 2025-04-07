import React from "react";
import { StyledAbout } from "./styles/About.styled";

function About({ pageRefs }) {
  return (
    <StyledAbout
      id="about"
      className="fullpage"
      ref={(el) => pageRefs.current.push(el)}
    >
      <div className="container">
        <div className="about-content reveal">
          <div className="about-main">
            <h2>About Me</h2>
            <p>Hi there, I&apos;m Dera! 👋🏽 </p>
            <p>
              I&apos;m a seasoned technical writer and documentation engineer
              specializing in creating technical content for developers,
              including tutorials, courses and documentation.
            </p>
          </div>
        </div>
        <div className="about-content reveal">
          <div></div>
          <div className="about-main">
            <h3>Engineering</h3>
            <p>
              My background as a software engineer gives me a strong foundation
              for understanding and breaking down complex concepts.
            </p>
            <p>
              This also allows me to implement improvements to documentation
              tooling, such as developing linting pipelines and optimizing
              documentation infrastructure to ensure a smoother, more reliable
              user experience.
            </p>
          </div>
        </div>
        <div className="about-content reveal">
          <div className="about-main">
            <h3>Others</h3>
            <p>
              I possess outstanding knowledge of the latest industry standards,
              along with a deep understanding of best practices in software
              development, documentation, and user-centered design.
            </p>
            <p>
              Adept at technical writing, I write straightforward docs,
              tutorials, and developer-focused guides that help people actually
              get things done. I enjoy teaching concepts and writing API
              documentation, tutorials, and how-to guides.
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
