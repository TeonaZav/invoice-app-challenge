import styled from "styled-components";
import Lottie from "lottie-react";
import Spinner from "../../assets/spinner.json";
const Loader = () => {
  return (
    <StyledLoader>
      <div className="loading-img fixed left-1/2 bottom-0 z-30 w-[30rem] translate-x-[-50%]">
        <Lottie animationData={Spinner} />
      </div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50%;
  z-index: 1500;
  transform: translateX(-50%);
`;
export default Loader;
