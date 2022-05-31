import Layout from "../components/Layout";
import "../components/styles/Global.js";
import GlobalStyles from "../components/styles/Global.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
