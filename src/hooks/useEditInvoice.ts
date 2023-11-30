import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../services/apiInvoices";
import { toast } from "react-hot-toast";
import { FormValues } from "../components/invoice/form/Type";

interface Idata {
  id: string;
  changedData: FormValues;
}

export function useEditInvoice() {
  const queryClient = useQueryClient();

  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: ({ changedData, id }: Idata) => updateInvoice(changedData, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (err: FirestoreError) => toast.error(err.message),
  });

  return { isEditing, editInvoice };
}
