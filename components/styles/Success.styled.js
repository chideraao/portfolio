import styled from "styled-components";

export const StyledSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  & .success-main {
    background-color: var(--success-card);
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    padding: 2rem 0;
    padding-bottom: 3rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .svg-container {
    border: 2px solid var(--success);
    border-radius: 50%;
    padding: 0.1rem 0.2rem;
  }

  & svg path {
    fill: var(--success);
  }

  & .success-content {
    text-align: center;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  & .success-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  & .success-content p {
    font-size: clamp(1rem, 2.7vw - 0.2rem, 1.2rem);
    margin-bottom: 3rem;
  }

  & .success-content a {
    background: var(--success);
    width: inherit;
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

  & .success-content a:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
