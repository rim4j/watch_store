import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { brandUrl } from "./../../utils/url";

const defaultState = {
  isLoading: false,
  filteredProducts: {
    data: [],
    links: {},
    meta: {},
  },
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

export const fetchFilterProducts = createAsyncThunk(
  "filterProducts/filters",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const fetchFilterProductsByBrand = createAsyncThunk(
  "filterProducts/filtersByBrand",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const fetchFilterProductsByCategory = createAsyncThunk(
  "filterProducts/filtersByCategory",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url);
      return data;
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
    builder.addCase(fetchFilterProductsByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchFilterProductsByCategory.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.filteredProducts.data = payload.products_by_category.data;
        state.filteredProducts.links = payload.products_by_category.links;
        state.filteredProducts.meta = payload.products_by_category.meta;
      }
    );
    builder.addCase(fetchFilterProductsByCategory.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchFilterProductsByBrand.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchFilterProductsByBrand.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.filteredProducts.data = payload.products_by_brands.data;
        state.filteredProducts.links = payload.products_by_brands.links;
        state.filteredProducts.meta = payload.products_by_brands.meta;
      }
    );
    builder.addCase(fetchFilterProductsByBrand.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchFilterProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilterProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.filteredProducts.data = payload.all_products.data;
      state.filteredProducts.links = payload.all_products.links;
      state.filteredProducts.meta = payload.all_products.meta;
    });
    builder.addCase(fetchFilterProducts.rejected, (state) => {
      state.isLoading = false;
    });

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
