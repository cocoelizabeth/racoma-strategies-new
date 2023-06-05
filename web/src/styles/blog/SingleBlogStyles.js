import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  padding-top: var(--page-intro-small);
  .blog-header {
    display: flex;
  }
  .left {
    max-width: 30%;
    width: 30%;
    min-width: 30%;
    padding-right: var(--grid-gutter);
  }
  .body {
    width: 70%;
    padding-right: var(--grid-gutter);
    padding-left: calc(var(--grid-gutter) * 4);
  }
  .title {
    ${"" /* width: 50%; */}
    text-transform: uppercase;
      padding-bottom: 2rem;
  }

  .publishedAt {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--racoma-light);
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
       padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--racoma-light);
    svg {
      height: 20px;
      width: 20px;
      display: none;
    }
    a {
      text-transform: uppercase;
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
        color: var(--racoma-navy);
      }
    }
  }
  ${
    "" /* .hr {
    margin: 2rem 0;
    color: var(--gray);
  } */
  }
  ${
    "" /* .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    } */
  }
  }
`;
