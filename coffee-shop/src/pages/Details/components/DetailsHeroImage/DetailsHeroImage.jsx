import React from "react"
import styles from "./DetailsHeroImage.module.css"
const DetailsHeroImage = ({imageName}) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={imageName} alt=""/>
    </div>
  );
};

export default DetailsHeroImage;
