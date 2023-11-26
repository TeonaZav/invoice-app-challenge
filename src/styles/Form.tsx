import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  width: 32.7rem;
  margin-top: 12rem;
  margin: 12rem auto 0 auto;
  padding: 3.3rem 2.4rem 0rem, 2.4rem;

  @media (min-width: 48em) {
    width: 100%;
    padding: 5.6rem 2.4rem 0rem 5.6rem;
  }
  @media (min-width: 90em) {
    margin-top: 5.4rem;
  }
`;
export const AddressContainer = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 48em) {
    box-sizing: border-box;
    width: 50.4rem;
  }
`;
export const DateDescriptionWrap = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 48em) {
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50.4rem;
  }
`;

export const ItemCt = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 48em) {
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 50.4rem;
  }
`;
export const BtnDelete = styled.div`
  cursor: pointer;
  margin-bottom: -2rem;
  @media (min-width: 48em) {
  }
`;
export const ItemsCt = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 20rem;

  @media (min-width: 48em) {
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50.4rem;
    margin-bottom: 0rem;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 48em) {
    width: 50.4rem;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--blue-grey-color2);
  line-height: 1.5rem;
  ${(props) =>
    props.color === "error" &&
    css`
      color: var(--red-color);
    `}
`;
export const ButtonPanelCt = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: var(--card-color);

  box-shadow: rgba(72, 84, 159, 0.212) 0px -7px 40px -7px;
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 11rem;
  padding: 3.3rem 2.4rem 8.8rem, 2.4rem;
  margin: 0 auto;
  @media (min-width: 48em) {
    position: static;
    justify-content: space-between;
    width: 100%;
    left: 0;
    transform: none;
    box-shadow: none;
  }
`;
