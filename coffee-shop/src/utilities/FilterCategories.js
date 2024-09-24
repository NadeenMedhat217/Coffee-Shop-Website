import coffee from "../mocks/cofee.json";

// Function to filter categories or return all categories based on user selection
function FilterCategories(categoryName) {
  if (categoryName === "All Coffee") {
    return coffee.menu.categories.map((category) => ({
      name: category.name,
      items: category.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
      })),
    }));
  } else {
    const category = coffee.menu.categories.find(
      (cat) => cat.name === categoryName
    );
    if (category) {
      return category.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
      }));
    }
    return [];
  }
}
export default FilterCategories;
