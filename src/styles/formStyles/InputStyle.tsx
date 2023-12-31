import styled, { css } from "styled-components";

const Input = styled.input<{
  $styletype?: string;
  $error?: boolean | undefined;
}>`
  border: 1px solid var(--input-border);
  color: var(--bold-color);
  background-color: var(--card-color);
  border-radius: 0.4rem;
  padding: 1.8rem 1rem;
  height: 4.8rem;

  ${(props) =>
    props.$error &&
    css`
      border: 1px solid var(--red-pale);
    `}
  ${(props) =>
    props.$styletype === "calculated" &&
    css`
      border: none;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5rem
      letter-spacing: -0.25px;
    `};
`;

export default Input;
