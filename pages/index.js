import Head from "next/head";
import Main from "../components/Main";
import styles from "../components/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site is Undergoing Maintenance</title>
      </Head>
      <Main />
    </div>
  );
}
