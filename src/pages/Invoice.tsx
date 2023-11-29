import InvoiceContent from "../components/invoice/InvoiceContent";
import InvoicePageHeader from "../components/invoice/InvoicePageHeader";
import { StyledInvoicePage } from "../styles/invoicePageStyles/StyledInvoicePage";

function Invoice() {
  return (
    <StyledInvoicePage>
      <InvoicePageHeader status={"draft"} /> <InvoiceContent />
    </StyledInvoicePage>
  );
}

export default Invoice;
