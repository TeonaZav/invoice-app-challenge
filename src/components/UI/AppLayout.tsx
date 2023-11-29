import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
export default AppLayOut;

const Main = styled.main`
  background-color: var(--main-bg-color);
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 14rem;
  padding-bottom: 8rem;
  @media (min-width: 90em) {
    padding-top: 8rem;
  }
`;
