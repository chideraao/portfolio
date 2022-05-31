import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

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
  background-color: #020a13;
  color: #e1e1e1;
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
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

li a {
  position: relative;
  display: block;
  padding: 5px 0;
  padding-bottom: 8px;
}

li a:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
  bottom: 0;
  left: 0;
  background-color: #187eea;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s;
}

li a:hover {
  color: #187eea;
}

li a:hover:after {
  transform-origin: bottom left;
  transform: scaleX(1);
  
}

`;

export default GlobalStyles;
