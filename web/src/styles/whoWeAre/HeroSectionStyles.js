import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
.

  margin-top: 0;
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  margin-bottom: var(--page-intro-small);
  .hero__wrapper {
    position: relative;

    margin-top: 0;

    ${"" /* margin-bottom: var(--page-section); */}
  }
  .hero__wrapper .h2 {
    position: relative;
    padding-top: var(--page-intro-small);
    text-transform: uppercase;
  }

  .headlineText {
    text-transform: uppercase;
    width: 100%;
  }


  .subheadingText {
    display: block;
    line-height: 1.1;
    letter-spacing: -0.035em;
    margin-top: var(--grid-padding);
    text-transform: none;
    font-size: 3.2rem;
    font-size: 2rem;
  }

  .heroCTA {
    margin-top: calc(var(--grid-gutter) * 2);
  }

  @media only screen and (min-width: 1024px) {
    .headlineText {
      padding-bottom: 1em;
      font-size: 5.3vw;
      width: 50%;
      width: 100%;
    }
    .subheadingText {
      font-size: 4.2rem;
      font-size: 3.2rem;
      margin-top: 0;
      padding-right: var(--grid-padding);
      ${"" /* padding-left: 50%; */}
    }
    .lineBreakContainer {
      height: calc(var(--page-section));
    }
  }
`;
