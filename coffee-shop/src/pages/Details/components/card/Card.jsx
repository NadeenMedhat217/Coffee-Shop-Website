import React from "react"
import styles from "../card/Card.module.css"
const Card = ({imageName}) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={imageName} alt=""/>
    </div>
  );
};

export default Card;
