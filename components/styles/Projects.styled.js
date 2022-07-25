import styled from "styled-components";

export const StyledProjects = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;

  & .container {
    height: 100%;
    max-width: 1300px;
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
    overflow: hidden;
    border-radius: 9px;
    break-inside: avoid;
  }

  & .project-items :after {
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
  }

  & .project-item :hover,
  & .project-item:focus {
    padding: 0;

    & :after {
      opacity: 0.5;
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
  }

  & .project-item:hover .project-content,
  & .project-item:focus .project-content {
    z-index: 999;
    opacity: 1;
    bottom: 2rem;
  }

  div.project-content h3,
  div.project-content p {
    color: #fff;
  }
`;
