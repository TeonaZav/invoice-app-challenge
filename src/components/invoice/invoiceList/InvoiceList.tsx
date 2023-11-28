import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import { StyledList } from "../../../styles/invoiceListStyles/StyledInvoiceList";
import { useInvoices } from "../../../hooks/useInvoices";
import Loader from "../../UI/Loader";

function InvoiceList() {
  const { dataInvoices, isLoading } = useInvoices();
  const totalNumberOfInvoices = dataInvoices?.length;

  if (isLoading) return <Loader />;

  return (
    <>
      {totalNumberOfInvoices && (
        <StyledList>
          <InvoiceListHeader itemCount={totalNumberOfInvoices} />
          {dataInvoices?.map((invoice: any) => {
            return <InvoiceListItem key={invoice.id} {...invoice} />;
          })}
        </StyledList>
      )}
    </>
  );
}

export default InvoiceList;
