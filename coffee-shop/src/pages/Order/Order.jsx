import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addressSelector } from "../../store/addressSlice";
import { selectedItemIdSelector } from "../../store/selectedItemSlice";
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
  const [quantity, setQuantity] = useState(1);
  const address = useSelector(addressSelector);
  const selectedItemId = useSelector(selectedItemIdSelector);
  console.log(selectedItemId);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <Header pageName="Order" />
      <CustomizedRadioButton />
      <DeliveryAddress
        location={address.title}
        addressDetails={address.details}
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
        itemId={selectedItemId}
        //image={images.coffee2}
        //name="Caffee Mocha"
        onQuantityChange={handleQuantityChange}
      />
      <LightOrangeLine />
      <PaymentSummary
        selectedId={selectedItemId}
        deliveryFee={2.01}
        discountAmount={0.2}
      />
      <WalletComponent price={4.53} deliveryFee={2.01} />
      <Button label="Order" />
    </div>
  );
};

export default Order;
