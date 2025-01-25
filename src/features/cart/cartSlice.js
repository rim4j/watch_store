import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userCartUrl } from "../../utils/url";

const defaultState = {
  cart: [],
  isLoading: false,
  totalCount: 0,
  totalAmount: 0,
};

const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: token },
};

const bodyParameters = {
  key: "value",
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.post(userCartUrl, bodyParameters, config);
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload.user_cart;
      state.totalAmount = payload.cart_total_price;
      const num = payload.user_cart.map((item) => item.count);
      const genTotalCount = num.reduce((a, b) => a + b, 0);

      state.totalCount = genTotalCount;
    });
    builder.addCase(getCartItems.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
  },

  reducers: {
    addItem: (state, { payload }) => {
      const item = state.cart.find((item) => item.product_id === payload.id);

      const product = {
        id: payload.id,
        product_id: payload.id,
        product: payload.title,
        count: 1,
        price: payload.price,
        discount: payload.discount,
        discount_price: payload.discount_price,
        image: payload.image,
      };

      if (item) {
        const tempCart = state.cart.map((item) => {
          return { ...item, count: item.count + 1 };
        });
        state.cart = tempCart;
        state.totalCount = state.totalCount + 1;
        state.totalAmount = state.totalAmount + product.discount_price;
      } else {
        state.cart.push(product);
        state.totalCount = state.totalCount + 1;
        state.totalAmount = state.totalAmount + product.discount_price;
      }
    },
    increaseItem: (state, { payload }) => {
      const tempCart = state.cart.map((item) => {
        if (item.product_id === payload) {
          let newCount = item.count + 1;
          return { ...item, count: newCount };
        }
        return item;
      });
      state.cart = tempCart;
      cartSlice.caseReducers.calculateTotals(state);
    },
    decreaseItem: (state, { payload }) => {
      const tempCart = state.cart.map((item) => {
        if (item.product_id === payload) {
          if (item.count === 1) {
            return item;
          }
          let newCount = item.count - 1;
          return { ...item, count: newCount };
        }
        return item;
      });
      state.cart = tempCart;
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.product_id !== payload);
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { count, discount_price } = cartItem;
          total.total_items += count;
          total.total_amount += discount_price * count;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      state.totalCount = total_items;
      state.totalAmount = total_amount;
    },
  },
});

export const { addItem, increaseItem, decreaseItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
