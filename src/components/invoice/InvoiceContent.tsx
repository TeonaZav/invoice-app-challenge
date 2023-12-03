import { useParams } from "react-router-dom";
import { Container } from "../../styles/sharedStyles/StyledContainers";
import { P } from "../../styles/sharedStyles/Typography";
import {
  StyledContent,
  StyledSection,
} from "../../styles/invoicePageStyles/InvoiceContentStyles";
import InvoiceProducts from "./InvoiceProducts";
import Loader from "../UI/Loader";
import { useInvoice } from "../../hooks/useInvoice";

function InvoiceContent() {
  const { id: paramsId } = useParams() as { id: string };

  const { isLoading, invoice, invoiceId } = useInvoice(paramsId);
  console.log(invoice);
  if (isLoading) return <Loader />;
  return (
    <>
      {invoice ? (
        <Container>
          <StyledContent>
            <StyledSection $child="1">
              <div>
                <P color="bold">
                  <span className="pale">#</span>
                  {invoice?.id || invoiceId}
                </P>
                <P color="pale">{invoice?.description}</P>
              </div>
              <div>
                <P color="pale">{invoice?.senderAddress?.street}</P>
                <P color="pale">{invoice?.senderAddress?.city}</P>
                <P color="pale">{invoice?.senderAddress?.postCode}</P>
                <P color="pale">{invoice?.senderAddress?.country}</P>
              </div>
            </StyledSection>
            <StyledSection $child="2">
              <div>
                <div>
                  <P color="pale">Invoice Date</P>
                  <P color="bold">{invoice?.createdAt}</P>
                </div>
                <div>
                  <P color="pale">Payment Due</P>
                  <P color="bold">{invoice?.paymentDue}</P>
                </div>
              </div>
              <div>
                <P color="pale">Bill To</P>
                <P color="bold">{invoice?.clientName}</P>
                <div>
                  <P color="pale">{invoice?.clientAddress?.street}</P>
                  <P color="pale">{invoice?.clientAddress?.city}</P>
                  <P color="pale">{invoice?.clientAddress?.postCode}</P>
                  <P color="pale">{invoice?.clientAddress?.country}</P>
                </div>
              </div>
              <div>
                <P color="pale">Sent To</P>
                <P color="bold">{invoice?.clientEmail}</P>
              </div>
            </StyledSection>
            <InvoiceProducts items={invoice?.items} subtotal={invoice?.total} />
          </StyledContent>
        </Container>
      ) : null}
    </>
  );
}

export default InvoiceContent;
