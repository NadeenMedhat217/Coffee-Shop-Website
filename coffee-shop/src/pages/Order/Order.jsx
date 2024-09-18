import React from "react";
import CustomizedRadioButton from "./components/CustomizedRadioButton/CustomizedRadioButton";
import Button from "../../genericComponents/Button/Button";

const Order = () => {
  return (
    <>
      Order page
      <CustomizedRadioButton />
      <Button text="Order" />
    </>
  );
};

export default Order;
