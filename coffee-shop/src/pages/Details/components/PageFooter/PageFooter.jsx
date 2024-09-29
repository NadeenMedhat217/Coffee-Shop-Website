import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../store/itemsSlice";
import styles from "../PageFooter/PageFooter.module.css";
import Price from "./Price/Price";
import Button from "../../../../genericComponents/Button";

const PageFooter = ({ itemDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(itemDetails));  // dispatch the addItem action
    console.log(itemDetails);
    navigate("/order");
  };
  
  return (
    <div className={styles.Container}>
      <Price itemPrice={itemDetails.price} />
      <div className={styles.buttonContainer}>
        <Button label="Buy Now" handleClick={handleClick}/>
      </div>
    </div>
  );
};

export default PageFooter;
