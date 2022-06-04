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

*:focus { 
  outline: none; 
}

::selection {
  background: grey;
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
`;

export default GlobalStyles;
