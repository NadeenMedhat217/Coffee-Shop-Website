import React from "react";
import styles from "./QuantityButton.module.css";

const Button = ({ onClick, icon }) => (
  <button onClick={onClick} className={styles.button}>
    <img src={icon} alt="Button" className={styles.icon} />
  </button>
);

export default Button;
