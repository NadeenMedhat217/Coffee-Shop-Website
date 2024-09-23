import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: "",
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

//Reducer
export const { setAddress } = addressSlice.actions;

// Selector
export const addressSelector = (state) => state.address.address;

export default addressSlice.reducer;
