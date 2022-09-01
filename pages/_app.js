import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/base/Global.js";
import { themes } from "../components/base/theme.js";
import { SidebarProvider } from "../components/utils/Context.jsx";
import Scrollbar from "smooth-scrollbar";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    Scrollbar.init(document.querySelector(".main"), { damping: 0.05 });

    if (localStorage.theme === "light" || !("theme" in localStorage)) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

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
