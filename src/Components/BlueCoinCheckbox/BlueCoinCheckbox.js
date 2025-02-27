import React from "react";
import styles from "./BlueCoinCheckbox.module.scss";

function BlueCoinCheckbox({ checked, onChange }) {
  const id = React.useId();
  return (
    <>
      <input id={id} checked={checked} type="checkbox" onChange={onChange} />
      <label htmlFor={id} className={styles.bcCheckboxWrapper}>
        <span className={styles["bc-checkbox"]}></span>
      </label>
    </>
  );
}

export default BlueCoinCheckbox;
