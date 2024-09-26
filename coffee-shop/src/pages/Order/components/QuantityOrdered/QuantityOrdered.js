import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemQuantity,
  itemsSelector,
} from "../../../../store/itemsSlice";
import styles from "./QuantityOrdered.module.css";
import QuantityButton from "../QuantityButton";
import icons from "../../../../assets/icons/iconImport";

const QuantityOrdered = ({ image, name }) => {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelector);
  const item = items.find((item) => item.name === name);

  const [quantity, setQuantity] = useState(item ? item.quantity : 1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  useEffect(() => {
    if (item) {
      dispatch(updateItemQuantity({ id: item.id, quantity }));
    }
  }, [quantity, dispatch, item]);

  //console.log(quantity);
  return (
    <div className={styles.container}>
      <div className={styles.orderedItem}>
        <img src={image} alt={name} className={styles.image} />
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.quantityControl}>
        <QuantityButton onClick={decreaseQuantity} icon={icons.minusCircle} />
        <span className={styles.quantity}>{quantity}</span>
        <QuantityButton onClick={increaseQuantity} icon={icons.plusCircle} />
      </div>
    </div>
  );
};

export default QuantityOrdered;
