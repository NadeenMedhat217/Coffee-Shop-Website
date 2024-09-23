import React from "react";
import styles from "./PriceBrief.module.css";

const PriceBrief = ({ label, amount, discount }) => (
  <div className={styles.priceBriefItem}>
    <span className={styles.label}>{label}</span>
    <span className={styles.amount}>
      {discount > 0 ? (
        <>
          <span className={styles.originalAmount}>${amount.toFixed(2)}</span>
          <span className={styles.discountedAmount}>
            ${(amount * (1 - discount)).toFixed(2)}
          </span>
        </>
      ) : (
        <b>${amount.toFixed(2)}</b>
      )}
    </span>
  </div>
);

export default PriceBrief;
