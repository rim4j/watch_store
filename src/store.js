import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import productsReducer from "./features/products/productsSlice";
import userReducer from "./features/user/userSlice";
import CartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    products: productsReducer,
    user: userReducer,
    cart: CartReducer,
  },
});
