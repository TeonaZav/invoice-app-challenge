import {
  ReactNode,
  createContext,
  useCallback,
  ReactElement,
  useContext,
  useEffect,
} from "react";

import { useLocalStorageState } from "../hooks/useLocalStorage";

type ChildrenType = {
  children?: ReactNode | ReactElement | ReactElement[] | undefined;
};

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

function DarkModeProvider({ children }: ChildrenType) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "themeDark");

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((isDark: boolean) => !isDark);
  }, [setIsDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

const useDarkTheme = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
};

export { DarkModeProvider, useDarkTheme };
