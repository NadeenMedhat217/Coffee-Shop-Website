import React from "react";
import { useState } from "react";
import SizeButton from "./SizeButton/SizeButton";
import styles from "../SizeBox/SizeBox.module.css";
const SizeBox = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div className={styles.BoxContainer}>
      <div className={styles.SizeTextContainer}>
        <div className={styles.SizeText}>Size</div>
      </div>
      <div className={styles.SizeContainer}>
        <SizeButton
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          size="S"
        />
        <SizeButton
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          size="M"
        />
        <SizeButton
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          size="L"
        />
      </div>
    </div>
  );
};

export default SizeBox;
