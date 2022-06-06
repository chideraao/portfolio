import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "./hooks/UseMediaQuery";
import { StyledHeader } from "./styles/Header.styled";
import { Menu, Moon } from "./icons";

function Header({ theme, setTheme }) {
  const [menuClick, setMenuClick] = useState(false);
  let isPageSmall = useMediaQuery("(max-width: 870px)");

  const changeTheme = () => {
    document.body.classList.add("preload");

    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    setTimeout(() => {
      document.body.classList.remove("preload");
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      changeTheme();
    }
  };

  return (
    <StyledHeader>
      <nav id="nav">
        <div className="navbar container">
          {isPageSmall && (
            <>
              <Link href="/" aria-label="Dera Okeke home">
                <span className="navbar-svg">
                  <Image
                    src={
                      theme === "dark"
                        ? "/icons/logo.svg"
                        : "/icons/logo-light.svg"
                    }
                    alt="Dera's Logo"
                    width={67}
                    height={35}
                  />
                </span>
              </Link>
              <div
                className="navbar-menu"
                onClick={() => setMenuClick(!menuClick)}
                aria-label="Open menu"
                tabIndex="0"
              >
                <Menu />
              </div>
            </>
          )}

          {!isPageSmall && (
            <>
              <Link href="/" aria-label="Dera Okeke home" tabIndex="0">
                <span className="navbar-svg" tabIndex="0" aria-label="Homepage">
                  <Image
                    src={
                      theme === "dark"
                        ? "/icons/logo.svg"
                        : "/icons/logo-light.svg"
                    }
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
                    <a href="#contact" aria-label="Go to contact section">
                      {" "}
                      <span>03.</span> Contact
                    </a>
                  </li>
                  <li
                    aria-label={`Change to ${theme} mode`}
                    onClick={changeTheme}
                    tabIndex="0"
                    onKeyPress={handleKeyPress}
                  >
                    <span className="navbar-svg">
                      <Moon />
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
