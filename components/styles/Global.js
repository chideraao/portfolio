import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.background};
    --heading: ${({ theme }) => theme.heading};
    --primary: ${({ theme }) => theme.primary};
    --primary-alpha: ${({ theme }) => theme.primaryAlpha};
    --text: ${({ theme }) => theme.text};
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.5px;
    background-color: var(--bg);
    color: var(--text);
  }

  .preload * {
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
    scroll-snap-align: start;
  }

  .main {
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }

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

  .mouse_scroll {
    display: block;
    width: 1.2rem;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    bottom: 15px;
    cursor: pointer;
  }


  .mouse_scroll:hover .mouse,
  .mouse_scroll:hover .wheel {
    border: 2px solid var(--primary);
  }

  .mouse_scroll:hover .scroll_arrows {
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
  }

  .mouse_scroll:hover .wheel {
    background: var(--primary);
  }

  .scroll_arrows {
    display: block;
    width: 5px;
    height: 3px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);

    border-right: 1px solid var(--text);
    border-bottom: 1px solid var(--text);
    margin: 1px 2px 3px 4px;

    width: 11px;
    height: 11px;
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  }

  .mouse {
    height: calc(2.6vh + 0.5rem);
    width: 0.99rem;
    margin-left: 1.4px;
    border-radius: 14px;
    transform: none;
    border: 1px solid var(--text);
    top: 170px;
  }

  .wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: var(--text);
    position: relative;

    height: 4px;
    width: 4px;
    border: 1px solid var(--text);
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .wheel {
    -webkit-animation: mouse-wheel 0.6s linear infinite;
    -moz-animation: mouse-wheel 0.6s linear infinite;
    animation: mouse-wheel 0.6s linear infinite;
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 840px) {
    .container {
      padding: 0.5rem;
    }
  }
`;

export default GlobalStyles;
