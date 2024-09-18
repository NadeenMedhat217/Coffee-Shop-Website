import React from "react";
import styles from "../Button/Button.module.css";

const Button = ({ label, handleClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        {label.text}
      </button>
    </div>
  );
};

export default Button;
