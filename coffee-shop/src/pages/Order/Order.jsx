import React from "react";
import Button from "../../genericComponents/Button/";
import CustomizedRadioButton from "./components/CustomizedRadioButton";
import DeliveryAddress from "./components/DeliveryAddress";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import LightOrangeLine from "./components/LightOrangeLine";

const Order = () => {
  return (
    <div>
      Order page
      <CustomizedRadioButton />
      <Button label="Order" />
      <DeliveryAddress
        location="Jl. Kpg Sutoyo"
        addressDetails="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
      />
      <GreyHorizontalLine />
      <LightOrangeLine />
    </div>
  );
};

export default Order;
