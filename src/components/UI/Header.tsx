import styled from "styled-components";
import LogoBg from "../../assets/logo-bg.svg";
import BtnToggleTheme from "./BtnToggleTheme";
import Avatar from "./../../assets/image-avatar.jpg";

function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={LogoBg} alt="" />
      </div>
      <div className="header-right">
        <BtnToggleTheme />
        <div className="avatar-wrap">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1300;
  height: 7.2rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg-color);

  .header-right {
    display: flex;
    align-items: center;
    height: 100%;
    width: 15rem;
    gap: 3rem;
  }
  .avatar-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 8rem;
    & img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 100%;
    }
    border-left: 1px solid var(--header-border-color);
  }
  @media (min-width: 90em) {
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 10.3rem;
    .logo img {
      width: 10.3rem;
    }
    .header-right {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 15rem;
      gap: 3rem;
    }
    .avatar-wrap {
      width: 100%;
      height: 9.6rem;
      & img {
        width: 4rem;
        height: 4rem;
      }
      border-top: 1px solid var(--header-border-color);
    }
  }
`;
