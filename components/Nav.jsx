import Image from "next/image";
import Link from "next/link";
import React from "react";
import navStyles from "../styles/Home.module.css";

function Nav() {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <Link href="/">
            <span className={navStyles.svgContainer}>
              <Image src="/logo.svg" alt="Dera's Logo" width={67} height={35} />
            </span>
          </Link>
          <div className={navStyles.navLinks}>
            <ul className={navStyles.navMain}>
              <li>
                <a href="#about">
                  <span>01.</span> About
                </a>
              </li>
              <li>
                <a href="#projects">
                  {" "}
                  <span>02.</span>Projects
                </a>
              </li>
              <li>
                <a href="#contacts">
                  {" "}
                  <span>03.</span> Contacts
                </a>
              </li>
              <li>
                <span className={navStyles.svgContainer}>
                  <Image
                    src="/night.svg"
                    alt="night mode switch"
                    width={21}
                    height={21}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
