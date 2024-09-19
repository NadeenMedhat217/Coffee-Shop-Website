import React from "react";
import CustomizedRadioButton from "./components/CustomizedRadioButton/CustomizedRadioButton";
import Button from "../../genericComponents/Button/";

const Order = () => {
  return (
    <>
      Order page
      <CustomizedRadioButton />
      <Button label="Order" />
    </>
  );
};

export default Order;
