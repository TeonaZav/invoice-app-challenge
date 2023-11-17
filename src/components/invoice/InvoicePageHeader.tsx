import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Status from "./InvoiceStatus";
import Container from "../../styles/Container";
import { P } from "../../styles/Typography";

interface InvoicePageHeaderProps {
  status: string;
}

function InvoicePageHeader({ status }: InvoicePageHeaderProps) {
  // const isTablet = useMediaQuery({ query: "(min-width: 48em)" });
  return (
    <Container>
      <StyledInvoicePageHeader className="invoice-page-header">
        <div>
          <P color="pale">Status</P>
          <Status status={status} />
        </div>
      </StyledInvoicePageHeader>
    </Container>
  );
}
export default InvoicePageHeader;

const StyledInvoicePageHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9.1rem;
  @media (min-width: 48em) {
    height: 8.8rem;
  }
  @media (min-width: 90em) {
  }
`;
