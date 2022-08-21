import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="theme-color" content="#020a13" />
        <meta property="og:title" content="Dera Okeke | Software Engineer" />
        <meta
          property="og:description"
          content="Dera Okeke, Software engineer, Frontend developer, Technical writer, in that order. Probably figuring things out somewhere."
        />
        <meta property="og:url" content="https://dhera.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dhera.dev/img/dhera.png" />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
