import React from "react";
import styles from "./SettingsPopup.module.scss";
import downloadIcon from "../../drawable/icons/download.svg";
import uploadIcon from "../../drawable/icons/upload.svg";
import { ChecklistContext } from "../../Context/ChecklistProvider";

function SettingsPopup({
  fontToggle,
  checkboxToggle,
  themeToggle,
  closeSettings,
  fontCheck,
  checkboxCheck,
  themeCheck,
}) {
  const closeRef = React.useRef();
  React.useEffect(() => {
    closeRef.current.focus();
  }, []);

  const fileInputRef = React.useRef();

  const { coinChecklist, uploadSave } = React.useContext(ChecklistContext);

  return (
    <>
      <div className={styles.fullscreenOverlay} onClick={closeSettings}>
        <div
          className={styles.settingsPopup}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className={styles.closeButton}
            ref={closeRef}
            onClick={closeSettings}
          >
            X
          </button>
          <h2>Accessibility</h2>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkboxArea}>
              <SettingToggle
                label={"Dark Theme"}
                onChange={themeToggle}
                checked={themeCheck}
              />
              <SettingToggle
                label={"Sunshine Font"}
                onChange={fontToggle}
                checked={fontCheck}
              />
              <SettingToggle
                label={"Coin Checkboxes"}
                onChange={checkboxToggle}
                checked={checkboxCheck}
              />
            </div>
          </div>
          <h2>Save Data</h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.loadButton}
              onClick={() => {
                downloadTextFile(JSON.stringify(coinChecklist));
              }}
            >
              <img src={downloadIcon} alt="" /> <span>Download</span>
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              id="blue-coin-save-data"
              ref={fileInputRef}
              accept=".txt"
              onChange={(event) => {
                handleFileChange(uploadSave, event.target.files[0]);
                closeSettings();
              }}
            />
            <button
              className={styles.loadButton}
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <img src={uploadIcon} alt="" /> <span>Upload</span>
            </button>
          </div>

          <h2>Credits</h2>
          <div className={styles.credits}>
            <a href="https://github.com/MerryPlace">
              Merry Ortega - Programming/Design
            </a>
            <br />
            <a href="https://strategywiki.org/wiki/Super_Mario_Sunshine/Blue_Coins">
              StrategyWiki.org - Collection Guide
            </a>
            <br />
            <a href="https://github.com/EstebanH"> Esteban Huezo - Media</a>
          </div>
        </div>
      </div>
    </>
  );
}

function SettingToggle({ checked, onChange, label }) {
  const id = React.useId();
  return (
    <div>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function downloadTextFile(text) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "example.txt";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function handleFileChange(attemptUpload, file) {
  if (file) {
    file
      .text()
      .then((text) => {
        attemptUpload(JSON.parse(text));
      })
      .catch((error) => {
        console.error("Error reading file:", error);
      });
  } else {
    console.log("No file selected");
  }
}

export default SettingsPopup;
