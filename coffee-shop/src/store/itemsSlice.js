import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: "espresso_001",
        name: "Espresso",
        description:
          "A strong and bold coffee made by forcing steam through ground coffee beans.",
        price: 2.5,
        sizes: ["Small", "Medium", "Large"],
        image: "Coffee1.png",
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

//Reducer
export const { addItem, updateItemQuantity } = itemsSlice.actions;

// Selector
export const itemsSelector = (state) => state.items.items;

export default itemsSlice.reducer;
