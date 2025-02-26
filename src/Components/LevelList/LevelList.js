import React from "react";
import styles from "./LevelList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";
import { ChecklistContext } from "../../Context/ChecklistProvider";

import CoinList from "../CoinList";

function LevelList({ levels }) {
  const { navLevel, setNavLevel } = React.useContext(NavigationContext);
  const { getLevelCompletion, getTotalCompletion } =
    React.useContext(ChecklistContext);

  const totalComplete = getTotalCompletion();

  if (navLevel !== null) {
    return <CoinList level={levels[navLevel]} />;
  }

  return (
    <div>
      <div className={styles.totalCollected}>
        <h2>
          <label for="totalComplete">You've collected {totalComplete}%</label>
        </h2>
        <progress id="totalComplete" value={totalComplete} max="100"></progress>
      </div>

      <div className={styles["level-list-container"]}>
        {Object.keys(levels).map((levelCode) => (
          <div className={styles["level-container"]}>
            <button
              key={levelCode}
              onClick={() => {
                setNavLevel(levelCode);
              }}
            >
              <img
                className={styles["level-image"]}
                src={`${process.env.PUBLIC_URL}/drawable/home/home_${levelCode}.png`}
                alt={levels[levelCode].title}
              />
              <p className={styles["level-progress"]}>
                {getLevelCompletion(levelCode)}%
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelList;
