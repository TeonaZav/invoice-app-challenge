import styled from "styled-components";
import LogoBg from "../../assets/logo-bg.svg";
import Avatar from "../../assets/image-avatar.jpg";
function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={LogoBg} alt="" />
      </div>
      <div className="avatar-wrap">
        <img src={Avatar} alt="avatar" />
      </div>
    </StyledHeader>
  );
}
export default Header;
const StyledHeader = styled.header`
  height: 7.2rem;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg-color);
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
  @media (min-width: 48em) {
    .avatar-wrap {
      width: 9.6rem;
    }
  }
  @media (min-width: 90em) {
  }
`;
