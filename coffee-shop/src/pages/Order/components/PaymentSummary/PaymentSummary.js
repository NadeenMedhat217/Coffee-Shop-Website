import React from "react";
import styles from "./PaymentSummary.module.css";
import PriceBrief from "./PriceBreif";

const PaymentSummary = ({ price, deliveryFee, discountAmount }) => (
  <div className={styles.paymentSummaryContainer}>
    <div className={styles.paymentSummaryTitle}>Payment Summary</div>
    <PriceBrief label="Price" amount={price} />
    <PriceBrief
      label="Delivery Fee"
      amount={deliveryFee}
      discount={discountAmount}
    />
  </div>
);

export default PaymentSummary;
