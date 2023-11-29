import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { currencyFormat } from "../../../utils/helpers";
import Status from "../../UI/Status";
import { Container } from "../../../styles/sharedStyles/StyledContainers";
import { P } from "../../../styles/sharedStyles/Typography";
import Icon from "../../../assets/icon-arrow-right.svg";
import { FormatDate } from "../../../utils/helpers";
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
    <Container>
      <StyledListItem>
        <div className="flex-ct-1">
          <P color="bold">
            <span className="pale">#</span>
            {id}
          </P>
          <P color="pale">{FormatDate(paymentDue)}</P>
        </div>
        <P color="pale" className="name">
          {clientName}
        </P>
        <P color="bold" className="total">
          {currencyFormat(total)}
        </P>
        <div className="flex-ct-2">
          <Status status={status} />
          <NavLink to={`/invoice/${id}`}>
            <img src={Icon} alt="" className="open-invoice" />
          </NavLink>
        </div>
      </StyledListItem>
    </Container>
  );
}
export default InvoiceListItem;

const StyledListItem = styled.li`
  width: 100%;
  height: 13.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);

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
  .flex-ct-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .open-invoice {
    cursor: pointer;
  }
  @media (min-width: 48em) {
    height: 7.2rem;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    .flex-ct-1 {
      flex-direction: row;
      width: auto;
      gap: 1.6rem;
    }
    .name {
      width: auto;
      text-align: end;
    }
    .total {
      align-self: center;
    }
  }
  @media (min-width: 90em) {
    .flex-ct-1 {
      gap: 4.4rem;
    }
  }
`;
