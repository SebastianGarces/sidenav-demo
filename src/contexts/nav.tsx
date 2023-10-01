import { createContext, ReactNode, useContext, useState } from "react";

const NavigationContext = createContext<NavigationContextProps>({
  isNavCollapsed: true,
  setIsNavCollapsed: () => {},
});

type NavigationContextProps = {
  isNavCollapsed: boolean;
  setIsNavCollapsed: (isNavCollapsed: boolean) => void;
};

export const useNavigationContext = () => useContext(NavigationContext);

type NavigationProviderProps = { children: ReactNode };

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <NavigationContext.Provider value={{ isNavCollapsed, setIsNavCollapsed }}>
      {children}
    </NavigationContext.Provider>
  );
}
