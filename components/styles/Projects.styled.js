import styled from "styled-components";

export const StyledProjects = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;

  & .container {
    height: 100%;
    max-width: 1350px;
  }

  & h2 {
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--primary);
    padding-bottom: 0.9rem;
  }

  & .projects-content {
    height: 100%;
    width: 100%;
  }

  & .projects-main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    height: 90%;
    width: 100%;
  }

  & .project-item {
    position: relative;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 9px;
    break-inside: avoid;
  }

  & .image-container {
    position: relative;
    height: 100%;
    width: auto;
  }

  & .image-container :after {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    background: linear-gradient(
      175deg,
      rgba(0, 0, 0, 0.01) 5%,
      rgb(0 0 0 / 28%) 80%
    );
    border-radius: 9px;
  }

  & .project-item :hover,
  & .project-item:focus {
    padding: 0;

    & :after {
      opacity: 0.85;
      background: linear-gradient(
        185deg,
        rgba(0, 0, 0, 0.1) 40%,
        rgb(0 0 0 / 90%) 80%
      );
    }
  }

  & .projects-main img {
    width: 100% !important;
    height: 100% !important;

    object-fit: cover;
    border-radius: 9px;
  }

  div.project-content {
    opacity: 0;
    pointer-events: none;

    transform: translateY(10%);
    transition: all 300ms ease;
    position: absolute;
    bottom: 0rem;

    width: 100%;
    padding: 1rem 1.4rem;
    padding-bottom: 0;
    word-wrap: break-word;

    & h3 {
      color: #fffdfc;
      margin-bottom: 0.1rem;
      letter-spacing: 0.8px;
    }

    & p {
      color: #d5d5d5;
      font-size: 0.88rem;
      line-height: 1.5;
      padding-bottom: 0.5rem;
      width: 100%;

      & span {
        display: inline-block;
        font-size: 11px;
        color: #fffdfc;
        background-color: #696869;
        padding: 0.2rem 0.55rem;
        border-radius: 50px;
        white-space: nowrap;
        margin-right: 0.4rem;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }
    }
  }

  & .project-item:hover .project-content,
  & .project-item:focus .project-content {
    z-index: 999;
    opacity: 1;
    bottom: 1.5rem;
  }

  @media (max-width: 800px) {
    & .projects-main {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    & .projects-main {
      display: block;
    }

    & .project-item {
      margin-bottom: 2rem;

      & :after {
        opacity: 0.8;
        background: linear-gradient(
          185deg,
          rgba(0, 0, 0, 0.1) 40%,
          rgb(0 0 0 / 90%) 80%
        );
      }
    }

    & .image-container {
      height: 40vh;
      width: auto;
    }

    & .project-item .project-content {
      z-index: 999;
      opacity: 1;
      bottom: 2rem;
    }
  }
`;

export const SidebarStyled = styled.aside`
  &.wrapper {
    height: 100vh;
    width: 580px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    background-color: var(--bg);
    color: var(--text);
    z-index: 99999;
    max-width: 580px;
  }

  &.wrapper.active {
    right: 0;
    transition: 350ms;
  }

  &.wrapper .sidebar-content {
    height: 100%;
    padding: 2rem;
  }

  a.open-project {
    background: var(--sidebar-projects);
    width: inherit;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 17px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    svg {
      width: 19px;
      height: 19px;
      vertical-align: bottom;
      margin-left: 6px;
      fill: #fff;
    }
  }

  a.open-project:hover {
    color: #fff;
    text-decoration: underline;
  }

  @media (max-width: 840px) {
    &.wrapper {
      width: 100vw;
      max-width: none;
    }
  }
`;
