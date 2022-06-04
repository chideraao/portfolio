import { Codepen, Dev, Github, LinkedIn, Twitter } from "./icons";
import { StyledHero } from "./styles/Hero.styled";

function Hero() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              aspernatur facere voluptatum recusandae error esse fuga nesciunt,
              dolorum velit sint eveniet nostrum in consequuntur aperiam quidem
              provident ullam commodi tempora.
            </p>
          </div>
        </article>
        <a
          href="mailto:okekechidera97@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="call-to-action"
        >
          Let&apos;s talk. 🤺
        </a>
        <div className="socials">
          <a
            href="https://github.com/chideraao"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/dera-okeke-295718178/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a href="https://dev.to/chideraao" target="_blank" rel="noreferrer">
            <Dev />
          </a>
          <a
            href="https://codepen.io/chideraao"
            target="_blank"
            rel="noreferrer"
          >
            <Codepen />
          </a>
          <a
            href="https://twitter.com/Chideraa_O"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </StyledHero>
  );
}

export default Hero;
