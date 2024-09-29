import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    title: "Jl. Kpg Sutoyo",
    details: "Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.",
  },
  reducers: {
    // No reducers needed for read-only state
  },
});

// Selector
export const addressSelector = (state) => state.address;

export default addressSlice.reducer;

