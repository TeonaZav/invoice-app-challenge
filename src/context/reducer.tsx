import { FormValues } from "../components/invoice/form/Type";

type StateType = {
  isEditSession: boolean;
  drawerIsOpen: boolean;
  default: FormValues;
};
type ActionType = { type: string; payload: any };

export const initialState: StateType = {
  isEditSession: false,
  drawerIsOpen: false,
  default: {
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: null,
    clientName: "",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        id: "",
        name: "",
        quantity: 1,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  },
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "EDIT_FORM":
      return {
        ...state,
        default: { ...action.payload.invoice },
        drawerIsOpen: action.payload.drawer,
        isEditSession: true,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        drawerIsOpen: false,
      };
    case "OPEN_DRAWER":
      return {
        ...state,
        drawerIsOpen: true,
      };
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerIsOpen: action.payload,
      };
    case "END_EDIT":
      return {
        ...state,
        drawerIsOpen: false,
        isEditSession: false,
      };
    default:
      return state;
  }
};

export default reducer;
