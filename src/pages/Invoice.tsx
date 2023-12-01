import ButtonGoBack from "../components/BtnGoBack";
import InvoiceContent from "../components/invoice/InvoiceContent";
import InvoicePageHeader from "../components/invoice/InvoicePageHeader";
import { StyledInvoicePage } from "../styles/invoicePageStyles/StyledInvoicePage";

function Invoice() {
  return (
    <StyledInvoicePage>
      <ButtonGoBack />
      <InvoicePageHeader status={"draft"} /> <InvoiceContent />
    </StyledInvoicePage>
  );
}

export default Invoice;
