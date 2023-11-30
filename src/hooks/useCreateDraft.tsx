import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createDraft } from "../services/apiInvoices";

export function useSaveDraft() {
  const queryClient = useQueryClient();

  const { mutate: saveDraft, isLoading: isSaving } = useMutation({
    mutationFn: (data) => createDraft(data),
    onSuccess: () => {
      toast.success("New draft successfully created");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSaving, saveDraft };
}
