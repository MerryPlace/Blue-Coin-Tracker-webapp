import React from "react";
// import styles from "./LevelList.module.scss";
import { NavigationContext } from "../../Context/NavigationProvider";

import CoinList from "../CoinList";

function LevelList({ levels }) {
  const { navLevel, setNavLevel } = React.useContext(NavigationContext);

  if (navLevel !== null) {
    return <CoinList level={levels[navLevel]} />;
  }

  return (
    <div>
      {Object.keys(levels).map((levelCode) => (
        <button
          key={levelCode}
          onClick={() => {
            setNavLevel(levelCode);
          }}
        >
          {levels[levelCode].title}
        </button>
      ))}
    </div>
  );
}

export default LevelList;
