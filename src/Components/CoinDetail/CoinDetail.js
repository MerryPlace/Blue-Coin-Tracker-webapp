import React from "react";
import { NavigationContext } from "../../Context/NavigationProvider";
import BlueCoinCheckbox from "../BlueCoinCheckbox";
import StyledText from "../StyledText";
import imageIcon from "../../drawable/icons/image.svg";
import videoIcon from "../../drawable/icons/video.svg";

import styles from "./CoinDetail.module.scss";

function Template({ coin, guideURL, coinChecked, onCoinChange }) {
  const { navCoin, navLevel } = React.useContext(NavigationContext);
  const [showVideo, setVideoToggle] = React.useState(false);

  return (
    <div className={styles.coinDetailPage}>
      <div className={styles.media}>
        <MediaArea
          navLevel={navLevel}
          navCoin={navCoin}
          coin={coin}
          showVideo={showVideo}
        />
      </div>

      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <ToggleMediaButton
            onClick={() => {
              setVideoToggle((current) => !current);
            }}
            showVideo={showVideo}
          />
          <div className={styles.checkBoxWrapper}>
            Coin Get{coinChecked ? "!" : "?"}
            <BlueCoinCheckbox checked={coinChecked} onChange={onCoinChange} />
          </div>
        </div>
      </div>

      <hr />

      <pre className={styles.description}>
        <p>
          <StyledText unstyledText={coin.desc} />
        </p>
        <p>
          <a href={guideURL} target="_blank" rel="noreferrer">
            source: strategywiki.org
          </a>
        </p>
      </pre>
    </div>
  );
}

function MediaArea({ navLevel, navCoin, coin, showVideo }) {
  const rootURL = process.env.PUBLIC_URL;
  const imageFile = `coin_${navLevel}_${("0" + (navCoin + 1)).slice(-2)}.jpg`;
  const mobileImageURL = `${rootURL}/drawable/coin-location/mobile/${imageFile}`;
  const desktopImageURL = `${rootURL}/drawable/coin-location/${imageFile}`;

  return (
    <>
      <img
        className={(showVideo && styles.hidden) || undefined}
        srcSet={`${mobileImageURL} 640w, ${desktopImageURL} 1280w`}
        sizes="(max-width: 640px) 100vw"
        src={desktopImageURL}
        alt=""
      />
      {showVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${coin.video}`}
          title="YouTube video player"
          allow="fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </>
  );
}

function ToggleMediaButton({ showVideo, onClick }) {
  return (
    <button className={styles.mediaToggle} onClick={onClick}>
      <img src={showVideo ? imageIcon : videoIcon} alt="" />
      <span>{showVideo ? "See Photo" : "See Video"}</span>
    </button>
  );
}

export default Template;
