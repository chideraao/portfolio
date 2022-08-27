import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 3rem;
  padding-top: 2.5rem;
  max-height: 30vh;

  & nav .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-self: start;
    padding: 0;
  }

  & nav .navbar {
    padding: 1rem 0;
  }

  & nav .navbar-svg {
    cursor: pointer;
    justify-self: baseline;
    user-select: none;
  }

  & nav li:focus-visible,
  nav .navbar-svg {
    padding: 0;
    padding-left: 0.1rem;
    padding-top: 0.2rem;
  }

  & .navbar-main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 3rem;
  }

  & .navbar-links {
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
    font-size: 0.9rem;
  }

  & .navbar-links .from-top {
    position: relative;
    animation: fromtop 0.7s ease-in-out;
  }

  & .navbar-links a[href="#projects"] {
    animation-duration: 1s;
  }

  & .navbar-links a[href="#contact"] {
    animation-duration: 1.5s;
  }

  & .navbar-links .navbar-svg.from-top {
    animation-duration: 1.7s;
  }

  @keyframes fromtop {
    0% {
      top: -100px;
    }

    100% {
      top: 0;
    }
  }

  & .navbar-links li span {
    color: var(--primary);
    margin-right: 0.2rem;
  }

  & nav li a:hover {
    color: var(--primary);
  }

  & nav li a {
    position: relative;
    display: block;
    padding: 5px 0;
    padding-bottom: 8px;
  }

  & nav li a:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  & nav li a:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  & svg circle {
    fill: var(--text);
    stroke: var(--text);
  }

  & svg path {
    fill: var(--bg);
  }

  /* ----------------------------------------------------------------------------------------------------------------------------------------------/
  /                                                               MEDIA QUERIES                                                                   /
  /---------------------------------------------------------------------------------------------------------------------------------------------*/

  @media (max-width: 1150px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 840px) {
    padding: 3rem 1rem;
    margin-bottom: 3rem;

    & nav .navbar {
      padding: 0;
    }

    & .container {
      padding: 0 1rem;
      justify-content: flex-end;
      align-items: center;
      position: relative;
    }

    & .container .navbar-menu {
      justify-self: end;
      position: absolute;
      z-index: 9999999999;
    }

    .navbar-menu svg {
      fill: var(--primary);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      transition: transform 400ms;
      user-select: none;
    }

    .navbar-menu svg path {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: var(--primary);

      stroke-width: 4.5;
      stroke-linecap: round;
    }

    .navbar-menu svg path.top {
      stroke-dasharray: 40 160;
    }

    .navbar-menu svg path.middle {
      stroke-dasharray: 40 142;
      transform-origin: 50%;
      transition: transform 400ms;
    }

    .navbar-menu svg path.bottom {
      stroke-dasharray: 40 85;
      transform-origin: 50%;
      transition: transform 400ms, stroke-dashoffset 400ms;
    }

    .navbar-menu svg.open {
      transform: rotate(45deg);
    }

    .navbar-menu svg.open .top {
      stroke-dashoffset: -64px;
    }

    .navbar-menu svg.open .middle {
      transform: rotate(90deg);
    }

    .navbar-menu svg.open .bottom {
      stroke-dashoffset: -64px;
    }
  }

  @media (max-width: 470px) {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

export const StyledMenu = styled.div`
  z-index: 9999999;
  padding: 3.9rem 1.7rem;

  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--bg);
  color: var(--text);
  z-index: 9999999;
  right: 0;
  transition: 350ms;

  animation-name: fadeLeft;
  animation-duration: 0.7s;
  animation-fill-mode: both;

  & :focus-visible {
    padding: 0 !important;
  }

  &.wrapper .sidebar-content {
    height: 100%;
    padding: 1.6rem;
    overflow: scroll;
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  & .menu-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  & .navbar-links {
    flex-direction: column;
    gap: 3rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (max-width: 470px) {
    padding: 3rem 1.7rem;
  }
`;
