import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deliveryOptionSelector } from "../../../../store/deliveryOptionSlice";
import { itemsSelector } from "../../../../store/itemsSlice";
import styles from "./PaymentSummary.module.css";
import PriceBrief from "./PriceBreif";

const PaymentSummary = ({ selectedId, deliveryFee, discountAmount }) => {
  //to know the user selected option
  const selectedOption = useSelector(deliveryOptionSelector);

  // To get the items from the store
  const items = useSelector(itemsSelector);

  // Find the item based on id
  const selectedItem = items.find((item) => item.id === selectedId);

  // Calculate the total price from the items
  const totalPrice = selectedItem.price;

  //to check if the selected option was Pick Up or Deliver
  const isPickUp = selectedOption === "Pick Up";
  //if the selected option was Pick Up => make the nalDeliveryFee = 0, otherwise keep it with the deliveryFee amount
  const finalDeliveryFee = isPickUp ? 0 : deliveryFee;

  return (
    <div className={styles.paymentSummaryContainer}>
      <div className={styles.paymentSummaryTitle}>Payment Summary</div>
      <PriceBrief label="Price" amount={totalPrice} />
      <PriceBrief
        label="Delivery Fee"
        amount={finalDeliveryFee}
        discount={isPickUp ? null : discountAmount} // if it is Pick Up then there is no Delivery Fee and no discount
      />
    </div>
  );
};

export default PaymentSummary;
