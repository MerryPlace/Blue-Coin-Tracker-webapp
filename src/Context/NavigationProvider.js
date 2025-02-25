import React from "react";

export const NavigationContext = React.createContext();

function NavigationProvider({ children }) {
  const [navLevel, setNavLevel] = React.useState(null);
  const [navCoin, setNavCoin] = React.useState(null);

  const navBack = () => {
    console.log("nav back");
    if (navCoin !== null) {
      setNavCoin(null);
    } else if (navLevel !== null) {
      setNavLevel(null);
    }
  };

  return (
    <NavigationContext.Provider
      value={{ setNavLevel, setNavCoin, navBack, navLevel, navCoin }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
