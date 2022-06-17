import styled from "styled-components";

export const StyledAbout = styled.section`
  padding-top: 3.5rem;

  & .container {
    height: 100%;
  }

  & h2 {
    font-size: 2.6rem;
    font-weight: 600;
    color: var(--primary);
    padding-bottom: 0.9rem;
  }

  & h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--primary);
    padding-bottom: 0.9rem;
  }

  & p {
    line-height: 1.5rem;
  }

  & .about-content {
    height: 27%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }

  & .about-content:last-child {
    margin-top: 1rem;
  }

  & .about-svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    & .about-content {
      display: block;
    }

    & .about-svg {
      display: none;
    }
  }
`;
