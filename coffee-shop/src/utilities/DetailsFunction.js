import coffeeData from "../mocks/cofee.json";

//Deatils function to retrieve the coffee data that was clicked by the user in Home the Page
function DetailsFunction(id, category) {
  const categoryData = coffeeData.menu.categories.find(
    (cat) => cat.name === category
  );
  if (!categoryData) {
    return null;
  }
  const item = categoryData.items.find((item) => item.id === id);
  return item || null;
}

export default DetailsFunction;
