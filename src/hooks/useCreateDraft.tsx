import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createDraft } from "../services/apiInvoices";
import { FormValues } from "../components/invoice/form/Type";

export function useSaveDraft() {
  const queryClient = useQueryClient();

  const { mutate: saveDraft, isLoading: isSaving } = useMutation({
    mutationFn: (changedDraft: FormValues) => createDraft(changedDraft),
    onSuccess: () => {
      toast.success("New draft successfully created");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err: FirestoreError) => toast.error(err?.message),
  });

  return { isSaving, saveDraft };
}
