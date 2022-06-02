import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "./hooks/UseMediaQuery";
import { StyledHeader } from "./styles/Header.styled";

function Header() {
  const [menuClick, setMenuClick] = useState(false);

  let isPageSmall = useMediaQuery("(max-width: 870px)");

  return (
    <StyledHeader>
      <nav id="nav">
        <div className="navbar container">
          {isPageSmall && (
            <>
              <Link href="/" aria-label="Dera Okeke home">
                <span className="navbar-svg">
                  <Image
                    src="/icons/logo.svg"
                    alt="Dera's Logo"
                    width={67}
                    height={35}
                  />
                </span>
              </Link>
              <div
                className="navbar-menu"
                onClick={() => setMenuClick(!menuClick)}
              >
                More
              </div>
            </>
          )}

          {!isPageSmall && (
            <>
              <Link href="/" aria-label="Dera Okeke home">
                <span className="navbar-svg">
                  <Image
                    src="/icons/logo.svg"
                    alt="Dera's Logo"
                    width={67}
                    height={35}
                  />
                </span>
              </Link>
              <div className="navbar-main">
                <ul className="navbar-links">
                  <li>
                    <a href="#about" aria-label="Go to about section">
                      <span>01.</span> About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" aria-label="Go to projects section">
                      {" "}
                      <span>02.</span>Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contacts" aria-label="Go to contacts section">
                      {" "}
                      <span>03.</span> Contact
                    </a>
                  </li>
                  <li aria-label="Toggle Dark mode">
                    <span className="navbar-svg">
                      <Image
                        src="/icons/night.svg"
                        alt="night mode switch"
                        width={21}
                        height={21}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
