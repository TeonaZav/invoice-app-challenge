import styled from "styled-components";

export const FormContainer = styled.div`
  width: 32.7rem;
  margin-top: 12rem;
  margin: 12rem auto 0 auto;
  @media (min-width: 48em) {
    width: 50.4rem;
  }
  @media (min-width: 90em) {
    margin-left: 12rem;
    margin-top: 5.4rem;
  }
`;
export const AddressContainer = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: row;

  @media (min-width: 48em) {
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 50.4rem;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  width: 100%;
`;
