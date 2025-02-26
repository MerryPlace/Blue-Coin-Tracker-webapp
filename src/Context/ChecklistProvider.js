import React from "react";
import emptyList from "../emptyList.json";
import { produce } from "immer";

export const ChecklistContext = React.createContext();

function ChecklistProvider({ children }) {
  const [coinChecklist, setCoinChecklist] = React.useState(emptyList);

  const toggleCoin = React.useCallback((levelCode, coinNum) => {
    setCoinChecklist(
      produce((draft) => {
        draft[levelCode].coins[coinNum] = !draft[levelCode].coins[coinNum];
      })
    );
  }, []);

  const getLevelCompletion = React.useCallback(
    (levelCode) => {
      let totalCoins = coinChecklist[levelCode].coins.length;
      let checkedCoins = 0;
      coinChecklist[levelCode].coins.forEach((coinChecked) => {
        if (coinChecked) {
          checkedCoins++;
        }
      });
      return checkedCoins / totalCoins;
    },
    [coinChecklist]
  );

  const getTotalCompletion = React.useCallback(() => {
    let checkedCoins = 0;
    Object.keys(coinChecklist).forEach((levelCode) => {
      coinChecklist[levelCode].coins.forEach((coinChecked) => {
        if (coinChecked) {
          checkedCoins++;
        }
      });
    });
    return checkedCoins / 240.0;
  }, [coinChecklist]);

  return (
    <ChecklistContext.Provider
      value={{
        coinChecklist,
        toggleCoin,
        getLevelCompletion,
        getTotalCompletion,
      }}
    >
      {children}
    </ChecklistContext.Provider>
  );
}

export default ChecklistProvider;
