import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/base/Global.js";
import { themes } from "../components/base/theme.js";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

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
