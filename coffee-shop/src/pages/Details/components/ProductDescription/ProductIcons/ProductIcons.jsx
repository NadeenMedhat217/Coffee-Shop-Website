import React from "react";
import styles from "../ProductIcons/ProductIcons.module.css";
import icons from "../../../../../assets/icons/iconImport";
const ProductIcons = () => {
  return (
    <div className={styles.IconContainer}>
      <div className= {styles.IconBackground}>
        <img className={styles.Icon} src={icons.bike} alt="Delivery" />
      </div>
      <div className= {styles.IconBackground}>
        <img className={styles.Icon} src={icons.bean} alt="Beans" />
      </div>
      <div className= {styles.IconBackground}>
        <img className={styles.Icon} src={icons.milk} alt="Milk" />
      </div>
    </div>
  );
};

export default ProductIcons;
