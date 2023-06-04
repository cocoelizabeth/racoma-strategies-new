import styled from "styled-components";

export const ContentSectionStyles = styled.div`
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

