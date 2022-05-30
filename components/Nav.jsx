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
            <span>
              <Image
                src="/logo.svg"
                alt="Dera's Logo"
                width={100}
                height={25}
              />
            </span>
          </Link>
          <div className={navStyles.navLinks}>
            <ul className={navStyles.navMain}>
              <a href="#about">
                <li>
                  <span>01.</span> About
                </li>
              </a>
              <a href="#projects">
                <li>
                  {" "}
                  <span>02.</span>Projects
                </li>
              </a>
              <a href="#contacts">
                <li>
                  {" "}
                  <span>03.</span> Contacts
                </li>
              </a>
            </ul>
            <div className="night-mode">
              <span>
                <Image
                  src="/night.svg"
                  alt="night mode switch"
                  width={21}
                  height={21}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
