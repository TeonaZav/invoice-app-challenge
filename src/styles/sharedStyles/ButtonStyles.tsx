import styled, { css } from "styled-components";

const Button = styled.button<{ $btn: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  border-radius: 2.4rem;
  color: #fff;
  height: 4.8rem;
  ${(props) =>
    props.$btn === "btnAdd" &&
    css`
      width: 9rem;
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
        background-color: #ffffff;
        border-radius: 100%;
      }
    `}

  ${(props) =>
    props.$btn === "btnTheme" &&
    css`
      background: none;
    `}

  ${(props) =>
    props.$btn === "newproduct" &&
    css`
      width: 100%;
      justify-content: center;
      background-color: var(--add-item-color);
      color: var(--blue-grey-color2);
      &:hover {
        background-color: var(--add-item-hover);
      }
    `}

  ${(props) =>
    props.$btn === "edit" &&
    css`
      width: 7.3rem;
      justify-content: center;
      background-color: var(--light-blue-color2);
      color: var(--blue-grey-color2);
      &:hover {
        background-color: var(--light-blue-color);
      }
    `}
    ${(props) =>
    props.$btn === "delete" &&
    css`
      width: 8.9rem;
      justify-content: center;
      background-color: var(--red-color);
      color: #ffffff;
      &:hover {
        background-color: var(--red-pale);
      }
    `}


    ${(props) =>
    (props.$btn === "markpaid" || props.$btn === "save") &&
    css`
      width: 13.8rem;
      justify-content: center;
      background-color: var(--indigo-color);
      color: #ffffff;
      &:hover {
        background-color: var(--indigo-color-pale);
      }
      &:disabled {
        background-color: var(--blue-grey-color1);
      }
    `}
    ${(props) =>
    (props.$btn === "cancel" || props.$btn === "discard") &&
    css`
      width: 8.4rem;
      justify-content: center;
      background-color: var(--light-blue-color2);
      color: var(--blue-grey-color2);
      &:hover {
        background-color: var(--light-blue-color);
      }
    `}
    ${(props) =>
    props.$btn === "draft" &&
    css`
      width: 13.3rem;
      justify-content: center;
      background-color: var(--header-bg-color);
      color: var(--light-blue-color);
      &:hover {
        background-color: var(--blue-black-color1);
      }
    `}

    ${(props) =>
    props.$btn === "btnGoBack" &&
    css`
      width: 11rem;
      padding: 0.5rem 1.5rem;
      justify-content: space-between;
      font-size: 1.5rem;
      font-weight: 700;
      background-color: transparent;
      color: var(--bold-color);
      img {
        width: 1rem;
      }
      &:hover {
        background-color: var(--add-item-hover);
      }
    `}
`;
export default Button;
