import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useCallback,
  ReactElement,
} from "react";
import {
  DefaultFormValuesType,
  ReducerAction,
  StateType,
  REDUCER_ACTION_TYPE,
} from "./types";
import { defaultVAl } from "../components/invoice/form/defaultValues";

const initialState: StateType = {
  isEditSession: false,
  drawerIsOpen: false,
  default: defaultVAl,
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.EDIT_FORM:
      return {
        ...state,
        default: action.payload,
        drawerIsOpen: true,
        isEditSession: true,
      };
    case REDUCER_ACTION_TYPE.CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: false,
      };
    case REDUCER_ACTION_TYPE.OPEN_DRAWER:
      return {
        ...state,
        drawerIsOpen: true,
      };
    case REDUCER_ACTION_TYPE.TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsOpen: !state.drawerIsOpen,
      };
    case REDUCER_ACTION_TYPE.END_EDIT:
      return {
        ...state,
        drawerIsOpen: false,
        isEditSession: false,
      };
    default:
      return state;
  }
};

const useInvoiceContextForm = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeDrawer = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_DRAWER }),
    []
  );

  const openDrawer = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.OPEN_DRAWER }),
    []
  );

  const drawerToggle = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_DRAWER }),
    []
  );

  const endFormEdit = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.END_EDIT }),
    []
  );

  const fillFormForEdit = useCallback(
    (invoice: DefaultFormValuesType | undefined) => {
      dispatch({
        type: REDUCER_ACTION_TYPE.EDIT_FORM,
        payload: { ...invoice },
      });
    },
    []
  );

  return {
    state,
    fillFormForEdit,
    closeDrawer,
    openDrawer,
    drawerToggle,
    endFormEdit,
  };
};

type UseInvoiceContextFormType = ReturnType<typeof useInvoiceContextForm>;

const initContextState: UseInvoiceContextFormType = {
  state: initialState,
  closeDrawer: () => {},
  openDrawer: () => {},
  drawerToggle: () => {},
  endFormEdit: () => {},
  fillFormForEdit: () => {},
};

export const InvoiceFormContext =
  createContext<UseInvoiceContextFormType>(initContextState);

type ChildrenType = {
  children?: ReactNode | ReactElement | ReactElement[] | undefined;
};

export const InvoiceFormProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <InvoiceFormContext.Provider value={useInvoiceContextForm(initialState)}>
      {children}
    </InvoiceFormContext.Provider>
  );
};

type UseInvoiceFormHookType = {
  state: StateType;
  closeDrawer: () => void;
  openDrawer: () => void;
  drawerToggle: () => void;
  endFormEdit: () => void;
  fillFormForEdit: (invoice: DefaultFormValuesType | undefined) => void;
};

export const useInvoiceForm = (): UseInvoiceFormHookType => {
  const {
    state,
    closeDrawer,
    openDrawer,
    drawerToggle,
    endFormEdit,
    fillFormForEdit,
  } = useContext(InvoiceFormContext);
  return {
    state,
    closeDrawer,
    openDrawer,
    drawerToggle,
    endFormEdit,
    fillFormForEdit,
  };
};
