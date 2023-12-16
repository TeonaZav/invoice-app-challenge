import styled, { css } from "styled-components";
import OvalOrange from "../../assets/oval-orange.svg";
import OvalGreen from "../../assets/oval-green.svg";
import OvalDraft from "../../assets/oval-draft.svg";

interface StatusProps {
  status: string | undefined;
}

function Status({ status }: StatusProps) {
  return (
    <StyledStatus $status={status || "draft"}>
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

const StyledStatus = styled.div<{ $status: string }>`
  width: 10.4rem;
  height: 4rem;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${(props) =>
    props.$status === "paid" &&
    css`
      color: var(--color-green);
      background-color: var(--pale-green);
    `}
  ${(props) =>
    props.$status === "pending" &&
    css`
      color: var(--color-orange);
      background-color: var(--pale-orange);
    `}
    ${(props) =>
    props.$status === "draft" &&
    css`
      color: var(--dark-blue-color);
      background-color: #f8f8fb;
    `}

  @media (min-width: 48em) {
    align-self: center;
    text-align: end;
  }
`;
