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

    transition: all 300ms ease;
    position: absolute;
    bottom: 0rem;

    width: 100%;
    padding: 0.5rem 1rem;
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
    bottom: 0.5rem;
  }

  @media (max-width: 850px) {
    padding-top: 1rem;
    padding-bottom: 1rem;

    & h2 {
      margin-bottom: 1rem;
      font-size: 1.7rem;
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

    & .project-item .project-content {
      z-index: 999;
      opacity: 1;
      padding: 0 1.2rem;
      bottom: 5px;
    }

    & .projects-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    & .image-container {
      height: 50vh;
      width: 75vh;
    }
  }

  @media (max-width: 500px) {
    & .project-item {
      margin-bottom: 2rem;
    }

    & .image-container {
      height: 40vh;
      width: auto;
    }
  }
`;

export const SidebarStyled = styled.aside`
  z-index: 99999;

  &.wrapper {
    height: 100vh;
    width: 580px;
    position: fixed;
    top: 0;
    right: -100%;
    background-color: var(--bg);
    color: var(--text);
    z-index: 99999;
    max-width: 580px;
    padding: 0.4rem;
  }

  &.wrapper.active {
    right: 0;
    transition: 350ms;
  }

  & .wrapper:focus-visible {
    padding: 0 !important;
  }

  &.wrapper .sidebar-content {
    height: 100%;
    padding: 1.6rem;
    overflow: scroll;
  }

  &.fadeInLeft {
    animation-name: fadeLeft;
    animation-duration: 0.5s;
    animation-fill-mode: both;
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

  & .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid var(--sidebar-border);

    & span {
      padding: 0.24rem;
    }

    & svg {
      fill: #263748;
      cursor: pointer;
    }

    & h3 {
      font-size: 0.9rem;
      padding: 0.4rem;
      cursor: pointer;
    }

    & h3:hover {
      text-decoration: underline;
    }
  }

  & .sidebar-main {
    margin: 1.5rem 0;
    width: 100%;
    padding-bottom: 1.5rem;
    margin-bottom: 0;

    & p {
      font-size: 0.85rem;
      line-height: 1.4;
      color: var(--sidebar-paragraph);

      & span {
        display: inline-block;
        font-size: 11px;
        color: var(--text);
        background: var(--sidebar-tech);

        padding: 0.35rem 0.6rem;
        border-radius: 3px;
        white-space: nowrap;
        margin-right: 0.4rem;
        margin-bottom: 0.3rem;
        font-weight: 700;
      }
    }

    & .sidebar-heading {
      margin-bottom: 1.5rem;
      width: 100%;

      & h1 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        letter-spacing: 0.8px;
      }
    }

    & .sidebar-desc {
      margin-bottom: 1.5rem;
      width: 100%;

      & h2 {
        font-size: 1.1rem;
        letter-spacing: 0.8px;
        font-weight: 500;
        margin: 1.2rem 0 0.5rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.25rem;
      }

      & a {
        font-size: 0.85rem;
        line-height: 1.4;
        font-weight: 500;
        color: var(--sidebar-paragraph);
      }

      & a:hover {
        text-decoration: underline;
      }

      & svg {
        height: 1.2rem;
        width: 1.2rem;
        fill: var(--text);
      }
    }

    & .image-container {
      position: relative;
      height: 18rem;
      margin-bottom: 2rem;

      img {
        border-radius: 12px;
      }
    }
  }

  & a.open-project {
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

  & a.open-project:hover {
    color: #fff;
    text-decoration: underline;
  }

  @media (max-width: 840px) {
    &.wrapper {
      width: 100vw;
      max-width: none;
      padding: 0.4rem 1.3rem;
    }

    &.wrapper .sidebar-content {
      padding: 1.5rem 1rem;
    }

    & .sidebar-main p {
      font-size: 0.9rem;
    }

    & .image-container {
      height: 22rem !important;

      img {
        object-fit: cover;
      }
    }
  }
`;
