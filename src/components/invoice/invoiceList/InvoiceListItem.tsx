import styled from "styled-components";
import { currencyFormat } from "../../../utils/helpers";
import Status from "../../UI/Status";
import { Container } from "../../../styles/sharedStyles/StyledContainers";
import { P } from "../../../styles/sharedStyles/Typography";

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
          <P color="pale">{paymentDue}</P>
        </div>
        <P color="pale" className="name">
          {clientName}
        </P>
        <P color="bold" className="total">
          {currencyFormat(total)}
        </P>
        <Status status={status} />
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

  @media (min-width: 48em) {
    height: 7.2rem;
    flex-wrap: nowrap;
    align-items: center;
    .flex-ct-1 {
      flex-direction: row;
      width: 30%;
      gap: 2.9rem;
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
