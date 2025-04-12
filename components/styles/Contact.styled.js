import styled from "styled-components";

export const StyledContact = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

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
      margin: 0 auto;
      max-width: 550px;
      font-size: 1.2rem;
      line-height: 1.5;
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
    margin-bottom: 3rem;
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
    bottom: -1px;
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
    padding: 1rem 3rem;
    margin-bottom: 2rem;
    transition: 2s;
  }

  button:hover,
  button:focus {
    box-shadow: inset 25rem 0 0 0.1px var(--primary-alpha);
    transition: 2s;
  }

  footer.footer {
    width: 100%;
    padding: 1rem 0;
    position: absolute;
    bottom: 0;
    color: var(--primary);

    & .container {
      border-top: 1px solid var(--primary-alpha);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90% !important;
      max-width: none;
    }

    & .container p {
      margin-top: 0.5rem;
    }

    & div.socials {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
      margin-left: 0.2rem;
      margin-top: 1rem;
    }

    & div.socials a {
      padding: 0.2rem;
    }

    & div.socials svg {
      fill: var(--text);
      height: 1.4rem;
      width: 1.5rem;
      transform: translate3d(0px, 0px, 1px) scale(1, 1);
      transition: all 0.5s ease;
    }

    & div.socials a:hover svg {
      fill: var(--primary);
      transform: translate3d(0px, 0px, 1px) scale(1.1, 1.1);
      transition: all 0.5s ease;
    }
  }

  @media (max-width: 840px) {
    & .container {
      min-width: 500px;
      max-width: 500px;
    }

    & .contacts-content h2 {
      font-size: 2.2rem;
    }

    & .contacts-content p {
      max-width: 400px;
      font-size: 1.1rem;
    }

    & .contacts-btn {
      margin: 4rem 0;
    }

    footer.footer .container {
      padding: 0 1.5rem;
      /* padding-bottom: 0; */
    }
  }

  @media (max-width: 470px) {
    & .container {
      min-width: 0;
      max-width: none;
    }

    & .contacts-content {
      margin-bottom: 1.4rem;
    }

    & .contacts-content h2 {
      font-size: 2rem;
    }

    & .contacts-content p {
      max-width: 400px;
      font-size: 1rem;
    }

    & form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .input-flex {
      display: block !important;
      margin-bottom: 2.5rem;
    }

    & .input-container {
      margin-bottom: 0;
      width: 70vw;
    }

    & .input-container input,
    & .input-container textarea {
      height: 80%;
    }

    & .contacts-btn {
      margin: 5rem 0;
    }

    & footer.footer {
      padding-bottom: 4rem;

      & div.socials {
        display: none;
      }
    }
  }

  @media (max-width: 430px) {
    margin-top: 2rem;

    & .input-container {
      width: 80vw;
    }

    & .contacts-btn {
      margin-bottom: 6rem;
    }
  }
`;
