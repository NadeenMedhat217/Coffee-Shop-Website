import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.css"
import icons from "../../assets/icons/iconImport";

const Header = ({pageName}) => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate(-1);
    }
    return(
        <div className={styles.HeaderBox}>
            <div className= {styles.HeaderText}>{pageName}</div>
             <button onClick={HandleClick} className={styles.HeaderBackButton}>
                <img src= {icons.arrowLeft} alt="" />
             </button>
        </div>
    );
};

export default Header;