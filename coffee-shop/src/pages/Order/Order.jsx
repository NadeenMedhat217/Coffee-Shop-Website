import React from "react";
import Button from "../../genericComponents/Button/";
import CustomizedRadioButton from "./components/CustomizedRadioButton";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import LightOrangeLine from "./components/LightOrangeLine";

const Order = () => {
  return (
    <div>
      Order page
      <CustomizedRadioButton />
      <Button label="Order" />
      <GreyHorizontalLine/>
      <LightOrangeLine/>
    </div>
  );
};

export default Order;
