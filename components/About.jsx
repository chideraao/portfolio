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
        <div className="about-content">
          <div className="about-main">
            <h2>About Me</h2>
            <p>Hi there, I&apos;m Dera! 👋🏽 </p>
            <p>
              I am a Software Developer specializing in frontend technologies,
              and passionate about building accessible and interactive web
              experiences and visualizations.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div></div>
          <div className="about-main">
            <h3>Engineering</h3>
            <p>
              My goal as a Frontend Developer is to bring ideas to life by
              developing unique user-facing features that enhance the overall
              user experience. I possess outstanding knowledge of the latest
              industry standards, allowing me to deliver fast and reliable
              applications while optimizing performance.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="about-main">
            <h3>Others</h3>
            <p>
              I am constantly learning and working to become a better version of
              myself. Adept at technical writing, I have authored multiple
              articles on frontend practices and data visualization; and
              recently released a Firebase course on Educative, Inc. I love
              teaching concepts and writing API documentation, tutorials, and
              how-to guides.
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
