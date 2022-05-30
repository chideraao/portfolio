import Head from "next/head";
import Main from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#020a13" />
        <title>Site is Undergoing Maintenance</title>
        <meta property="og:title" content="Dera Okeke | Software Engineer" />
        <meta
          property="og:description"
          content=" Dera Okeke, Software engineer, Frontend developer, Technical writer, in that order. Probably figuring things out somewhere."
        />
        <meta property="og:url" content="https://dhera.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dhera.dev/dhera.png" />
        <meta
          name="description"
          content="Human, Dera Okeke, Software engineer, Frontend developer, Technical writer, in that order. Probably figuring things out somewhere."
        />
        <meta
          name="keyword"
          content="Dera Okeke, portfolio, javascript, developer, Software, engineer, frontend, front-end, react, data visualization, technical writing, developer relations, devrel, developer advocate, chart.js"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dera Okeke | Software Engineer" />
        <meta name="twitter:creator" content="@chideraa_o" />
        <meta
          name="twitter:description"
          content="Human, Dera Okeke, Software engineer, Frontend developer, Technical writer, in that order. Probably figuring things out somewhere."
        />
      </Head>
      <Main />
    </div>
  );
}
