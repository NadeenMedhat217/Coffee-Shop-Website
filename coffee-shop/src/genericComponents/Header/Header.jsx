import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.css"
import images from "../../assets/images/imageImports";

const Header = ({pageName}) => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate(-1);
    }
    return(
        <div className={styles.HeaderBox}>
            <div className= {styles.HeaderText}>{pageName}</div>
             <button onClick={HandleClick} className={styles.HeaderBackButton}>
                <img src= {images.BackButton} alt="" />
             </button>
        </div>
    );
};

export default Header;