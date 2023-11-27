import Status from "../UI/Status";
import { Container } from "../../styles/sharedStyles/StyledContainers";
import { P } from "../../styles/sharedStyles/Typography";
import InvoiceButtons from "../InvoiceButtons";
import {
  StyledInvoicePageHeader,
  StyledHeaderPanel,
} from "../../styles/invoicePageStyles/InvoiceHeadersStyles";
interface InvoicePageContentProps {
  status: string;
}

function InvoicePageHeader({ status }: InvoicePageContentProps) {
  return (
    <Container>
      <StyledInvoicePageHeader>
        <StyledHeaderPanel>
          <P color="pale">Status</P>
          <Status status={status} />
        </StyledHeaderPanel>
        <InvoiceButtons />
      </StyledInvoicePageHeader>
    </Container>
  );
}
export default InvoicePageHeader;
