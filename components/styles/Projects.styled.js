import styled from "styled-components";

export const StyledProjects = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;

  & .container {
    height: 100%;
  }

  & h2 {
    font-size: 2.2rem;
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
    height: 100%;
    width: 100%;
  }

  .project-item {
    border-radius: 6rem;
  }

  & .projects-main img {
    object-fit: contain;
  }
`;
