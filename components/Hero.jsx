import Header from "./Header";
import { Codepen, Dev, Github, LinkedIn, Twitter } from "./icons";
import { StyledHero } from "./styles/Hero.styled";

function Hero({ theme, setTheme }) {
  return (
    <div className="fullpage">
      <Header theme={theme} setTheme={setTheme} />
      <div className="container" id="main">
        <StyledHero>
          <div className="hero-content">
            <article>
              <p id="intro-paragraph">Hi, my name is</p>
              <div className="big-name">
                <h1 className="intro-name" data-text="Dera Okeke">
                  Dera Okeke
                </h1>
              </div>

              <div className="hero-paragraph">
                <p>
                  Frontend-focused software engineer and technical writer
                  building accessible web products with great user experiences.
                  I enjoy teaching concepts and documenting developer guides.
                </p>
              </div>
            </article>
            <a
              href="mailto:okekechidera97@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="call-to-action"
              aria-label="Send Dera Okeke an email"
            >
              Let&apos;s talk. 🤺
            </a>
            <div className="socials">
              <a
                href="https://github.com/chideraao"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to Dera Okeke's Github"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/dera-okeke-295718178/"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to Dera Okeke's LinkedIn"
              >
                <LinkedIn />
              </a>
              <a
                href="https://dev.to/chideraao"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to Dera Okeke's Dev.to"
              >
                <Dev />
              </a>
              <a
                href="https://codepen.io/chideraao"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to Dera Okeke's Codepen"
              >
                <Codepen />
              </a>
              <a
                href="https://twitter.com/Chideraa_O"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to Dera Okeke's Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </StyledHero>
      </div>
    </div>
  );
}

export default Hero;
