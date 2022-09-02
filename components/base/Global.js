import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.background};
    --heading: ${({ theme }) => theme.heading};
    --primary: ${({ theme }) => theme.primary};
    --primary-alpha: ${({ theme }) => theme.primaryAlpha};
    --text: ${({ theme }) => theme.text};
    --sidebar-projects: ${({ theme }) => theme.sidebarProject};
    --sidebar-border: ${({ theme }) => theme.sidebarBorder};
    --sidebar-paragraph: ${({ theme }) => theme.sidebarParagraph};
    --sidebar-tech: ${({ theme }) => theme.sidebarTech};
    --border-color: ${({ theme }) => theme.borderColor};
    --socials-blur: ${({ theme }) => theme.socialsBlur};
    --success: ${({ theme }) => theme.success};
    --success-card: ${({ theme }) => theme.successCard};
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--bg);
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.5px;
    color: var(--text);
    font-size: 1em;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  .preload {
    transition: all 0.5s ease !important;
  }

  *:focus-visible {
    outline: none;
    border: 1px dashed var(--primary);
    padding: 0.4rem;
    transition: all 0.3s ease;
  }

  ::selection {
    background: var(--primary-alpha);
  }

  ::-webkit-scrollbar {
    display: none;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.3;
    letter-spacing: 0;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    color: inherit;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1150px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
  }

  .fullpage {
    height: 100vh;
    width: 100vw;
  }

  .main {
    height: 100vh;
  }

  /* .loading > div{
    height: 100vh;
    width: 100vw
  } */

  a.skip-main {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;
  }

  a.skip-main:focus,
  a.skip-main:active {
    color: var(--text);
    background-color: var(--bg);
    left: auto;
    top: auto;
    width: auto;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--primary);
    text-align: center;
    font-size: 1rem;
    z-index: 999;
  }

  .overlay {
    z-index: 9;
    position: fixed;
    pointer-events:none;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }

  .load-screen {
    position: relative;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #fff;
    width: 0%;
    height: 100%;
  }

  .load-screen1 {
    position: relative;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #fff;
    width: 100%;
    height: 0%;
  }

  .reveal{
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
  }

  .reveal.fadeInUp{
    transform: translateY(0px);
    opacity:1;
  }

  @media (prefers-reduced-motion: reduce){
    * {
      animation: none !important;
      transition: none !important;
      scroll-snap-align: none !important;
    }
  }

  @media (max-width: 1200px) {
    .mouse_scroll {
      left: 95%;
    }
  }

  @media (max-width: 840px) {
    html {
      font-size: 0.9rem;
    }

    .main {
      height: 100%;
    }

    .container {
      padding: 1.5rem;
    }

    .fullpage {
      height: 100%;
      scroll-snap-align: none;
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 0;
    }

    & div.socials{
      display: flex;
      align-items: center;
      margin-top: 1rem;
      position: fixed;
      height: 3.5rem;
      width: 100%;
      background-color: var(--socials-blur);
      bottom: 0;
      gap: 2rem;
      justify-content: space-evenly;
      margin-left: 0;
      z-index: 9999;
      backdrop-filter: blur(10px);
    }

    & div.socials svg {
    fill: var(--text);
    height: 1.4rem;
    width: 1.5rem;
    transform: translate3d(0px, 0px, 1px) scale(1, 1);
  }

  & div.socials a:hover svg {
    fill: var(--primary);
    transform: translate3d(0px, 0px, 1px) scale(1.1, 1.1);
    transition: all 0.5s ease;
  }
  }
`;

export default GlobalStyles;
