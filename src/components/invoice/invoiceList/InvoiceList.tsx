import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import { StyledList } from "../../../styles/invoiceListStyles/StyledInvoiceList";
import { useInvoices } from "../../../hooks/useInvoices";
import Loader from "../../UI/Loader";
import { useInvoiceListFilter } from "../../../context/listContext";

function InvoiceList() {
  const { dataInvoices, isLoading } = useInvoices();
  const totalNumberOfInvoices = dataInvoices?.length;
  const {
    state: { filtered: isFiltered, selectedOptions },
  } = useInvoiceListFilter();

  console.log(selectedOptions, isFiltered);
  if (isLoading) return <Loader />;

  const filtered =
    selectedOptions && selectedOptions?.length > 0
      ? dataInvoices?.filter((item: any) =>
          selectedOptions.includes(item.status)
        )
      : dataInvoices;

  return (
    <>
      {totalNumberOfInvoices && (
        <StyledList>
          <InvoiceListHeader itemCount={totalNumberOfInvoices} />
          {filtered?.map((invoice: any) => {
            return <InvoiceListItem key={invoice.id} {...invoice} />;
          })}
        </StyledList>
      )}
    </>
  );
}

export default InvoiceList;
