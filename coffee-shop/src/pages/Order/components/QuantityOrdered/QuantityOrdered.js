import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemQuantity,
  itemsSelector,
} from "../../../../store/itemsSlice";
import { setQuantity, quantitySelector } from "../../../../store/quantitySlice";
import styles from "./QuantityOrdered.module.css";
import QuantityButton from "../QuantityButton";
import icons from "../../../../assets/icons/iconImport";

const QuantityOrdered = ({ itemId }) => {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelector);
  const item = items.find((item) => item.id === itemId);
  const quantity = useSelector((state) => quantitySelector(state, itemId));

  //const [quantity, setQuantity] = useState(item ? item.quantity : 1);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    dispatch(setQuantity({ id: item.id, quantity: newQuantity }));
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    dispatch(setQuantity({ id: item.id, quantity: newQuantity }));
  };

  useEffect(() => {
    if (item) {
      dispatch(updateItemQuantity({ id: item.id, quantity }));
    }
  }, [quantity, dispatch, item]);

  console.log("Item:", item);
  console.log("Quantity:", quantity);
  const imagePath = item.image
    ? require(`../../../../assets/images/${item.image}`)
    : null;
  return (
    <div className={styles.container}>
      <div className={styles.orderedItem}>
        <img src={imagePath} alt={item.name} className={styles.image} />
        <span className={styles.name}>{item.name}</span>
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
