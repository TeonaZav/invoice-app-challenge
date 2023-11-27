import { useQuery } from "@tanstack/react-query";
import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import { db } from "../../../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { StyledList } from "../../../styles/invoiceListStyles/StyledInvoiceList";

function InvoiceList() {
  const invoiceCollectionRef = collection(db, "invoices");

  const getInvoices = async () => {
    const data = await getDocs(invoiceCollectionRef);
    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  if (isLoading) return;

  const dataInvoices = data?.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const totalNumberOfInvoices = dataInvoices?.length;

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
