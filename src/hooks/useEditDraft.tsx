import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../services/apiInvoices";
import { toast } from "react-hot-toast";
import { FormValues } from "../components/invoice/form/Type";

interface Idata {
  id: string;
  changedDraft: FormValues;
}

export function useEditDraft(id: string) {
  const queryClient = useQueryClient();

  const { mutate: editDraft, isLoading: isEditing } = useMutation({
    mutationFn: ({ changedDraft, id }: Idata) =>
      updateInvoice(changedDraft, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoices", id] });
    },
    onError: (err: FirestoreError) => toast.error(err.message),
  });

  return { isEditing, editDraft };
}
