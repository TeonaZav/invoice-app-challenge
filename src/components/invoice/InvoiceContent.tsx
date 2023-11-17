import styled from "styled-components";
import Container from "../../styles/Container";
import { P } from "../../styles/Typography";
import InvoiceProducts from "./InvoiceProducts";

const DUMMY_DATA = {
  id: "RG0314",
  createdAt: "2021-09-24",
  paymentDue: "2021-10-01",
  description: "Website Redesign",
  paymentTerms: 7,
  clientName: "John Morrison",
  clientEmail: "jm@myco.com",
  status: "paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "79 Dover Road",
    city: "Westhall",
    postCode: "IP19 3PF",
    country: "United Kingdom",
  },
  items: [
    {
      name: "New Logo",
      quantity: 1,
      price: 1532.33,
      total: 1532.33,
    },
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 2500.0,
      total: 2500.0,
    },
  ],
  total: 14002.33,
};
function InvoiceContent() {
  const {
    id,
    description,
    senderAddress,
    clientAddress,
    createdAt,
    paymentDue,
    clientName,
    clientEmail,
    items,
    total,
  } = DUMMY_DATA;

  return (
    <>
      <StyledInvoice>
        <Container>
          <div className="invoice-content">
            <section className="section-1">
              <div>
                <p className="bold">
                  <span className="pale">#</span>
                  {id}
                </p>
                <P color="pale">{description}</P>
              </div>
              <div>
                <P color="pale">{senderAddress.street}</P>
                <P color="pale">{senderAddress.city}</P>
                <P color="pale">{senderAddress.postCode}</P>
                <P color="pale">{senderAddress.country}</P>
              </div>
            </section>
            <section className="section-2">
              <div>
                <div>
                  <P color="pale">Invoice Date</P>
                  <P color="bold">{createdAt}</P>
                </div>
                <div>
                  <P color="pale">Payment Due</P>
                  <P color="bold">{paymentDue}</P>
                </div>
              </div>
              <div>
                <P color="pale">Bill To</P>
                <P color="bold">{clientName}</P>
                <div>
                  <P color="pale">{clientAddress.street}</P>
                  <P color="pale">{clientAddress.city}</P>
                  <P color="pale">{clientAddress.postCode}</P>
                  <P color="pale">{clientAddress.country}</P>
                </div>
              </div>
              <div>
                <P color="pale">Sent To</P>
                <P color="bold">{clientEmail}</P>
              </div>
            </section>
            <InvoiceProducts items={items} subtotal={total} />
          </div>
        </Container>
      </StyledInvoice>
    </>
  );
}

export default InvoiceContent;

const StyledInvoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .invoice-content {
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    .section-1 {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-self: flex-start;
      margin-bottom: 3.1rem;
    }
    .section-2 {
      display: flex;
      flex-wrap: wrap;
      gap: 6rem;
      align-self: flex-start;
      margin-bottom: 3.8rem;
    }
  }

  @media (min-width: 48em) {
    .invoice-content {
      padding-top: 3.4rem;
      padding-bottom: 3.4rem;
      .section-1 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2.1rem;
      }
      .section-2 {
        gap: 11.7rem;
        margin-bottom: 4.7rem;
      }
    }
  }
  @media (min-width: 90em) {
    .invoice-content {
      padding-top: 4.8rem;
      padding-bottom: 4.8rem;
    }
  }
`;
