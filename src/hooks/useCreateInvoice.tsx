import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createInvoice } from "../services/apiInvoices";

export function useCreateInvoice() {
  const queryClient = useQueryClient();

  const { mutate: createInv, isLoading: isCreating } = useMutation({
    mutationFn: createInvoice,
    onSuccess: () => {
      toast.success("New invoice successfully created");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (err: FirestoreError) => toast.error(err.message),
  });

  return { isCreating, createInv };
}
