import React from "react";
import styles from "./CoinList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";
import { ChecklistContext } from "../../Context/ChecklistProvider";
import CoinDetail from "../CoinDetail";
import BlueCoinCheckbox from "../BlueCoinCheckbox";

function CoinList({ level }) {
  const { navCoin, navLevel, setNavCoin } = React.useContext(NavigationContext);
  const { coinChecklist, toggleCoin } = React.useContext(ChecklistContext);

  if (navCoin !== null) {
    return (
      <CoinDetail
        coin={level.coins[navCoin]}
        guideURL={level.link}
        coinChecked={coinChecklist[navLevel].coins[navCoin]}
        onCoinChange={() => {
          toggleCoin(navLevel, navCoin);
        }}
      />
    );
  }

  return (
    <div className={styles.coinList}>
      {level.coins.map((coin, coinNum) => (
        <div className={styles.coinItem} key={coinNum}>
          <div className={styles.checkboxWrapper}>
            <BlueCoinCheckbox
              checked={coinChecklist[navLevel].coins[coinNum]}
              onChange={() => {
                toggleCoin(navLevel, coinNum);
              }}
            />
          </div>
          <button
            onClick={() => {
              setNavCoin(coinNum);
            }}
          >
            <div className={styles.coinTitle}>{coin.title}</div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default CoinList;
