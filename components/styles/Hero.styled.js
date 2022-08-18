import styled from "styled-components";

export const StyledHero = styled.section`
  min-height: 70vh;
  max-height: 75vh;
  margin: 3rem;
  margin-bottom: 0;

  & p {
    max-width: 700px;
    line-height: 1.7rem;
    margin-left: 0.2rem;
  }

  & article {
    margin-bottom: 2.5rem;
  }

  & #intro-paragraph {
    color: var(--primary);
    font-size: clamp(1rem, 2.7vw - 0.2rem, 1.5rem);
    font-weight: 500;
    letter-spacing: 0.7px;
    margin-bottom: 0.2rem;
  }

  & a.call-to-action {
    display: inline-block;
    color: var(--primary);
    background-color: var(--bg);
    border: 1px solid var(--primary);
    cursor: pointer;
    border-radius: 5px;
    padding: 0.7rem 1.5rem;
    margin-bottom: 2rem;
  }

  a.call-to-action:hover,
  a.call-to-action:focus {
    box-shadow: inset 25rem 0 0 0.1px var(--primary-alpha);
    transition: 2s;
    margin-left: 0.2rem;
  }

  & div.socials {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-left: 0.2rem;
    margin-top: 1rem;
  }

  & div.socials svg {
    fill: ${({ theme }) =>
      theme.background === "#fffdfc" ? "#545454" : "var(--text)"};
    height: 1.4rem;
    width: 1.5rem;
    transform: translate3d(0px, 0px, 1px) scale(1, 1);
  }

  & div.socials a:hover svg {
    fill: var(--primary);
    transform: translate3d(0px, 0px, 1px) scale(1.1, 1.1);
    transition: all 0.5s ease;
  }

  .intro-name {
    font-size: clamp(3rem, 6.2vw + 0.2rem, 4.5rem);
    font-weight: 900;
    position: relative;
    letter-spacing: -2.5px;
    color: var(--heading);
    margin-bottom: 0.3rem;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 blue;
      animation: text-glitch-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 red;
      animation: text-glitch 2s infinite linear alternate-reverse;
    }

    @keyframes text-glitch {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }

    @keyframes text-glitch-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }

  .mouse_scroll {
    display: block;
    width: 2.2rem;
    height: 72px;
    position: absolute;
    left: 87%;
    margin-left: -12px;
    bottom: 7%;
    cursor: pointer;
  }

  .mouse_scroll:focus-visible {
    padding: 0;
    padding-left: 0.2rem;
  }

  .mouse_scroll:hover .mouse,
  .mouse_scroll:hover .wheel {
    border: 2px solid var(--primary);
  }

  .mouse_scroll:hover .scroll_arrows {
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
  }

  .mouse_scroll:hover .wheel {
    background: var(--primary);
  }

  .scroll_arrows {
    display: block;
    transform: rotate(45deg);

    border-right: 1px solid var(--text);
    border-bottom: 1px solid var(--text);
    margin: 1px 2px 3px 5px;

    width: 17px;
    height: 17px;
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  }

  .mouse {
    height: calc(4.6vh + 0.5rem);
    width: 1.5rem;
    margin-left: 1.5px;
    border-radius: 14px;
    transform: none;
    border: 1px solid var(--text);
    top: 170px;
  }

  .wheel {
    display: block;
    margin: 5px auto;
    background: var(--text);
    position: relative;

    height: 6px;
    width: 6px;
    border: 1px solid var(--text);
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .wheel {
    -webkit-animation: mouse-wheel 0.6s linear infinite;
    -moz-animation: mouse-wheel 0.6s linear infinite;
    animation: mouse-wheel 0.6s linear infinite;
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* ----------------------------------------------------------------------------------------------------------------------------------------------/
  /                                                               MEDIA QUERIES                                                                   /
  /---------------------------------------------------------------------------------------------------------------------------------------------*/

  @media (max-width: 1200px) {
    .container & {
      margin: 3rem 4.5rem;
    }

    & article {
      margin-bottom: 1.5rem;
    }

    & #intro-paragraph {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    & .intro-name {
      margin-bottom: 0;
    }

    & a.call-to-action {
      margin-bottom: 1rem;
    }

    & div.socials {
      gap: 2rem;
    }
  }

  @media (max-width: 850px) {
    .container & {
      margin-top: 0.7rem;
      margin-left: 6rem;
      margin-bottom: 0;
      position: relative;
    }

    & #intro-paragraph {
      margin-bottom: 0.2rem;
    }

    & p {
      max-width: 75vw;
      margin-bottom: 1.7rem;
    }

    & .intro-name {
      margin-bottom: 0.2rem;
    }

    & a.call-to-action {
      margin-bottom: 1.3rem;
    }

    & div.socials {
      gap: 3rem;
    }

    .mouse {
      margin-left: 2px;
    }

    .mouse_scroll {
      left: 105%;
    }
  }

  @media (max-width: 470px) {
    .container & {
      margin: 0rem;
    }

    & p {
      max-width: 85vw;
      margin-bottom: 1.7rem;
    }

    & #intro-paragraph {
      margin-bottom: 0.3rem;
    }

    & .hero-content article {
      margin: 1.5rem;
      padding: 1.5rem;
      margin-bottom: 0;
    }

    & a.call-to-action {
      margin-left: 3rem;
    }

    & div.socials {
      position: fixed;
      height: 3.5rem;
      width: 100%;
      background-color: var(--socials-blur);
      bottom: 0;
      gap: 2rem;
      justify-content: space-evenly;
      margin-left: 0;
      z-index: 9999;
      backdrop-filter: blur(21px);
    }

    .mouse {
      margin-left: 2.1px;
    }

    .mouse_scroll {
      left: 90%;
      bottom: 0%;
    }
  }

  @media (max-width: 430px) {
    & .hero-content article {
      margin: 1rem;
      padding: 1rem;
      margin-top: 3rem;
    }

    & a.call-to-action {
      margin-left: 2rem;
    }
  }
`;
