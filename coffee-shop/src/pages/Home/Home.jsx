import styles from "./Home.module.css";
import LocationHeader from "./components/LocationHeader/LocationHeader";
import SearchBar from "./components/SearchBar/SearchBar";
//import { useNavigate } from "react-router-dom";

const Home = () => {
  const location = {
    country: "Egypt",
    city: ["Cairo", "Alexandria", "Giza"],
  };
  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <LocationHeader country={location.country} city={location.city[1]} />
        <SearchBar />
      </div>
    </main>
  );
};

export default Home;
