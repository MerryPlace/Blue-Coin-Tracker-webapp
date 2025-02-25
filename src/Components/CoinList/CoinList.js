import React from "react";
// import styles from "./CoinList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";
import CoinDetail from "../CoinDetail";

function CoinList({ level }) {
  const { navCoin, setNavCoin } = React.useContext(NavigationContext);

  if (navCoin !== null) {
    return <CoinDetail coin={level.coins[navCoin]} guideURL={level.link} />;
  }

  return (
    <div>
      <ol>
        {level.coins.map((coin, coinNum) => (
          <li>
            {coin.title} -{" "}
            <button
              onClick={() => {
                setNavCoin(coinNum);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CoinList;
