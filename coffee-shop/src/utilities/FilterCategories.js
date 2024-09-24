import coffee from "../mock/coffee.json";

// Function to filter categories or return all categories based on user selection
export const filterCategories = (categoryName) => {
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
};
