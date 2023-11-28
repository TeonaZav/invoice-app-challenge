import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../services/apiInvoices";

export function useInvoices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });
  const dataInvoices = data?.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return { isLoading, error, dataInvoices };
}
