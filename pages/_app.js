import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/base/Global.js";
import { themes } from "../components/base/theme.js";
import { SidebarProvider } from "../components/utils/Context.jsx";
import Scrollbar from "smooth-scrollbar";
import { useMediaQuery } from "../components/hooks/UseMediaQuery";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  let isMobile = useMediaQuery("(max-width: 870px)");

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector(".main"), {
      damping: 0.06,
    });

    if (!isMobile) {
      scrollbar.addListener(() => {
        const reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const revealTop = reveals[i].getBoundingClientRect().top;
          const revealPoint = 150;

          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("fadeInUp");
          }
        }
      });
    }

    if (localStorage.theme === "light" || !("theme" in localStorage)) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [isMobile]);

  // useEffect(() => {
  //   const fadeInUp = () => {
  //     console.log("here");

  //     const reveals = document.querySelectorAll(".container");

  //     for (var i = 0; i < reveals.length; i++) {
  //       const windowHeight = window.innerHeight;
  //       const revealTop = reveals[i].getBoundingClientRect().top;
  //       const revealPoint = 150;

  //       if (revealTop < windowHeight - revealPoint) {
  //         reveals[i].classList.add("fadeInUp");
  //       }
  //     }
  //   };

  //   const handleClickOutside = (event) => {
  //     console.log("here");
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   window.addEventListener("scroll", fadeInUp);
  // }, []);

  return (
    <SidebarProvider>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Layout theme={theme} setTheme={setTheme}>
          <Component {...pageProps} theme={theme} setTheme={setTheme} />
        </Layout>
      </ThemeProvider>
    </SidebarProvider>
  );
}

export default MyApp;
