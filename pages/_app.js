import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/base/Global.js";
import { themes } from "../components/base/theme.js";
import { SidebarProvider } from "../components/utils/Context.jsx";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
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
