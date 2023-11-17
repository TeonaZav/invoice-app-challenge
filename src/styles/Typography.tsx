import styled, { css } from "styled-components";

export const P = styled.p`
  ${(props) =>
    props.color === "pale" &&
    css`
      color: var(--blue-grey-color1);
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.8rem;
    `}
  ${(props) =>
    props.color === "bold" &&
    css`
      color: var(--blue-black-color1);
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.5rem;
    `}
    ${(props) =>
    props.color === "paid" &&
    css`
      color: var(--color-green);
      font-weight: 700;
      font-size: 1.5rem;
    `}
    ${(props) =>
    props.color === "pending" &&
    css`
      color: var(--color-orange);
      font-weight: 700;
      font-size: 1.5rem;
    `}
    ${(props) =>
    props.color === "draft" &&
    css`
      color: var(--blue-grey-color1);
      font-weight: 700;
      font-size: 1.5rem;
    `}
`;
