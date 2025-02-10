import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { brandUrl } from "./../../utils/url";

const defaultState = {
  isLoading: false,
  filteredProducts: [],
  isLoadingBrand: false,
  brands: [],
  filters: {
    text: "",
    selectFilter: "همه محصولات",
  },
};
export const getBrands = createAsyncThunk(
  "filterProducts/getBrands",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(brandUrl);
      return data.all_brands;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const filteredProducts = createSlice({
  name: "filteredProducts",
  initialState: defaultState,
  reducers: {
    selectFilter: (state, { payload }) => {
      state.filters.selectFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.isLoadingBrand = true;
    });

    builder.addCase(getBrands.fulfilled, (state, { payload }) => {
      state.isLoadingBrand = false;
      state.brands = payload;
    });

    builder.addCase(getBrands.rejected, (state) => {
      state.isLoadingBrand = false;
    });
  },
});

export const { selectFilter } = filteredProducts.actions;
export default filteredProducts.reducer;
