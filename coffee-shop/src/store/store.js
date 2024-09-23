import { configureStore } from "@reduxjs/toolkit";
import deliveryOptionReducer from "./slices/deliveryOptionSlice";
import addressReducer from "./slices/addressSlice";
import itemsReducer from "./slices/itemsSlice";

const store = configureStore({
  reducer: {
    deliveryOption: deliveryOptionReducer,
    address: addressReducer,
    items: itemsReducer,
  },
});

export default store;
