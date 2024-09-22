import React from "react";
import styles from "../SizeButton/SizeButton.module.css";

const SizeButton = ({ size, selectedSize, setSelectedSize }) => {
  const isSelected = selectedSize === size;
  return (
    <div
      className={`${styles.button} ${isSelected ? styles.selected : ""}`}
      onClick = {() => setSelectedSize(size)}
    >
      <p className={styles.buttonText}>{size}</p>
    </div>
  );
};

export default SizeButton;
