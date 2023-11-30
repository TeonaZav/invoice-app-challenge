import { useQuery } from "@tanstack/react-query";
import { getInvoice } from "../services/apiInvoices";

export function useInvoice(id: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["invoices", id],
    queryFn: () => getInvoice(id),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const invoice = data?.data() ? { ...data?.data(), id: data?.id } : undefined;

  return { isLoading, error, invoice, getInvoice };
}
