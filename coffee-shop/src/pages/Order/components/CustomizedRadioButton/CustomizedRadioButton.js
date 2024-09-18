import React, { useState } from "react";
import styles from "../CustomizedRadioButton/CustomizedRadioButton.module.css";

const CustomizedRadioButton = () => {
  const DELIVER = "Deliver";
  const PICK_UP = "Pick Up";
  const [selected, setSelected] = useState(DELIVER);

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.toggleContainer}>
        <input
          type="radio"
          id={DELIVER}
          name="option"
          checked={selected === DELIVER}
          onChange={() => setSelected(DELIVER)}
        />
        <label
          htmlFor={DELIVER}
          className={`${styles.toggleLabel} ${
            selected === DELIVER ? styles.selected : ""
          }`}
        >
          {DELIVER}
        </label>

        <input
          type="radio"
          id={PICK_UP}
          name="option"
          checked={selected === PICK_UP}
          onChange={() => setSelected(PICK_UP)}
        />
        <label
          htmlFor={PICK_UP}
          className={` ${styles.toggleLabel} ${
            selected === PICK_UP ? styles.selected : ""
          }`}
        >
          {PICK_UP}
        </label>
      </div>
    </div>
  );
};

export default CustomizedRadioButton;
