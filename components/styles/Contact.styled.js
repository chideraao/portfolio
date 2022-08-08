import styled from "styled-components";

export const StyledContact = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .container {
    min-width: 760px;
  }

  & .contacts-content {
    margin-bottom: 3rem;

    & h2 {
      font-size: 2.5rem;
      text-align: center;
      font-weight: 600;
      color: var(--primary);
      padding-bottom: 0.9rem;
      margin-bottom: 0rem;
    }

    & p {
      text-align: center;
    }

    & a {
      font-weight: 700;
    }

    & a:hover {
      text-decoration: underline;
    }
  }

  & .input-container {
    width: 100%;
    position: relative;
    height: 5rem;
    margin-bottom: 4rem;
  }

  & .input-container input,
  & .input-container textarea {
    font-size: 1rem;
    font-family: inherit;
    width: 100%;
    height: 100%;
    color: var(--primary);
    background-color: transparent;
    border: none;
    outline: none;
    resize: none;
    line-height: 1.5;
  }

  & .input-container input::placeholder,
  & .input-container textarea::placeholder {
    color: var(--primary);
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    text-align: start;
  }

  & .input-container label {
    position: absolute;
    bottom: 27px;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    border-bottom: 1px solid var(--border-color);
  }

  & .input-container label[for="yourmessage"] {
    bottom: 0px;
  }

  & .input-container label:after {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    bottom: -2.1px;
    width: 100%;
    border-bottom: 0 solid var(--primary);
    transform: translateX(0%);
    transition: all 0.3s ease;
  }

  .input-container input:focus + label:after,
  .input-container input:valid + label:after,
  .input-container textarea:focus + label:after,
  .input-container textarea:valid + label:after {
    transform: translateX(0%);
    border-bottom: 2px solid var(--primary);
  }

  & .input-container label span {
    position: absolute;
    bottom: 5px;
    left: 0;
    color: var(--primary);
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .input-container input:focus + label span,
  .input-container textarea:focus + label span,
  .input-container input:valid + label span,
  .input-container textarea:valid + label span {
    transform: translateY(-150%);
    font-size: 0.8rem;
  }

  .input-container input:focus,
  .input-container textarea:focus,
  .input-container input:valid,
  .input-container textarea:valid {
    padding: 0;
  }

  & button {
    display: inline-block;
    color: var(--primary);
    background-color: var(--bg);
    border: 1px solid var(--primary);
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    font: inherit;
    padding: 0.7rem 2rem;
    margin-bottom: 2rem;
  }

  button:hover {
    box-shadow: inset 25rem 0 0 0.1px var(--primary-alpha);
    transition: 2s;
  }
`;
