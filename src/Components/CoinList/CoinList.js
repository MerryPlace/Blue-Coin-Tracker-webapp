import React from "react";
// import styles from "./CoinList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";
import { ChecklistContext } from "../../Context/ChecklistProvider";
import CoinDetail from "../CoinDetail";

function CoinList({ level }) {
  const { navCoin, navLevel, setNavCoin } = React.useContext(NavigationContext);
  const { coinChecklist, toggleCoin } = React.useContext(ChecklistContext);

  if (navCoin !== null) {
    return <CoinDetail coin={level.coins[navCoin]} guideURL={level.link} />;
  }

  return (
    <div>
      <ol>
        {level.coins.map((coin, coinNum) => (
          <li key={coinNum}>
            {coin.title} -{" "}
            <button
              onClick={() => {
                setNavCoin(coinNum);
              }}
            >
              x
            </button>
            <input
              checked={coinChecklist[navLevel].coins[coinNum]}
              type="checkbox"
              onChange={() => {
                toggleCoin(navLevel, coinNum);
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CoinList;
