import { Container } from "../../styles/sharedStyles/StyledContainers";
import { P } from "../../styles/sharedStyles/Typography";
import {
  StyledContent,
  StyledSection,
} from "../../styles/invoicePageStyles/InvoiceContentStyles";
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
      <Container>
        <StyledContent>
          <StyledSection $child="1">
            <div>
              <P color="bold">
                <span className="pale">#</span>
                {id}
              </P>
              <P color="pale">{description}</P>
            </div>
            <div>
              <P color="pale">{senderAddress.street}</P>
              <P color="pale">{senderAddress.city}</P>
              <P color="pale">{senderAddress.postCode}</P>
              <P color="pale">{senderAddress.country}</P>
            </div>
          </StyledSection>
          <StyledSection $child="2">
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
          </StyledSection>
          <InvoiceProducts items={items} subtotal={total} />
        </StyledContent>
      </Container>
    </>
  );
}

export default InvoiceContent;
