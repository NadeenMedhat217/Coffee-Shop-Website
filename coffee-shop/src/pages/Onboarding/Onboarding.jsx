import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/imageImports";
import styles from "./Onboarding.module.css";
import Button from "../../genericComponents/Button";
const Onboarding = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.container}>
      <img src={images.coffee6} alt="Onboarding" className={styles.image} />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Fall in Love with Coffee in Blissful Delight!
        </h1>
        <p className={styles.description}>
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </p>
      </div>
      <div className= {styles.button}>
        <Button label="Get Started" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Onboarding;
