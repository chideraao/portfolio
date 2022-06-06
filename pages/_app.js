import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/styles/Global.js";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const themes = {
    light: {
      background: "#fffdfc",
      heading: "#020a13",
      text: "#040a10",
      primary: "#1864ea",
      primaryAlpha: "rgba(24, 100, 234, 0.2)",
    },
    dark: {
      background: "#020a13",
      heading: "#e1e1e1",
      text: "#c6c6c6",
      primary: "#187eea",
      primaryAlpha: "rgba(24, 126, 234, 0.2)",
    },
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
