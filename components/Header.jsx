import Image from "next/image";
import Link from "next/link";
import navStyles from "./styles/Home.module.css";

function Header() {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <Link href="/" aria-label="Dera Okeke home">
            <span className={navStyles.svgContainer}>
              <Image
                src="/icons/logo.svg"
                alt="Dera's Logo"
                width={67}
                height={35}
              />
            </span>
          </Link>
          <div className={navStyles.navLinks}>
            <ul className={navStyles.navMain}>
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
                  <span>03.</span> Contacts
                </a>
              </li>
              <li aria-label="Toggle Dark mode">
                <span className={navStyles.svgContainer}>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
