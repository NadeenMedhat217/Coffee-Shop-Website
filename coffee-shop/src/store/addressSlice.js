import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    title: "",
    details: "",
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

//Reducer
export const { setTitle, setDetails } = addressSlice.actions;

// Selector
export const addressSelector = (state) => state.address;

export default addressSlice.reducer;
