import React from "react";
import styles from "./TopRibbon.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";

function TopRibbon({ levels, toggleTheme }) {
  const { navBack, navLevel, navCoin } = React.useContext(NavigationContext);
  const ribbonTitle =
    levels[navLevel]?.coins[navCoin]?.title ||
    levels[navLevel]?.title ||
    "Blue Coin Tracker";

  return (
    <div className={styles.topRibbon}>
      <button
        onClick={() => {
          navBack();
        }}
      >
        back
      </button>
      <h1>{ribbonTitle}</h1>
      <button onClick={toggleTheme}>...</button>
    </div>
  );
}

export default TopRibbon;
