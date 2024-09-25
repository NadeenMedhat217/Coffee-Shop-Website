import React from "react";
import { useSelector } from "react-redux";
import { deliveryOptionSelector } from "../../../../store/deliveryOptionSlice";
import styles from "./PaymentSummary.module.css";
import PriceBrief from "./PriceBreif";

const PaymentSummary = ({ price, deliveryFee, discountAmount }) => {
  //to know the user selected option
  const selectedOption = useSelector(deliveryOptionSelector);

  //to check if the selected option was Pick Up or Deliver
  const isPickUp = selectedOption === "Pick Up";
  //if the selected option was Pick Up => make the nalDeliveryFee = 0, otherwise keep it with the deliveryFee amount
  const finalDeliveryFee = isPickUp ? 0 : deliveryFee;

  return (
    <div className={styles.paymentSummaryContainer}>
      <div className={styles.paymentSummaryTitle}>Payment Summary</div>
      <PriceBrief label="Price" amount={price} />
      <PriceBrief
        label="Delivery Fee"
        amount={finalDeliveryFee}
        discount={isPickUp ? null : discountAmount} // if it is Pick Up then there is no Delivery Fee and no discount
      />
    </div>
  );
};

export default PaymentSummary;
