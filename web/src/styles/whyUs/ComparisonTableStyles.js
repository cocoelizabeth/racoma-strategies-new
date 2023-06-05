import styled from 'styled-components';

export const ComparisonTableStyles = styled.div`
  background-color: var(--racoma-light);
  color: var(--racoma-teal);
  padding-top: var(--page-section);
  padding-bottom: var(--page-section);
  ${'' /* border-top: 1px solid var(--racoma-light); */}
  h2 {
    padding-bottom: var(--page-intro-small);
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 8px;
  }

  td,
  th {
    ${"" /* border-bottom: 1px solid var(--racoma-light); */}
    padding: 1.5rem;
    text-align: left;
    ${"" /* padding-left: 0; */}
    ${"" /* border-right: 1px solid var(--racoma-light); */}
  }

  th:nth-child(2),
  tr td:nth-child(2) {
    background: var(--racoma-navy);
    color: var(--racoma-light);
  }

  tr td:nth-child(4) {
    border-right: none;
  }

  th:nth-child(1),
  th:nth-child(2),
  th:nth-child(3),
  th:nth-child(4),
  th:nth-child(5) {
    border-right: 0;
  }

  th:first-of-type: {
    border: none;
  }

  tr {
    border-bottom: 1px solid var(--racoma-teal);
  }
  tr:last-of-type {
    border-bottom: none;
  }
  tr:first-of-type {
    border-bottom: 1px solid var(--racoma-teal);
  }

  @media only screen and (min-width: 720px) {
    table {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 1024px) {
    table {
      font-size: 15px;
      td,
      th {
        padding: 2rem;
      }
    }
  }


`;
