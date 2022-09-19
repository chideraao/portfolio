import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
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
          <meta name="title" content="Dera Okeke" />
          <meta
            name="description"
            content="Dera Okeke, Software engineer, Frontend Developer, Technical Writer. Skilled at building accessible and interactive web experiences and visualizations."
          />
          <meta
            name="keyword"
            content="Dera Okeke, portfolio, javascript, developer, Software, engineer, frontend, front-end, react, data visualizations, technical writing, developer relations, devrel, developer advocate, chart.js"
          />

          <meta property="og:title" content="Dera Okeke" />
          <meta
            property="og:description"
            content="Dera Okeke, Software engineer, Frontend Developer, Technical Writer. Skilled at building accessible and interactive web experiences and visualizations."
          />
          <meta property="og:url" content="https://dhera.dev" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://dhera.dev/img/dhera.png" />

          <meta name="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://dhera.dev" />
          <meta name="twitter:title" content="Dera Okeke" />
          <meta name="twitter:creator" content="@chideraa_o" />
          <meta
            name="twitter:description"
            content="Dera Okeke, Software engineer, Frontend Developer, Technical Writer. Skilled at building accessible and interactive web experiences and visualizations."
          />
          <meta
            property="twitter:image"
            content="https://dhera.dev/img/dhera.png"
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
}
