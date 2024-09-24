import { createSlice } from "@reduxjs/toolkit";

const deliveryOptionSlice = createSlice({
  name: "deliveryOption",
  initialState: {
    option: "Delivery", // or 'PickUp'
  },
  reducers: {
    setOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

//Reducer
export const { setOption } = deliveryOptionSlice.actions;

// Selector
export const deliveryOptionSelector = (state) => state.deliveryOption.option;

export default deliveryOptionSlice.reducer;
