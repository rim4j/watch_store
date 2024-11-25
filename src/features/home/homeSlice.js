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
  isLoading: true,
};

const homeSlice = createSlice({
  name: "home",
  initialState: defaultState,
  reducers: {},
});

export const { addItem } = homeSlice.actions;

export default homeSlice.reducer;
