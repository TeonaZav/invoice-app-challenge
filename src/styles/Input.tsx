import styled, { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--light-blue-color);
  background-color: var(--card-color);
  border-radius: 0.4rem;
  padding: 1.8rem 2rem;

  ${(props) =>
    props.color === "error" &&
    css`
      border: 1px solid var(--red-color);
    `}
`;

export default Input;
