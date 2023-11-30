import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../services/apiInvoices";
import { toast } from "react-hot-toast";

export function useEditInvoice() {
  const queryClient = useQueryClient();

  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: ({ changedData, id }) => updateInvoice(changedData, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editInvoice };
}
