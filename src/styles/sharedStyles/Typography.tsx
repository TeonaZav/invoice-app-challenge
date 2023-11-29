import styled, { css } from "styled-components";

export const P = styled.p<{ color: string }>`
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

export const H2 = styled.h3`
  font-size: 2.4rem;

  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
  ${(props) =>
    props.color === "dark" &&
    css`
      color: var(--blue-black-color1);
    `}
  ${(props) =>
    props.color === "grey" &&
    css`
      color: var(--blue-grey-color1);
    `}
`;

export const H3 = styled.h3`
  margin-bottom: 2.4rem;
  ${(props) =>
    props.color === "indigo" &&
    css`
      color: var(--indigo-color);
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.8rem;
    `}
  ${(props) =>
    props.color === "grey" &&
    css`
      color: var(--blue-grey-color1);
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 3.2rem;
    `}
`;
