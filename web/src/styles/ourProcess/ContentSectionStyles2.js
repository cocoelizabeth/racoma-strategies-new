// import styled from 'styled-components';

// export const ContentSectionStyles2 = styled.div`
//   background-color: var(--racoma-teal);
//   color: var(--racoma-light);
//   padding-top: var(--page-intro-small);
//   padding-bottom: calc(var(--page-section) - 2rem);

//   .contentSection__introText {
//     padding-bottom: var(--page-intro-small);
//     border-bottom: 1px solid var(--racoma-light);
//   }

//   .stepsContainer {
//     ul {
//       display: flex;
//       justify-content: space-between;
//       li {
//         align-items: center;
//         justify-content: top;
//         display: flex;
//         flex-direction: column;
//         width: 20%;
//         max-width: 20%;
//       }
//     }

//     svg {
//       max-width: 30px;
//     }
//   }

//   @media only screen and (min-width: 720px) {
//     .contentSection__grid_row {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       grid-template-areas:
//         "heading1 heading2"
//         "body1 body2";
//       grid-column-gap: calc(var(--grid-gutter) * 2);
//       column-gap: calc(var(--grid-gutter) * 8);
//       border-top: 1px solid var(--racoma-light);
//       padding: calc(var(--grid-gutter) * 3);
//       padding-left: 0;
//       padding-right: 0;
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
//           grid-area: heading2;
//           column: 2;
//           padding-left: calc(var(--grid-gutter) *);
//         }
//         :nth-child(4) {
//           grid-area: body2;
//           column: 2;
//           padding-left: calc(var(--grid-gutter) *);
//         }
//       }
//     }
//   }

//   :root {
//     --numDots: 5;
//     --parentWidthBase: 0.8;
//     --parentWidth: calc(--parentWidthBase * 100vw);
//     --parentMaxWidth: 1000px;
//     --dotWidth: 25px;
//     --active: #2c3e50;
//     --inactive: #aeb6bf;
//   }

//   html {
//     height: 100%;
//   }

//   body {
//     min-height: 100%;
//   }

//   body {
//     font-family: "Quicksand", sans-serif;
//     font-weight: 500;
//     color: #424949;
//     background-color: #ecf0f1;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//   }

//   h1 {
//     text-align: center;
//     height: 38px;
//     margin: 60px 0;
//   }
//   h1 span {
//     white-space: nowrap;
//   }

//   .flex-parent {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     min-height: 500px;
//   }

//   .input-flex-container {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     flex-wrap: wrap;
//     width: 80vw;
//     max-width: 1000px;
//     position: relative;
//     z-index: 0;
//     margin-left: calc((80vw - 25px) / 5);
//   }

//   input {
//     width: 25px;
//     height: 25px;
//     background-color: #2c3e50;
//     position: relative;
//     border-radius: 50%;
//     display: block;
//     -moz-appearance: none;
//     -webkit-appearance: none;
//     appearance: none;
//     cursor: pointer;
//   }
//   input:focus {
//     outline: none;
//   }
//   input::before,
//   input::after {
//     content: "";
//     display: block;
//     position: absolute;
//     z-index: -1;
//     top: 50%;
//     transform: translateY(-50%);
//     background-color: #2c3e50;
//     width: 4vw;
//     height: 5px;
//     max-width: 50px;
//   }
//   input::before {
//     left: calc(-4vw + 12.5px);
//   }
//   input::after {
//     right: calc(-4vw + 12.5px);
//   }
//   input:checked {
//     background-color: #2c3e50;
//   }
//   input:checked::before {
//     background-color: #2c3e50;
//   }
//   input:checked::after {
//     background-color: #aeb6bf;
//   }
//   input:checked ~ input,
//   input:checked ~ input::before,
//   input:checked ~ input::after {
//     background-color: #aeb6bf;
//   }
//   input:checked + .dot-info span {
//     font-size: 13px;
//     font-weight: bold;
//   }

//   .dot-info {
//     width: 25px;
//     height: 25px;
//     display: block;
//     visibility: hidden;
//     position: relative;
//     z-index: -1;
//     left: calc((((80vw - 25px) / 5) * -1) - 1px);
//   }
//   .dot-info span {
//     visibility: visible;
//     position: absolute;
//     font-size: 12px;
//   }
//   .dot-info span.year {
//     bottom: -30px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
//   .dot-info span.label {
//     top: -65px;
//     left: 0;
//     transform: rotateZ(-45deg);
//     width: 70px;
//     text-indent: -10px;
//   }

//   #timeline-descriptions-wrapper {
//     width: 100%;
//     margin-top: 140px;
//     font-size: 22px;
//     font-weight: 400;
//     margin-left: calc((-80vw - 25px) / 5);
//   }
//   #timeline-descriptions-wrapper p {
//     margin-top: 0;
//     display: none;
//   }

//   input[data-description="step1"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="step1"] {
//     display: block;
//   }

//   input[data-description="step2"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="step2"] {
//     display: block;
//   }

//   input[data-description="step3"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="step3"] {
//     display: block;
//   }

//   input[data-description="step4"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="step4"] {
//     display: block;
//   }

//   input[data-description="step5"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="step5"] {
//     display: block;
//   }

//   ${'' /* input[data-description="1960"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="1960"] {
//     display: block;
//   }

//   input[data-description="1970"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="1970"] {
//     display: block;
//   }

//   input[data-description="1980"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="1980"] {
//     display: block;
//   }

//   input[data-description="1990"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="1990"] {
//     display: block;
//   }

//   input[data-description="2000"]:checked
//     ~ #timeline-descriptions-wrapper
//     p[data-description="2000"] {
//     display: block;
//   } */}

//   @media (min-width: 1250px) {
//     .input-flex-container {
//       margin-left: 62.5px;
//     }
//     input::before {
//       left: -37.5px;
//     }
//     input::after {
//       right: -37.5px;
//     }
//     .dot-info {
//       left: calc((((1000px - 25px) /5) * -1) - 1px);
//     }
//     #timeline-descriptions-wrapper {
//       margin-left: -37.5px;
//     }
//   }

//   @media (max-width: 630px) {
//     .flex-parent {
//       justify-content: initial;
//     }
//     .input-flex-container {
//       flex-wrap: wrap;
//       justify-content: center;
//       width: 400px;
//       height: auto;
//       margin-top: 15vh;
//       margin-left: 0;
//       padding-bottom: 30px;
//     }
//     input,
//     .dot-info {
//       width: 60px;
//       height: 60px;
//       margin: 0 10px 50px;
//     }
//     input {
//       background-color: transparent !important;
//       z-index: 1;
//     }
//     input::before,
//     input::after {
//       content: none;
//     }
//     input:checked + .dot-info {
//       background-color: #2c3e50;
//     }
//     input:checked + .dot-info span.year {
//       font-size: 14px;
//     }
//     input:checked + .dot-info span.label {
//       font-size: 12px;
//     }
//     .dot-info {
//       visibility: visible;
//       border-radius: 50%;
//       z-index: 0;
//       left: 0;
//       margin-left: -70px;
//       background-color: #aeb6bf;
//     }
//     .dot-info span.year {
//       top: 0;
//       left: 0;
//       transform: none;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: #ecf0f1;
//     }
//     .dot-info span.label {
//       top: calc(100% + 5px);
//       left: 50%;
//       transform: translateX(-50%);
//       text-indent: 0;
//       text-align: center;
//     }
//     #timeline-descriptions-wrapper {
//       margin-top: 30px;
//       margin-left: 0;
//       text-align: center;
//     }
//   }

//   @media (max-width: 480px) {
//     .input-flex-container {
//       width: 340px;
//     }
//   }

//   @media (max-width: 400px) {
//     .input-flex-container {
//       width: 300px;
//     }
//   }
// `;

// // import styled from "styled-components";

// // export const ContentSectionStyles = styled.div`
// //   background-color: var(--racoma-light);
// //   color: var(--racoma-teal);
// //   padding-top: var(--page-intro-small);
// //   border-bottom: 1px solid var(--racoma-light);
// //   .contentSection__introText {
// //     padding-bottom: var(--page-intro-small);
// //     border-bottom: 1px solid var(--racome-teal);
// //   }

// //   .contentSection__grid_row {
// //     grid-template-columns: 100%;
// //     p {
// //       margin-bottom: 2rem;
// //     }
// //     p:last-child,
// //     p:nth-child(3) {
// //       ${"" /* background-color: red; */}
// //       padding-bottom: 2rem;
// //     }
// //     .contentSection_smallHeading {
// //       border-top: 1px solid var(--racoma-teal);
// //       padding-top: 4rem;
// //     }
// //   }

// //   @media only screen and (min-width: 720px) {
// //     .contentSection__grid_row {
// //       display: grid;
// //       grid-template-columns: 50% 50%;
// //       grid-template-areas:
// //         "heading1 heading2"
// //         "body1 body2"
// //         "cta1 cta2";
// //       grid-column-gap: calc(var(--grid-gutter) * 2);
// //       column-gap: calc(var(--grid-gutter) * 2);
// //       border-top: 1px solid var(--racoma-teal);
// //       padding: calc(var(--grid-gutter) * 3);
// //       padding-left: 0;
// //       .contentSection_smallHeading {
// //         border-top: none;
// //         padding-top: 0px;
// //       }
// //       p {
// //         margin-bottom: 2rem;
// //         strong {
// //           font-weight: var(--font-weight-h5);
// //           font-size: var(--font-size-h5);
// //           line-height: var(--line-height-h5);
// //           letter-spacing: var(--letter-spacing-h5);
// //           text-transform: uppercase;
// //         }
// //         :first-child {
// //           grid-area: heading1;
// //           column: 1;
// //           padding-right: calc(var(--grid-gutter) *);
// //         }
// //         :nth-child(2) {
// //           grid-area: body1;
// //           column: 1;
// //           padding-right: calc(var(--grid-gutter) *);
// //         }
// //         :nth-child(3) {
// //           grid-area: cta1;
// //           column: 1;
// //           padding-bottom: 0;
// //         }
// //         :nth-child(4) {
// //           grid-area: heading2;
// //           column: 2;
// //           padding-left: calc(var(--grid-gutter) *);
// //         }
// //         :nth-child(5) {
// //           grid-area: body2;
// //           column: 2;
// //           padding-left: calc(var(--grid-gutter) *);
// //         }
// //         :nth-child(6) {
// //           grid-area: cta2;
// //           column: 2;
// //           padding-left: calc(var(--grid-gutter) *);
// //           padding-bottom: 0;
// //         }
// //       }
// //     }
// //     ${
// //       "" /* .contentSection__grid {
// //       display: grid;
// //       grid-template-columns: 50% 50%;
// //       grid-template-areas:
// //         "heading heading"
// //         "body body";
// //       grid-column-gap: var(--grid-gutter);
// //       column-gap: var(--grid-gutter);
// //       padding-right: var(--grid-gutter);
// //     }
// //     .contentSection__smallHeading {
// //       margin-bottom: 2rem;
// //     }
// //     .contentSection_grid p:firstchild {
// //       color: red;
// //       grid-area: heading;
// //       grid-column: 1;
// //     } */
// //     }
// //   }
// // `;



import styled from "styled-components";

export const ContentSectionStyles2 = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-teal);
  padding-top: var(--page-intro-small);
  border-bottom: 1px solid var(--racoma-light);
  padding-bottom: var(--page-section);

  .timelineGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    width: 100%;
    .headerText {
      color: var(--racoma-light);
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: var(--font-weight-h5);
      font-size: var(--font-size-h6);
      line-height: var(--line-height-h5);
      letter-spacing: var(--letter-spacing-h5);
    }
    .subText {
      color: var(--racoma-light);
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: var(--font-weight-h6);
      font-size: 12px;
      line-height: var(--line-height-h6);
      letter-spacing: var(--letter-spacing-h6);
      line-height: 1.6;
    }
    .item-11 {
      grid-column: 1 / span 5;
      height: 25px;
      position: relative;
      margin-top: 12px;
      .line {
        height: 1px;
        background-color: var(--racoma-light);
        margin-top: 10px;

      }
      .circleContainer {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        top: 0;
        padding-left: calc((100% / 5 / 2));
        padding-right: calc((100% / 5 / 2));
        .circle {
          height: 20px;
          width: 20px;
          background-color: var(--racoma-light);
          border-radius: 50%;
        }
        .circle:first-of-type {
          margin-left: -10px;
        }
        .circle:last-of-type {
          margin-right: -10px;
        }
      }
    }
  }

  .item-15.headerText {
     {
      align-items: flex-start;
    }
  }
  .item20.subText {
    align-items: flex-start;
  }

  .circleContainer {
    width: 100%;
  }

  .timelineGrid div {
    color: white;
    text-align: center;
  }

  @media only screen and (max-width: 720px) {
    .timelineGrid {
      .headerText {
        font-size: 10px;
      }
      .subText {
        font-size: 8px;
      }
      .item-11 {
        .line {
          margin-top: 5px;
        }
        .circleContainer {
          .circle {
            height: 10px;
            width: 10px;
          }
          .circle:first-of-type {
            margin-left: -5px;
          }
          .circle:last-of-type {
            margin-right: -5px;
          }
        }
      }
    }
  }
`;

