import React, { useState } from "react";
import Header from "../../genericComponents/Header/Header";
import Button from "../../genericComponents/Button/";
import CustomizedRadioButton from "./components/CustomizedRadioButton";
import CustomizedTextButton from "./components/CustomizedTextButton";
import styles from "./components/CustomizedTextButton/CustomizedTextButton.module.css";
import DeliveryAddress from "./components/DeliveryAddress";
import PaymentSummary from "./components/PaymentSummary";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import LightOrangeLine from "./components/LightOrangeLine";
import icons from "../../assets/icons/iconImport";
import WalletComponent from "./components/WalletComponent";
import QuantityOrdered from "./components/QuantityOrdered";
import images from "../../assets/images/imageImports";

const handleEditClick = () => {
  console.log("Edit button clicked"); //Temporary logic
};

const handleNoteClick = () => {
  console.log("Note button clicked"); //Temporary logic
};

const Order = () => {
  const [, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <Header pageName="Order" />
      <CustomizedRadioButton />
      <DeliveryAddress
        location="Jl. Kpg Sutoyo"
        addressDetails="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
      />
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <CustomizedTextButton
            icon={icons.edit}
            label="Edit Address"
            handleClick={handleEditClick}
          />
          <CustomizedTextButton
            icon={icons.note}
            label="Add Note"
            handleClick={handleNoteClick}
          />
        </div>
      </div>
      <GreyHorizontalLine />
      <QuantityOrdered
        image={images.coffee2}
        name="Caffee Mocha"
        onQuantityChange={handleQuantityChange}
      />
      <LightOrangeLine />
      <PaymentSummary price={4.53} deliveryFee={2.01} discountAmount={0.2} />
      <WalletComponent price={4.53} deliveryFee={2.01} />
      <Button label="Order" />
    </div>
  );
};

export default Order;
