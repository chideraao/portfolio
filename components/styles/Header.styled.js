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
    & .container {
      padding: 0 1rem;
      justify-content: flex-end;
      align-items: center;
    }

    & .container .navbar-menu {
      justify-self: end;
      margin-right: 0.5rem;
    }

    .navbar-menu svg path {
      fill: var(--primary);
    }
  }
`;
