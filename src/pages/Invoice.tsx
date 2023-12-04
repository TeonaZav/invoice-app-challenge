import ButtonGoBack from "../components/BtnGoBack";
import InvoiceContent from "../components/invoice/InvoiceContent";
import { StyledInvoicePage } from "../styles/invoicePageStyles/StyledInvoicePage";

function Invoice() {
  return (
    <StyledInvoicePage>
      <ButtonGoBack />
      <InvoiceContent />
    </StyledInvoicePage>
  );
}

export default Invoice;
