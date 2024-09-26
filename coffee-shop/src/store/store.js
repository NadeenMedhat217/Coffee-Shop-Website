import { configureStore } from "@reduxjs/toolkit";
import deliveryOptionReducer from "./deliveryOptionSlice";
import addressReducer from "./addressSlice";
import itemsReducer from "./itemsSlice";

const store = configureStore({
  reducer: {
    deliveryOption: deliveryOptionReducer,
    address: addressReducer,
    items: itemsReducer,
  },
});

export default store;
