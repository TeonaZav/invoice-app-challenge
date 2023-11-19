import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteInvoice } from "../services/apiInvoices";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteInv } = useMutation({
    mutationFn: deleteInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteInv };
}
