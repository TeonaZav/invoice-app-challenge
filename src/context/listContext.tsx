import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useCallback,
  ReactElement,
} from "react";

export const enum REDUCER_ACTION_TYPE {
  FILTER_DATA,
  CLEAR_FILTER,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string[];
};

export type ListStateType = {
  filtered: boolean;
  selectedOptions: string[] | undefined;
};
const initialState: ListStateType = {
  filtered: false,
  selectedOptions: [],
};

const reducer = (
  state: ListStateType,
  action: ReducerAction
): ListStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FILTER_DATA:
      return {
        ...state,
        filtered: true,
        selectedOptions: action.payload,
      };
    case REDUCER_ACTION_TYPE.CLEAR_FILTER:
      return {
        ...state,
        filtered: false,
        selectedOptions: [],
      };

    default:
      return state;
  }
};

const useFilterContext = (initialState: ListStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterOption = useCallback((arr: string[] | undefined) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.FILTER_DATA,
      payload: arr,
    });
  }, []);

  const clearFilter = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_FILTER }),
    []
  );

  return {
    state,
    filterOption,
    clearFilter,
  };
};

type UseFilterContextType = ReturnType<typeof useFilterContext>;

const initContextState: UseFilterContextType = {
  state: initialState,
  filterOption: () => {},
  clearFilter: () => {},
};

export const FilterListContext =
  createContext<UseFilterContextType>(initContextState);

type ChildrenType = {
  children?: ReactNode | ReactElement | ReactElement[] | undefined;
};

export const FilterProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <FilterListContext.Provider value={useFilterContext(initialState)}>
      {children}
    </FilterListContext.Provider>
  );
};

type UseFilterHookType = {
  state: ListStateType;
  filterOption: (arr: string[] | undefined) => void;
  clearFilter: () => void;
};

export const useInvoiceListFilter = (): UseFilterHookType => {
  const { state, filterOption, clearFilter } = useContext(FilterListContext);
  return {
    state,
    filterOption,
    clearFilter,
  };
};
