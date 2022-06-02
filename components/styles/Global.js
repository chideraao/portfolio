import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
--bg: #020a13;
--heading: #e1e1e1;
--primary: #187eea;
--text: #c6c6c6
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

*:focus { 
  outline: none; 
}

h1,
h2,
h3,
h4 {
  line-height: 1.3;
}

a {
  color: inherit;
  text-decoration: none;
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
