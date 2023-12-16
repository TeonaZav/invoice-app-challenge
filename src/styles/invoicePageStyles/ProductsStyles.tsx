import styled, { css } from "styled-components";

export const Products = styled.section`
  color: var(--main-text-color);
  background-color: var(--product-bg);
  width: 100%;
  border-radius: 8px 8px 0px 0px;
`;

export const PoductsList = styled.table`
  color: var(--main-text-color);
  background-color: var(--product-bg);
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  padding: 3.2rem;
`;

export const TH = styled.th<{ $justify: string }>`
  ${(props) =>
    props.$justify === "left" &&
    css`
      text-align: left;
      padding-bottom: 1.6rem;
    `}
  ${(props) =>
    props.$justify === "right" &&
    css`
      text-align: right;
      padding-bottom: 1.6rem;
    `}
`;
export const TD = styled.td<{ $justify: string }>`
  color: var(--main-text-color);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  ${(props) =>
    props.$justify === "left" &&
    css`
      text-align: left;
      padding-bottom: 1.6rem;
    `}
  ${(props) =>
    props.$justify === "right" &&
    css`
      text-align: right;
      padding-bottom: 1.6rem;
    `}
`;
export const PoductsListMobile = styled.div`
  color: var(--main-text-color);
  background-color: var(--product-bg);
  width: 100%;
  border-radius: 8px 8px 0px 0px;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  .product-row-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Subtotal = styled.div`
  width: 100%;
  height: 8rem;
  background-color: var(--subtotal-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;

  .subtotal {
    color: var(--light-blue-color);
    font-weight: 700;
    font-size: 2rem;
  }
  @media (min-width: 48em) {
    padding: 3.2rem;
  }
`;
