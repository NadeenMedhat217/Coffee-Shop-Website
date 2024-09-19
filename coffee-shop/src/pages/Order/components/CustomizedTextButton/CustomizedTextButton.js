import React from "react";
import styles from "./CustomizedTextButton.module.css";

const CustomizedTextButton = ({ icon, label, handleClick }) => (
  <div className={styles.buttonContainer}>
    <button className={styles.button} onClick={handleClick}>
      <img src={icon} alt="" className={styles.buttonIcon} />
      <span className={styles.buttonText}>{label}</span>
    </button>
  </div>
);

export default CustomizedTextButton;
