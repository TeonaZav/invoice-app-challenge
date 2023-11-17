import styled, { css } from "styled-components";

const Button = styled.button<{ btn: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  border-radius: 2.4rem;
  color: #fff;
  ${(props) =>
    props.btn === "btnAdd" &&
    css`
      width: 9rem;
      height: 4.4rem;
      padding: 0 1.7rem 0 0.5rem;
      justify-content: space-between;
      background-color: var(--indigo-color);
      &:hover {
        background-color: var(--indigo-color-pale);
      }
      .add {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.2rem;
        height: 3.2rem;
        background-color: var(--card-color);
        border-radius: 100%;
      }
    `}
`;
export default Button;
