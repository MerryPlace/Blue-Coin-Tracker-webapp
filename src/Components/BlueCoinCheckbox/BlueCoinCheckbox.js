import React from "react";
import styles from "./BlueCoinCheckbox.module.scss";

function BlueCoinCheckbox({ checked, onChange }) {
  return (
    <label>
      <input checked={checked} type="checkbox" onChange={onChange} />
      <span className={styles["bc-checkbox"]}></span>
    </label>
  );
}

export default BlueCoinCheckbox;
