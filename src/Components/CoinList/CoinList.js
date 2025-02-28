import React from "react";
import styles from "./CoinList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";
import { ChecklistContext } from "../../Context/ChecklistProvider";
import CoinDetail from "../CoinDetail";
import BlueCoinCheckbox from "../BlueCoinCheckbox";

function CoinList({ level }) {
  const { navCoin, navLevel, setNavCoin } = React.useContext(NavigationContext);
  const { coinChecklist, toggleCoin } = React.useContext(ChecklistContext);

  const itemRefs = React.useRef([]);
  const [selectedCoin, setSelectedCoin] = React.useState(null);

  React.useEffect(() => {
    if (navCoin === null && !!selectedCoin) {
      itemRefs.current[selectedCoin - 1].scrollIntoView();
    }
  }, [selectedCoin, navCoin, itemRefs]);

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
        <ListItem
          ref={(el) => {
            itemRefs.current[coinNum] = el;
          }}
          key={coinNum}
          title={coin.title}
          checked={coinChecklist[navLevel].coins[coinNum]}
          onItemClick={() => {
            setNavCoin(coinNum);
            setSelectedCoin(coinNum);
          }}
          onCoinChange={() => {
            toggleCoin(navLevel, coinNum);
          }}
        />
      ))}
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ onItemClick, onCoinChange, checked, title }, ref) => {
    return (
      <div ref={ref} className={styles.coinItem}>
        <div className={styles.checkboxWrapper}>
          <BlueCoinCheckbox checked={checked} onChange={onCoinChange} />
        </div>
        <button onClick={onItemClick}>
          <div className={styles.coinTitle}>{title}</div>
        </button>
      </div>
    );
  }
);

export default CoinList;
