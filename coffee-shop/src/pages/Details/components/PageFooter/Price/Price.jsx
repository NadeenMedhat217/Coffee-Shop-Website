import React from "react";
import styles from "./Price.module.css"

const Price = ({itemPrice}) => {

    return(
        <div className= {styles.Container}>
            <div className= {styles.HeaderText}>
                Price
            </div>
            <div className= {styles.PriceText}>
                ${itemPrice}
            </div>
        </div>
    );
};

export default Price