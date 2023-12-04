import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAsPaid } from "../services/apiInvoices";
import { toast } from "react-hot-toast";

export function usePaid(id: string = "") {
  const queryClient = useQueryClient();

  const { mutate: markPaid, isLoading: isEditing } = useMutation({
    mutationFn: () => markAsPaid(id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoices", id] });
    },
    onError: (err: FirestoreError) => toast.error(err.message),
  });

  return { isEditing, markPaid };
}
