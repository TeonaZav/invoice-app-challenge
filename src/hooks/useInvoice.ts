import { useQuery } from "@tanstack/react-query";
import { getInvoice } from "../services/apiInvoices";
import { DefaultFormValuesType } from "../context/types";

export function useInvoice(id: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["invoices", id],
    queryFn: () => getInvoice(id),
    onSuccess: (data) => {
      console.log(data);
    },
  });
  // const invoice: IInvoice = data?.data() ? { ...data?.data(), id: data?.id } : undefined;
  const invoiceCont: DefaultFormValuesType = { ...data?.data() };
  const invoiceId: string | undefined = data?.id;
  const invoice = { id: invoiceId, ...invoiceCont };
  return { isLoading, error, invoice, getInvoice, invoiceId };
}
