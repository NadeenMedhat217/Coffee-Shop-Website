import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import LocationHeader from "./components/LocationHeader/LocationHeader";
import SearchBar from "./components/SearchBar/SearchBar";

const Home = () => {
  const navigate = useNavigate(); 
  const location = {
    country: "Egypt",
    city: ["Cairo", "Alexandria", "Giza"],
  };

  const handleCardClick = (category, pageName, id) => {
    // Navigate to the desired route with categor and id
    navigate(`/${category}/${id}`);
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
