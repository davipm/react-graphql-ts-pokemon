import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Grid = styled.section`
  display: grid;
  margin: 2rem auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
