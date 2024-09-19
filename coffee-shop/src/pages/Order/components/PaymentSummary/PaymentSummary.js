import React from "react";
import styles from "./PaymentSummary.module.css";

const PaymentSummary = ({ price, deliveryFee }) => (
  <div className={styles.paymentSummaryContainer}>
    <div className={styles.paymentSummaryTitle}>Payment Summary</div>
    <div className={styles.paymentSummaryItem}>
      <span>Price</span>
      <span>
        <b>${price.toFixed(2)}</b>
      </span>
    </div>
    <div className={styles.paymentSummaryItem}>
      <span>Delivery Fee</span>
      <span>
        <span className={styles.originalFee}>
          ${(deliveryFee * 2).toFixed(2)}
        </span>
        &nbsp;
        <span className={styles.discountedFee}>${deliveryFee.toFixed(2)}</span>
      </span>
    </div>
  </div>
);

export default PaymentSummary;
