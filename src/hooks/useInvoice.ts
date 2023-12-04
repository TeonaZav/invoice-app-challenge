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

  const invoiceId: string | undefined = data?.id;

  const invoice = data?.data()
    ? {
        ...(data?.data() as DefaultFormValuesType),
        id: data?.id as string | undefined,
      }
    : undefined;
  return { isLoading, error, invoice, getInvoice, invoiceId };
}
