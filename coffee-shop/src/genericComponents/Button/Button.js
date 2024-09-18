import React from "react";
import styles from "../Button/Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{props.text}</button>
    </div>
  );
};

export default Button;
