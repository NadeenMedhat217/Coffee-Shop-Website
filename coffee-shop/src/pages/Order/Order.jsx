import React from "react";
import Header from "../../genericComponents/Header/Header";
import Button from "../../genericComponents/Button/";
import CustomizedRadioButton from "./components/CustomizedRadioButton";
import CustomizedTextButton from "./components/CustomizedTextButton";
import styles from "./components/CustomizedTextButton/CustomizedTextButton.module.css";
import DeliveryAddress from "./components/DeliveryAddress";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import LightOrangeLine from "./components/LightOrangeLine";
import icons from "../../assets/icons/iconImport";

const Order = () => {
  return (
    <div>
      Order page
      <Header />
      <CustomizedRadioButton />
      <DeliveryAddress
        location="Jl. Kpg Sutoyo"
        addressDetails="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
      />
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <CustomizedTextButton icon={icons.edit} text="Edit Address" />
          <CustomizedTextButton icon={icons.note} text="Add Note" />
        </div>
      </div>
      <Button label="Order" />
      <GreyHorizontalLine />
      <LightOrangeLine />
    </div>
  );
};

export default Order;
