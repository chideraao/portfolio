import styled from "styled-components";

export const StyledContact = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    font-size: 1.9rem;
    text-align: center;
    font-weight: 600;
    color: var(--primary);
    padding-bottom: 0.9rem;
  }

  & .input-container {
    width: 100%;
    position: relative;
    height: 4rem;
    margin-bottom: 1rem;
  }

  & .input-container input,
  & .input-container textarea {
    font-size: 1rem;
    width: 100%;
    height: 100%;
    color: var(--primary);
    background-color: var(--bg);
    padding-top: 1.2rem;
    padding-left: 2rem;
    border: none;
    outline: none;
  }

  & .input-container label {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    border-bottom: 1px solid var(--text);
  }

  & .input-container label:after {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    bottom: -2.1px;
    width: 100%;
    border-bottom: 0 solid var(--primary);
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  & .input-container span {
    position: absolute;
    bottom: 3px;
    left: 0;
    color: var(--primary);
    transition: all 0.3s ease;
    transform: translateY(-150%);
    font-size: 1rem;
    color: #5fa8d3;
  }

  .input-container input:focus + label span,
  .input-container input:valid + label span,
  .input-container textarea:focus + label span,
  .input-container textarea:valid + label span {
  }

  .input-container input:focus + label:after,
  .input-container input:valid + label:after,
  .input-container textarea:focus + label:after,
  .input-container textarea:valid + label:after {
    transform: translateX(0%);
    border-bottom: 2px solid var(--primary);
  }
`;
