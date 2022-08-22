import Head from "next/head";
import Main from "../components/Main";

export default function Home({ theme, setTheme }) {
  return (
    <>
      <Head>
        <title>Dera Okeke</title>
      </Head>
      <Main theme={theme} setTheme={setTheme} />
    </>
  );
}
