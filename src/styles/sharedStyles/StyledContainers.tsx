import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 32.7rem;
  padding: 0 2.4rem;
  background-color: var(--card-color);
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  @media (min-width: 48em) {
    width: 67.2rem;
  }
  @media (min-width: 90em) {
    width: 73rem;
  }
`;

export const ButtonPanelCt = styled.div<{ $ct: string }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: var(--card-color);

  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  ${(props) =>
    props.$ct === "form" &&
    css`
      height: 11rem;
      padding: 3.3rem 2.4rem 8.8rem, 2.4rem;
      @media (min-width: 48em) {
        justify-content: space-between;
        background-color: var(--drawer-bg);
        box-shadow: rgba(72, 84, 159, 0.212) 0px -7px 40px -7px;
      }
    `}
  ${(props) =>
    props.$ct === "invoice" &&
    css`
      height: 11rem;

      @media (min-width: 48em) {
        justify-content: flex-end;
        gap: 1rem;
        height: 100%;
      }
    `}
  @media (min-width: 48em) {
    position: static;
    width: 100%;
    left: 0;
    transform: none;
    box-shadow: none;
  }
`;
