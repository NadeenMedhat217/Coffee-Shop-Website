import { configureStore } from "@reduxjs/toolkit";
import deliveryOptionReducer from "./deliveryOptionSlice";
import addressReducer from "./addressSlice";
import itemsReducer from "./itemsSlice";
import selectedItemReducer from "./selectedItemSlice";

const store = configureStore({
  reducer: {
    deliveryOption: deliveryOptionReducer,
    address: addressReducer,
    items: itemsReducer,
    selectedItem: selectedItemReducer,
  },
});

export default store;
