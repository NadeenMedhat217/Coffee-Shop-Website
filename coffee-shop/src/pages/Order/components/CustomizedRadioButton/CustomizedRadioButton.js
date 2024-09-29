import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOption,
  deliveryOptionSelector,
} from "../../../../store/deliveryOptionSlice";
import styles from "../CustomizedRadioButton/CustomizedRadioButton.module.css";

const CustomizedRadioButton = () => {
  const DELIVER = "Deliver";
  const PICK_UP = "Pick Up";
  const dispatch = useDispatch();
  const selected = useSelector(deliveryOptionSelector);

  const handleOptionChange = (option) => {
    dispatch(setOption(option));
  };
  //used the useDispatch and useSelector to update the store with the selected Delivery Option

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.toggleContainer}>
        <input
          type="radio"
          id={DELIVER}
          name="option"
          checked={selected === DELIVER}
          onChange={() => handleOptionChange(DELIVER)}
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
          onChange={() => handleOptionChange(PICK_UP)}
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
