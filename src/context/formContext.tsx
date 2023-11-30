import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

export const InvoiceFormContext = createContext(initialState);

export const InvoiceFormProvider = ({
  reducer,
  initialState,
  children,
}: any) => {
  return (
    <InvoiceFormContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </InvoiceFormContext.Provider>
  );
};

export const useInvoiceContextForm = () => useContext(InvoiceFormContext);
