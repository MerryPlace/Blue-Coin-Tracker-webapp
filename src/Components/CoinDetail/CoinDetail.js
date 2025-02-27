import React from "react";
import { NavigationContext } from "../../Context/NavigationProvider";
import BlueCoinCheckbox from "../BlueCoinCheckbox";
import StyledText from "../StyledText";

import styles from "./CoinDetail.module.scss";

function Template({ coin, guideURL, coinChecked, onCoinChange }) {
  const { navCoin, navLevel } = React.useContext(NavigationContext);

  const rootURL = process.env.PUBLIC_URL;
  const imageFile = `coin_${navLevel}_${("0" + (navCoin + 1)).slice(-2)}.jpg`;
  const mobileImageURL = `${rootURL}/drawable/coin-location/mobile/${imageFile}`;
  const desktopImageURL = `${rootURL}/drawable/coin-location/${imageFile}`;

  return (
    <div className={styles.coinDetailPage}>
      <div className={styles.header}>
        <img
          srcset={`${mobileImageURL} 640w, ${desktopImageURL} 1280w`}
          sizes="(max-width: 640px) 100vw, 800px"
          src={desktopImageURL}
          alt=""
        />
      </div>
      <h2>{coin.title}</h2>
      <BlueCoinCheckbox checked={coinChecked} onChange={onCoinChange} />
      source:
      <a href={guideURL} target="_blank" rel="noreferrer">
        strategywiki.org
      </a>
      <pre className={styles.description}>
        <p>
          <StyledText unstyledText={coin.desc} />
        </p>
      </pre>
      <a href={coin.video} target="_blank" rel="noreferrer">
        <svg width="72" height="50">
          <path
            fill="#FF0000"
            d="M69.9412,7.8235C69.1177,4.7647 66.7059,2.3529 63.6471,1.5294 58.0588,0 35.7059,0 35.7059,0 35.7059,0 13.3529,0 7.7647,1.4706 4.7647,2.2941 2.2941,4.7647 1.4706,7.8235 0,13.4118 0,25 0,25 0,25 0,36.6471 1.4706,42.1765 2.2941,45.2353 4.7059,47.6471 7.7647,48.4706 13.4118,50 35.7059,50 35.7059,50c0,0 22.3529,0 27.9412,-1.4706 3.0588,-0.8235 5.4706,-3.2353 6.2941,-6.2941 1.4706,-5.5882 1.4706,-17.1765 1.4706,-17.1765 0,0 0.0588,-11.6471 -1.4706,-17.2353z"
          />
          <path fill="#FFFFFF" d="M47.1765,25l-18.5882,-10.7059l0,21.4118z" />
        </svg>
      </a>
    </div>
  );
}

export default Template;
