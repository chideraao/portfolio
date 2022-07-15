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
    gap: 1rem;
    height: 90%;
    width: 100%;
  }

  & .project-item {
    margin: 0 0 1.5em;
    position: relative;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    /* padding: 1.4rem 2rem; */
    /* display: flex;
    align-items: flex-end; */
    border-radius: 9px;
    break-inside: avoid;
  }

  & .projects-main img {
    /* width: 100% !important;
    height: 100% !important;
    position: absolute;
    left: 0 !important;
    top: 0 !important; */
    object-fit: cover;
    border-radius: 1rem;
  }

  & .project-item :before {
    content: "";
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background: radial-gradient(
      circle at center center,
      white 10%,
      whitesmoke 11%,
      whitesmoke 100%
    );
  }
  & .project-item :after {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
  }

  div.project-content {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
  }

  & .project-item :hover,
  & .project-item :focus {
    &:after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 10%,
        rgb(0 0 0 / 78%) 80%
      );
    }
  }

  & .project-item:hover .project-content,
  & .project-item:focus .project-content {
    z-index: 999;
    transform: none;
    opacity: 1;
  }
`;
