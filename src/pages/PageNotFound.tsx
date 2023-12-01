import styled from "styled-components";
import NotFound from "../assets/404-not-found.svg";
import { H2 } from "../styles/sharedStyles/Typography";
import ButtonGoBack from "../components/BtnGoBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  background-color: var(--main-bg-color);
`;

const Box = styled.div`
  background-color: var(--main-bg-color);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <img src={NotFound} alt="error 404" />
        <H2>Page not found</H2>
        <ButtonGoBack />
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
