import styled from "styled-components";

export const StyledInvoicePageHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 9.1rem;

  @media (min-width: 48em) {
    height: 8.8rem;
  }
`;

export const StyledHeaderPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 48em) {
    justify-content: flex-start;
    gap: 2rem;
  }
`;
