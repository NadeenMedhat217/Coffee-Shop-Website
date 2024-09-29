import { createSlice } from "@reduxjs/toolkit";

const quantitySlice = createSlice({
  name: "quantity",
  initialState: {},
  reducers: {
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state[id] = quantity;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;
export const quantitySelector = (state, itemId) => state.quantity[itemId] || 1;
export default quantitySlice.reducer;
