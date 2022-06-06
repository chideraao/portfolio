import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
--bg: ${({ theme }) => theme.background};
--heading: ${({ theme }) => theme.heading};
--primary: ${({ theme }) => theme.primary};
--primary-alpha: ${({ theme }) => theme.primaryAlpha};
--text: ${({ theme }) => theme.text}
}

html, body {
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

a:hover{
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

.main{
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

a.skip-main:focus, a.skip-main:active {
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
`;

export default GlobalStyles;
