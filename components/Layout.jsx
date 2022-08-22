import Head from "next/head";
import Header from "./Header";

function Layout({ children, theme }) {
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={theme === "light" ? "#fffafc" : "#020a13"}
        />
      </Head>
      <div className="skip-main">
        <a className="skip-main" href="#main">
          Skip to main content
        </a>
      </div>
      {children}
    </>
  );
}

export default Layout;
