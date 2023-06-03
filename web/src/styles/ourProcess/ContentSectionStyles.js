import styled from 'styled-components';

export const ContentSectionStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  padding-top: var(--page-intro-small);
  padding-bottom: calc(var(--page-section) - 2rem);

  .contentSection__introText {
    padding-bottom: var(--page-intro-small);
    border-bottom: 1px solid var(--racoma-light);
  }

  .stepsContainer {
    ul {
      display:flex;
      justify-content: space-between;
      li {
        align-items: center;
        justify-content: top;
        display: flex;
        flex-direction: column;''
        width: 20%;
        max-width: 20%;
      }
    }
  

    svg {
      max-width: 30px;
    }
  }

  @media only screen and (min-width: 720px) {
    .contentSection__grid_row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'heading1 heading2'
        'body1 body2';
      grid-column-gap: calc(var(--grid-gutter) * 2);
      column-gap: calc(var(--grid-gutter) * 8);
      border-top: 1px solid var(--racoma-light);
      padding: calc(var(--grid-gutter) * 3);
      padding-left: 0;
      padding-right: 0;
      .contentSection_smallHeading {
        border-top: none;
        padding-top: 0px;
      }
      p {
        margin-bottom: 2rem;
        strong {
          font-weight: var(--font-weight-h5);
          font-size: var(--font-size-h5);
          line-height: var(--line-height-h5);
          letter-spacing: var(--letter-spacing-h5);
          text-transform: uppercase;
        }
        :first-child {
          grid-area: heading1;
          column: 1;
          padding-right: calc(var(--grid-gutter) *);
        }
        :nth-child(2) {
          grid-area: body1;
          column: 1;
          padding-right: calc(var(--grid-gutter) *);
        }
        :nth-child(3) {
          grid-area: heading2;
          column: 2;
          padding-left: calc(var(--grid-gutter) *);
        }
        :nth-child(4) {
          grid-area: body2;
          column: 2;
          padding-left: calc(var(--grid-gutter) *);
        }
      }
    }
  }
`;

// import styled from "styled-components";

// export const ContentSectionStyles = styled.div`
//   background-color: var(--racoma-light);
//   color: var(--racoma-teal);
//   padding-top: var(--page-intro-small);
//   border-bottom: 1px solid var(--racoma-light);
//   .contentSection__introText {
//     padding-bottom: var(--page-intro-small);
//     border-bottom: 1px solid var(--racome-teal);
//   }

//   .contentSection__grid_row {
//     grid-template-columns: 100%;
//     p {
//       margin-bottom: 2rem;
//     }
//     p:last-child,
//     p:nth-child(3) {
//       ${"" /* background-color: red; */}
//       padding-bottom: 2rem;
//     }
//     .contentSection_smallHeading {
//       border-top: 1px solid var(--racoma-teal);
//       padding-top: 4rem;
//     }
//   }

//   @media only screen and (min-width: 720px) {
//     .contentSection__grid_row {
//       display: grid;
//       grid-template-columns: 50% 50%;
//       grid-template-areas:
//         "heading1 heading2"
//         "body1 body2"
//         "cta1 cta2";
//       grid-column-gap: calc(var(--grid-gutter) * 2);
//       column-gap: calc(var(--grid-gutter) * 2);
//       border-top: 1px solid var(--racoma-teal);
//       padding: calc(var(--grid-gutter) * 3);
//       padding-left: 0;
//       .contentSection_smallHeading {
//         border-top: none;
//         padding-top: 0px;
//       }
//       p {
//         margin-bottom: 2rem;
//         strong {
//           font-weight: var(--font-weight-h5);
//           font-size: var(--font-size-h5);
//           line-height: var(--line-height-h5);
//           letter-spacing: var(--letter-spacing-h5);
//           text-transform: uppercase;
//         }
//         :first-child {
//           grid-area: heading1;
//           column: 1;
//           padding-right: calc(var(--grid-gutter) *);
//         }
//         :nth-child(2) {
//           grid-area: body1;
//           column: 1;
//           padding-right: calc(var(--grid-gutter) *);
//         }
//         :nth-child(3) {
//           grid-area: cta1;
//           column: 1;
//           padding-bottom: 0;
//         }
//         :nth-child(4) {
//           grid-area: heading2;
//           column: 2;
//           padding-left: calc(var(--grid-gutter) *);
//         }
//         :nth-child(5) {
//           grid-area: body2;
//           column: 2;
//           padding-left: calc(var(--grid-gutter) *);
//         }
//         :nth-child(6) {
//           grid-area: cta2;
//           column: 2;
//           padding-left: calc(var(--grid-gutter) *);
//           padding-bottom: 0;
//         }
//       }
//     }
//     ${
//       "" /* .contentSection__grid {
//       display: grid;
//       grid-template-columns: 50% 50%;
//       grid-template-areas:
//         "heading heading"
//         "body body";
//       grid-column-gap: var(--grid-gutter);
//       column-gap: var(--grid-gutter);
//       padding-right: var(--grid-gutter);
//     }
//     .contentSection__smallHeading {
//       margin-bottom: 2rem;
//     }
//     .contentSection_grid p:firstchild {
//       color: red;
//       grid-area: heading;
//       grid-column: 1;
//     } */
//     }
//   }
// `;
