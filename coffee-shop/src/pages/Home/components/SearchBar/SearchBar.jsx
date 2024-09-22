import styles from "./SearchBar.module.css";
import icons from "../../../../assets/icons/iconImport.js";

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search coffee"
        />
        <img className={styles.searchIcon} src={icons.search} alt="search" />
        <button className={styles.filterBtn}>
          <img className={styles.filterIcon} src={icons.filter} alt="filter" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
