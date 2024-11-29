import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { homeUrl } from "../../utils/constants";

const defaultState = {
  sliders: [],
  categories: [],
  amazing_products: [],
  most_seller_products: [],
  newest_products: [],
  banner: {},
  isLoading: false,
};

export const getHomeItems = createAsyncThunk(
  "home/getHomeItems",
  async (name, thunkAPI) => {
    try {
      const res = await axios.get(homeUrl);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHomeItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.sliders = payload.data.sliders;
      state.categories = payload.data.categories;
      state.amazing_products = payload.data.amazing_products;
      state.most_seller_products = payload.data.most_seller_products;
      state.newest_products = payload.data.newest_products;
      state.banner = payload.data.banner;
    });
    builder.addCase(getHomeItems.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
  },
});

export const { addItem } = homeSlice.actions;

export default homeSlice.reducer;
