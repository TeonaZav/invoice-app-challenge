import styled from "styled-components";

export const FormContainer = styled.div`
  width: 32.7rem;
  margin: 0 auto;
  padding: 3.3rem 2.4rem 0rem, 2.4rem;

  @media (min-width: 48em) {
    width: 100%;
    padding: 5.6rem 2.4rem 0rem 5.6rem;
  }
  @media (min-width: 90em) {
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
  justify-self: center;
  @media (min-width: 48em) {
    width: 50.4rem;
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 11rem;
  h2 {
    margin-bottom: 0;
  }
  img {
    cursor: pointer;
  }
  @media (min-width: 48em) {
    img {
      cursor: pointer;
      margin-right: 3.2rem;
    }
  }
`;
