import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createOrEditInvoice } from "../services/apiInvoices";

export function useCreateInvoice() {
  const queryClient = useQueryClient();

  const { mutate: createInvoice, isLoading: isCreating } = useMutation({
    mutationFn: createOrEditInvoice,
    onSuccess: () => {
      toast.success("New invoice successfully created");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: ({ newData, id }) => createOrEditInvoice(newData, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createInvoice, isEditing, editInvoice };
}
