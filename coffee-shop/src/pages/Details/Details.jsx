import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../genericComponents/Header/Header";
import DetailsHeroImage from "./components/DetailsHeroImage";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import ProductDescription from "./components/ProductDescription";
import DescriptionBox from "./components/DescriptionBox";
import SizeBox from "./components/SizeBox";
import PageFooter from "./components/PageFooter";
import DetailsFunction from "../../utilities/DetailsFunction";

const Details = () => {
  // will get the category and id form HandleCardClick function in the home page
  // Get the category and id from the URL params
  // useParams() is a hook that is used to extract category and id from the URL.
  const { category, id } = useParams();

  // Fetch the coffee data from the JSON using DetailsFunction
  const coffeeItem = DetailsFunction(id, category);
  const imagePath = require(`../../assets/images/${coffeeItem.image}`);
  return (
    <>
      <Header pageName="Details" />
      <DetailsHeroImage imageName={imagePath} />
      <ProductDescription itemName={coffeeItem.name} />
      <GreyHorizontalLine />
      <DescriptionBox textDiscription={coffeeItem.description} />
      <SizeBox />
      <PageFooter itemPrice={coffeeItem.price} />
    </>
  );
};

export default Details;
