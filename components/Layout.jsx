import Head from "next/head";
import Header from "./Header";

function Layout({ children, theme, setTheme }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.background} />
      </Head>
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </>
  );
}

export default Layout;
