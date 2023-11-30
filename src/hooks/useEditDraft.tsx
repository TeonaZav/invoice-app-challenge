import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../services/apiInvoices";
import { toast } from "react-hot-toast";

export function useEditDraft() {
  const queryClient = useQueryClient();

  const { mutate: editDraft, isLoading: isEditing } = useMutation({
    mutationFn: ({ changedDraft, id }) => updateInvoice(changedDraft, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editDraft };
}
