import styled from "styled-components";

export const StyledArticles = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  color: var(--sidebar-paragraph);

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

  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary);
    padding-bottom: 0.9rem;
  }

  & .articles-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  & .articles-main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    height: 75%;
    width: 100%;
    margin-bottom: 2rem;
  }

  & .article-item a {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }

  & .card {
    overflow: auto;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(237, 205, 205, 0.4);
    padding: 1rem 1rem;
    padding-bottom: 0;
    margin: 0.4rem;
    transform: translate3d(0px, 0px, 1px) scale(1, 1);

    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    & svg {
      height: 1.2rem;
      width: 1.2rem;
      fill: var(--text);
      transform: translate3d(0px, 0px, 1px) scale(1, 1);
      transition: all 0.5s ease;
    }

    :hover {
      box-shadow: 0 2px 10px rgba(78, 140, 190, 0.4);
      color: var(--primary);
      transform: translate3d(0px, 0px, 1px) scale(1.03, 1.03);

      & svg {
        fill: var(--primary);

        transform: translate3d(0px, 0px, 1px) scale(1.2, 1.2);
        transition: all 0.5s ease;
      }
    }
  }

  & a.call-to-action {
    color: var(--primary);
    background-color: var(--bg);
    border: 1px solid var(--primary);
    cursor: pointer;
    border-radius: 5px;
    padding: 1.1rem 1.7rem;
    margin-bottom: 2rem;
    align-self: center;
    transition: 2s;
  }

  a.call-to-action:hover,
  a.call-to-action:focus {
    box-shadow: inset 25rem 0 0 0.1px var(--primary-alpha);
    transition: 2s;
    margin-left: 0.2rem;
  }

  @media (max-width: 1100px) {
    &.fullpage {
      height: 100%;
    }

    & .articles-main {
      height: 100%;
    }

    & .article-item a {
      justify-content: space-between;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 850px) {
    padding-top: 1rem;
    padding-bottom: 1rem;

    & h2 {
      margin-bottom: 1rem;
      font-size: 1.7rem;
    }

    & .articles-main {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (max-width: 500px) {
    & .articles-heading {
      margin-left: 1.5rem;
    }

    & .articles-item {
      margin-bottom: 2rem;
    }

    & .articles-main {
      display: flex;
      flex-direction: column;
      align-items: normal;
    }

    & .card {
      margin: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 430px) {
    & .articles-heading {
      margin-left: 1.1rem;
    }
  }
`;
