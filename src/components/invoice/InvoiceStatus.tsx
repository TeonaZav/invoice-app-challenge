import styled from "styled-components";
import OvalOrange from "../../assets/oval-orange.svg";
import OvalGreen from "../../assets/oval-green.svg";
import OvalDraft from "../../assets/oval-draft.svg";

interface StatusProps {
  status: string;
}

function Status({ status }: StatusProps) {
  return (
    <StyledStatus className={status}>
      <img
        src={
          status === "paid"
            ? `${OvalGreen}`
            : status === "pending"
            ? `${OvalOrange}`
            : `${OvalDraft}`
        }
        alt=""
      />
      <p>{status}</p>
    </StyledStatus>
  );
}
export default Status;

const StyledStatus = styled.div`
  width: 10.4rem;
  height: 4rem;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  &.paid {
    color: var(--color-green);
    background-color: var(--pale-green);
  }
  &.pending {
    color: var(--color-orange);
    background-color: var(--pale-orange);
  }
  &.draft {
    color: var(--dark-blue-color);
    background-color: var(--main-bg-color);
  }

  @media (min-width: 48em) {
    .status {
      align-self: center;
      text-align: end;
    }
  }
`;
