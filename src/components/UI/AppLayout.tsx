import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <div>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
export default AppLayOut;

const Main = styled.main`
  background-color: tomato;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.6rem 2.4rem 10.5rem 2.4rem;
`;
