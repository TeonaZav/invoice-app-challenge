import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import { db } from "../../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
// interface IAddress {
//   street: string;
//   city: string;
//   postCode: string;
//   country: string;
// }
// interface IItems {
//   name: string;
//   quantity: number;
//   price: number;
//   total: number;
// }
// interface IInvoice {
//   id?: string;
//   createdAt: string;
//   paymentDue: string;
//   description: string;
//   paymentTerms: number;
//   clientName: string;
//   clientEmail: string;
//   status: string;
//   senderAddress: IAddress;
//   clientAddress: IAddress;
//   items: IItems[];
//   total: number;
// }
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

const StyledList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
