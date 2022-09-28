import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "./hooks/UseMediaQuery";
import { StyledHeader } from "./styles/Header.styled";
import { Menu, Moon } from "./icons";
import MenuSidebar from "./MenuSidebar";
import Scrollbar from "smooth-scrollbar";

function Header({ theme, setTheme }) {
  const [menuClick, setMenuClick] = useState(false);
  const dummyRef = useRef();
  const [scrollbar, setScrollbar] = useState(dummyRef.current);
  let isMobile = useMediaQuery("(max-width: 870px)");

  const changeTheme = () => {
    document.body.classList.add("preload");

    const themes = localStorage.getItem("theme");
    if (themes === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    setTimeout(() => {
      document.body.classList.remove("preload");
    }, 1000);
  };

  useEffect(() => {
    setScrollbar(
      Scrollbar.init(document.querySelector(".main"), {
        damping: 0.06,
      })
    );

    scrollbar?.addListener(() => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 70;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("fadeInUp");
        }
      });
    });
  }, [scrollbar]);

  const handleClick = (anchor) => {
    scrollbar.scrollIntoView(document.querySelector(anchor), {
      offsetLeft: 34,
      offsetBottom: 12,
      alignToTop: false,
      onlyScrollIfNeeded: true,
    });
  };

  return (
    <StyledHeader>
      <nav id="nav">
        <div className="navbar container" ref={dummyRef}>
          {isMobile && (
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
                <Menu menuClick={menuClick} />
              </div>
              {menuClick ? (
                <MenuSidebar
                  theme={theme}
                  setTheme={setTheme}
                  menuClick={menuClick}
                  setMenuClick={setMenuClick}
                />
              ) : (
                ""
              )}
            </>
          )}

          {!isMobile && (
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
                    <a
                      className="from-top"
                      href="#about"
                      aria-label="Go to about section"
                      onClick={() => handleClick("#about")}
                    >
                      <span>01.</span> About
                    </a>
                  </li>
                  <li>
                    <a
                      className="from-top"
                      href="#projects"
                      aria-label="Go to projects section"
                      onClick={() => handleClick("#projects")}
                    >
                      {" "}
                      <span>02.</span>Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="from-top"
                      href="#contact"
                      aria-label="Go to contact section"
                      onClick={() => handleClick("#contact")}
                    >
                      {" "}
                      <span>03.</span> Contact
                    </a>
                  </li>
                  <li
                    aria-label={`Change to ${theme} mode`}
                    onClick={changeTheme}
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") return changeTheme();
                    }}
                  >
                    <span className="navbar-svg from-top">
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
