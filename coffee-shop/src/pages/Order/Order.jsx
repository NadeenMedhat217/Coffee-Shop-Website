import React from "react";
import CustomizedRadioButton from "./components/CustomizedRadioButton/CustomizedRadioButton";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import LightOrangeLine from "./components/LightOrangeLine/LightOrangeLine";

const Order = () => {
  return (
    <div>
      Order
      <CustomizedRadioButton />
      <GreyHorizontalLine/>
      <LightOrangeLine/>
    </div>
  );
};

export default Order;
