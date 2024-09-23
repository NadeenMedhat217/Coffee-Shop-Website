import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
   /* removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },*/
    updateItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

//Reducer
export const { addItem, removeItem, updateItemQuantity } = itemsSlice.actions;

// Selector
export const itemsSelector = (state) => state.items.items;

export default itemsSlice.reducer;
