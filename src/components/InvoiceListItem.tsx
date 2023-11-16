import styled from "styled-components";
import { currencyFormat } from "../utils/helpers";
import OvalOrange from "../assets/oval-orange.svg";
import OvalGreen from "../assets/oval-green.svg";
import OvalDraft from "../assets/oval-draft.svg";

interface InvoiceListItemProps {
  id: string;
  clientName: string;
  paymentDue: string;
  total: number;
  status: string;
}

function InvoiceListItem({
  id,
  clientName,
  paymentDue,
  total,
  status,
}: InvoiceListItemProps) {
  return (
    <StyledListItem>
      <div className="flex-ct-1">
        <p className="bold">
          <span className="pale">#</span>
          {id}
        </p>
        <p className="pale">{paymentDue}</p>
      </div>
      <p className="name pale">{clientName}</p>

      <p className="total bold">{currencyFormat(total)}</p>

      <div className={`status ${status}`}>
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
      </div>
    </StyledListItem>
  );
}
export default InvoiceListItem;

const StyledListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  width: 32.7rem;
  height: 13.4rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);

  .pale {
    color: var(--blue-grey-color1);
    font-weight: 500;
    font-size: 1.3rem;
  }

  .bold {
    color: var(--blue-black-color1);
    font-weight: 700;
    font-size: 1.5rem;
  }
  .status {
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
  }
  .name {
    width: 50%;
    text-align: end;
  }
  .total {
    align-self: flex-end;
  }
  .flex-ct-1 {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  @media (min-width: 48em) {
    width: 67.2rem;
    height: 7.2rem;
    flex-direction: row;
    flex-wrap: nowrap;
    .flex-ct-1 {
      flex-direction: row;
      width: 30%;
      gap: 2.9rem;
    }
    .name {
      width: auto;
      text-align: end;
    }
    .status {
      align-self: center;
      text-align: end;
    }
  }
  @media (min-width: 90em) {
    width: 73rem;
    .flex-ct-1 {
      gap: 4.4rem;
    }
  }
`;
