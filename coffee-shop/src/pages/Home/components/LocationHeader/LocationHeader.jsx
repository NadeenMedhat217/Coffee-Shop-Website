import styles from "./LocationHeader.module.css";
import icons from "../../../../assets/icons/iconImport.js";

const LocationHeader = ({ country, city }) => {
  return (
    <>
      <div className={styles.locationHeader}>
        <p className={styles.locationLabel}>Location</p>
        <div className={styles.locationData}>
          <p className={styles.locationDropdown}>
            {city}, {country}
          </p>
          <img
            className={styles.arrowDownIcon}
            src={icons.arrowDown}
            alt="arrowdown"
          />
        </div>
      </div>
    </>
  );
};

export default LocationHeader;
