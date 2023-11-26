import styled, { css } from "styled-components";

const Input = styled.input<{ styletype?: string }>`
  border: 1px solid var(--light-blue-color);
  background-color: var(--card-color);
  border-radius: 0.4rem;
  padding: 1.8rem 1rem;
  height: 4.8rem;
  ${(props) =>
    props.color === "error" &&
    css`
      border: 1px solid var(--red-color);
    `}
  ${(props) =>
    props.styletype === "calculated" &&
    css`
      border: none;
      padding: 0;
      color: var(--blue-grey-color1);
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5rem
      letter-spacing: -0.25px;
    `}
`;

export default Input;
