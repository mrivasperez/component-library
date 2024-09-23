import React, { createContext } from "react";

const NavigationContext = createContext({});

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};
export { NavigationProvider };
export default NavigationContext;
