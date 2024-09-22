import React from "react";
import styles from "../PageFooter/PageFooter.module.css";
import Price from "./Price/Price";
import Button from "../../../../genericComponents/Button/Button";

const PageFooter = ({ itemPrice }) => {
  return (
    <div className={styles.Container}>
      <Price itemPrice={itemPrice} />
      <div className={styles.buttonContainer}>
        <Button label="Buy Now" />
      </div>
    </div>
  );
};

export default PageFooter;
