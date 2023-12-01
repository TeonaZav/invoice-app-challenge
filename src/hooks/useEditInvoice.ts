import { FirestoreError } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../services/apiInvoices";
import { toast } from "react-hot-toast";
import { FormValues } from "../components/invoice/form/Type";

interface Idata {
  id: string | undefined;
  changedData: FormValues;
}

export function useEditInvoice(id: string = "") {
  const queryClient = useQueryClient();

  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: ({ changedData }: Idata) => updateInvoice(changedData, id),
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoices", id] });
    },
    onError: (err: FirestoreError) => toast.error(err.message),
  });

  return { isEditing, editInvoice };
}
