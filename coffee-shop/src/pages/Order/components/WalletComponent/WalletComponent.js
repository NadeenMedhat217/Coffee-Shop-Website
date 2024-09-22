import React from "react";
import styles from "./WalletComponent.module.css"; // Import the CSS module
import icons from "../../../../assets/icons/iconImport";

const WalletComponent = ({ price, deliveryFee }) => {
  const calculateTotal = () => {
    return (price + deliveryFee).toFixed(2); // Calculate the total amount
  };

  return (
    <div className={styles.walletContainer}>
      <img src={icons.wallet} alt="Wallet Icon" className={styles.walletIcon} />
      <div className={styles.textContainer}>
        <span className={styles.title}>Cash/Wallet</span>
        <span className={styles.amount}>${calculateTotal()}</span>
      </div>
      <img
        src={icons.arrowDown}
        alt="Expand Icon"
        className={styles.expandIcon}
      />
    </div>
  );
};

export default WalletComponent;
