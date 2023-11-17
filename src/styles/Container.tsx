import styled from "styled-components";

const Container = styled.div`
  width: 32.7rem;
  padding: 0 2.4rem;
  background-color: #ffffff;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  @media (min-width: 48em) {
    width: 67.2rem;
    padding: 0 4.2rem;
  }
  @media (min-width: 90em) {
    width: 73rem;
  }
`;
export default Container;
