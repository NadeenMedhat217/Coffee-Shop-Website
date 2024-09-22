import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../PageFooter/PageFooter.module.css";
import Price from "./Price/Price";
import Button from "../../../../genericComponents/Button/Button";

const PageFooter = ({ itemPrice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order");
  };
  return (
    <div className={styles.Container}>
      <Price itemPrice={itemPrice} />
      <div className={styles.buttonContainer}>
        <Button label="Buy Now" handleClick={handleClick}/>
      </div>
    </div>
  );
};

export default PageFooter;
