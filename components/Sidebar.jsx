import { useEffect, useRef, useState } from "react";
import { Open } from "./icons";
import { SidebarStyled } from "./styles/Projects.styled";

function Sidebar() {
  const [show, setShow] = useState(true);
  const sidebarRef = useRef();

  useEffect(() => {
    /** handle click outside sidebar */
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {show && (
        <>
          <div className="overlay"></div>
          <SidebarStyled
            className={show ? "wrapper active" : "wrapper"}
            ref={sidebarRef}
          >
            <div className="sidebar-content">Sidebar</div>

            <a href="" className="open-project">
              Open Project
              <Open />
            </a>
          </SidebarStyled>
        </>
      )}
    </>
  );
}

export default Sidebar;
