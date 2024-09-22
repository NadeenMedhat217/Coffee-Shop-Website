import React from "react";
import styles from "./ProductDescription.module.css"
import ProductIcons from "./ProductIcons";
import images from "../../../../assets/images/imageImports";
const ProductDescription = ({itemName}) => {
    return(
        <div className= {styles.Container}>
            <div className= {styles.HeaderContainer}>
                <div className= {styles.Header}>
                    {itemName}
                </div>
                <div className= {styles.SubHeader}>
                    Ice/Hot
                </div>
                <div className= {styles.Rating}>
                    <img src = {images.star} alt="Rating" />
                    <div className= {styles.RatingText}>4.8</div>
                    <div className= {styles.RatingSubText}>(230)</div>
                </div>
            </div>
            <ProductIcons/>
        </div>
    );
};

export default ProductDescription