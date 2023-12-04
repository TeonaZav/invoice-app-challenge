export type DefaultFormValuesType = {
  id?: string | undefined;
  createdAt?: string | undefined;
  paymentDue?: string | undefined;
  description?: string | undefined;
  paymentTerms?: number | null | undefined;
  clientName?: string | undefined;
  clientEmail?: string | undefined;
  status?: string | undefined;
  senderAddress?: {
    street?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    country?: string | undefined;
  };
  clientAddress?: {
    street?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    country?: string | undefined;
  };
  items?: Array<{
    id?: string | undefined;
    name?: string | undefined;
    quantity?: number | undefined;
    price?: number | undefined;
    total: number | undefined;
  }>;
  total?: number | undefined;
};

export type StateType = {
  isEditSession: boolean | undefined;
  drawerIsOpen: boolean | undefined;
  default: DefaultFormValuesType | undefined;
};

export const enum REDUCER_ACTION_TYPE {
  EDIT_FORM,
  CLOSE_DRAWER,
  OPEN_DRAWER,
  TOGGLE_DRAWER,
  END_EDIT,
  RESET_FORM,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: DefaultFormValuesType;
};
