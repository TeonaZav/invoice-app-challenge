import { useState, useCallback, createContext, ReactNode } from "react";

interface IUIContext {
  openDrawer: boolean;
  toggleDrawer: (open: boolean, mode: boolean) => () => void;
  children: ReactNode;
  isEditSession: boolean;
}

const defaultState = {
  openDrawer: false,
  isEditSession: true,
};

const UIContext = createContext<Partial<IUIContext>>(defaultState);

const UIProvider = ({ children }: IUIContext) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = useCallback(
    (open: boolean) => () => {
      setOpenDrawer(open);
    },
    []
  );

  return (
    <UIContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
export { UIProvider, UIContext };
