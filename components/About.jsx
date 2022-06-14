import React from "react";
import { SVGFill } from "./icons";
import { StyledAbout } from "./styles/About.styled";

function About({ pageRefs }) {
  return (
    <StyledAbout
      id="about"
      className="fullpage"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      <div className="container">
        <div className="about-content">
          <div className="about-main">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              corporis architecto? Labore, magni hic? Perferendis dignissimos
              autem adipisci alias laborum.
            </p>
          </div>
          <div className="about-svg">
            <SVGFill />
          </div>
        </div>
        <div className="about-content">
          <div className="about-main">
            <h2>Engineering</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              consequuntur distinctio et rerum velit consequatur, quisquam
              placeat doloribus, recusandae eveniet voluptas voluptatibus porro
              eius repudiandae? Nostrum quas hic ab nisi eius quis! Et, soluta
              culpa.
            </p>
          </div>
          <div className="about-svg">
            <SVGFill />
          </div>
        </div>
        <div className="about-content">
          <div className="about-main">
            <h2>Others</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fuga quod, ex obcaecati ut inventore adipisci molestiae libero
              ipsam officiis debitis repudiandae aspernatur optio culpa quos
              eveniet eligendi alias soluta.
            </p>
          </div>
          <div className="about-svg">
            <SVGFill />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
