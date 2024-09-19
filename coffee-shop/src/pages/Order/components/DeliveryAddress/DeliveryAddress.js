import React from "react";
import styles from "./DeliveryAddress.module.css";

const DeliveryAddress = ({ location, addressDetails }) => (
  <div className={styles.deliveryAddressContainer}>
    <div className={styles.deliveryAddress}>
      <h2>Delivery Address</h2>
      <p>{location}</p>
      <p className={styles.addressDetails}>{addressDetails}</p>
    </div>
  </div>
);

export default DeliveryAddress;
