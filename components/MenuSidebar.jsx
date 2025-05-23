import { Moon } from "./icons";
import { StyledMenu } from "./styles/Header.styled";

function MenuSidebar({ theme, setTheme, menuClick, setMenuClick, posts }) {
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

  return (
    <>
      <div className="overlay"></div>
      <StyledMenu className="wrapper" tabIndex="0" aria-label="Menu sidebar">
        <div
          aria-label={`Change to ${theme} mode`}
          onClick={changeTheme}
          style={{
            paddingBottom: "3rem",
            maxWidth: "2%",
          }}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") return changeTheme();
          }}
        >
          <span className="navbar-svg">
            <Moon />
          </span>
        </div>
        <div className="menu-content">
          <ul className="navbar-links">
            <li onClick={() => setMenuClick(!menuClick)}>
              <a href="#about" aria-label="Go to about section">
                <span>01.</span> About
              </a>
            </li>
            <li onClick={() => setMenuClick(!menuClick)}>
              <a href="#projects" aria-label="Go to projects section">
                {" "}
                <span>02.</span>Projects
              </a>
            </li>
            {posts[0] ? (
              <li onClick={() => setMenuClick(!menuClick)}>
                <a href="#articles" aria-label="Go to articles section">
                  {" "}
                  <span>03.</span> Articles
                </a>
              </li>
            ) : (
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.dhera.dev/"
                  aria-label="Go to Dera's blog"
                >
                  <span>03.</span> Blog
                </a>
              </li>
            )}
            <li onClick={() => setMenuClick(!menuClick)}>
              <a href="#contact" aria-label="Go to contact section">
                {" "}
                <span>04.</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </StyledMenu>
    </>
  );
}

export default MenuSidebar;
