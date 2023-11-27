import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  @media (min-width: 48em) {
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
  }
  @media (min-width: 90em) {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
  }
`;
export const StyledSection = styled.section<{ $child: string }>`
  ${(props) =>
    props.$child === "1" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-self: flex-start;
      margin-bottom: 3.1rem;
      @media (min-width: 90em) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2.1rem;
      }
    `}
  ${(props) =>
    props.$child === "2" &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 6rem;
      align-self: flex-start;
      margin-bottom: 3.8rem;
      @media (min-width: 90em) {
        gap: 11.7rem;
        margin-bottom: 4.7rem;
      }
    `}
`;
