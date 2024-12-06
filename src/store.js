import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import productsReducer from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    products: productsReducer,
  },
});
