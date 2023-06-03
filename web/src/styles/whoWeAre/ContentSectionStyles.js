import styled from "styled-components";

export const ContentSectionStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  padding-bottom: calc(var(--page-intro-small) - 2rem);
  width: 100%;
  h2 {
    text-transform: uppercase;
  }

  .introContainer {
    display: flex;
    flex-direction: column;
    margin-top: var(--page-meta-bar);

    .headshotContainer {
      .sectionTitle {
        h2 {
        }
        h5 {
        }
      }
      .imageContainer {
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        display: flex;
        flex-direction: column;
        padding-right: 50%;
        margin-top: 3.5rem;
        .img {
          margin-bottom: 2.4rem;
        }
        .whoWeAre__iconsList {
          margin-bottom: 3.5rem;
          li {
            display: inline-block;
            margin-right: 1rem;
            a {
              display: inline-block;
              width: 25px;
              color: var(--racoma-light);
            }
            :hover {
              a {
                color: var(--racoma-navy);
              }
            }
          }
        }
      }
    }
  }

  .about.body {
    p {
      font-weight: var(--font-weight-medium);
      font-size: 2.2rem;
      line-height: 1.45;
    }
    p + p {
      margin-top: 1.4em;
    }



    ol > li {
      ${
        "" /* font-size: var(--font-size-large);
      font-weight: var(--font-weight-regular);
      margin-bottom: 2rem; */
      }
    }
    strong {
      text-transform: uppercase;
    }
  }
  .whoWeAre__iconsList {
  }

  @media only screen and (min-width: 720px) {
  }

  @media only screen and (min-width: 1280px) {
    .introContainer {
      flex-direction: row;
    }
  }
`;