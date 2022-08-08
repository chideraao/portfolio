import styled from "styled-components";

export const StyledHero = styled.section`
  min-height: 70vh;
  max-height: 75vh;
  margin: 3rem;
  margin-bottom: 0;

  & p {
    max-width: 50vw;
    line-height: 1.7rem;
  }

  & article {
    margin-bottom: 2.5rem;
  }

  & #intro-paragraph {
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    letter-spacing: 0px;
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

  a.call-to-action:hover {
    box-shadow: inset 25rem 0 0 0.1px var(--primary-alpha);
    transition: 2s;
  }

  & div.socials {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
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
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    position: relative;
    letter-spacing: -1.1px;
    color: var(--heading);

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

  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: #2994d1;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s; /* Safari 和 Chrome */
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }

  /* ----------------------------------------------------------------------------------------------------------------------------------------------/
  /                                                               MEDIA QUERIES                                                                   /
  /---------------------------------------------------------------------------------------------------------------------------------------------*/

  @media (max-width: 1150px) {
    margin: 2rem;

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
  }

  @media (max-width: 800px) {
    margin: 1.5rem;

    & p {
      max-width: 75vw;
    }

    & .intro-name {
      font-size: 2.4rem;
    }
  }
`;
