import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState: {
    id: null,
  },
  reducers: {
    setSelectedItemId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Reducer
export const { setSelectedItemId } = selectedItemSlice.actions;

// Selector
export const selectedItemIdSelector = (state) => state.selectedItem.id;

export default selectedItemSlice.reducer;
