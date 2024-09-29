import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addressSelector } from "../../store/addressSlice";
import { selectedItemIdSelector } from "../../store/selectedItemSlice";
import { itemsSelector } from "../../store/itemsSlice";
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
  const items = useSelector(itemsSelector);
  const selectedItem = items.find((item) => item.id === selectedItemId);

  const deliveryFee = 2.01;
  const discountAmount = 0.2;

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const totalPrice = selectedItem ? selectedItem.price * quantity : 0;

  useEffect(() => {
    if (selectedItem) {
      setQuantity(selectedItem.quantity);
    }
  }, [selectedItem]);

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
        onQuantityChange={handleQuantityChange}
      />
      <LightOrangeLine />
      <PaymentSummary
        deliveryFee={deliveryFee}
        discountAmount={discountAmount}
        totalPrice={totalPrice}
      />
      <WalletComponent price={totalPrice} deliveryFee={deliveryFee} />
      <Button label="Order" />
    </div>
  );
};

export default Order;
