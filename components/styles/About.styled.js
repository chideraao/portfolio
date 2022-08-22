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
    height: 28%;
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

  @media (max-width: 850px) {
    padding-top: 1.5rem;

    & .container {
      padding: 1.5rem 2rem;
    }

    & h2 {
      font-size: 2.2rem;
    }

    & h3 {
      font-size: 2rem;
    }

    & .about-content {
      gap: 4rem;
    }
  }

  @media (max-width: 500px) {
    & .about-content {
      display: block;
      margin-bottom: 3rem;
    }

    & .about-svg {
      display: none;
    }

    & h2 {
      font-size: 2rem;
    }

    & h3 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 430px) {
    & .container {
      padding: 1.5rem;
    }
  }
`;
