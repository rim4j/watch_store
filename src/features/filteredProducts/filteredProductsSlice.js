import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { brandUrl } from "./../../utils/url";

const defaultState = {
  isLoading: false,
  allProducts: {
    data: [],
    links: {},
    meta: {},
  },
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
    searchProduct: (state, { payload }) => {
      state.filters.text = payload;

      let tempProducts = [...state.allProducts.data];
      tempProducts = tempProducts.filter((item) => {
        return item.title.toLowerCase().includes(payload.toLowerCase());
      });

      state.filteredProducts = tempProducts;
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
        state.allProducts.data = payload.products_by_category.data;
        state.allProducts.links = payload.products_by_category.links;
        state.allProducts.meta = payload.products_by_category.meta;
        state.filteredProducts = payload.products_by_category.data;
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
        state.allProducts.data = payload.products_by_brands.data;
        state.allProducts.links = payload.products_by_brands.links;
        state.allProducts.meta = payload.products_by_brands.meta;
        state.filteredProducts = payload.products_by_brands.data;
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
      state.allProducts.data = payload.all_products.data;
      state.allProducts.links = payload.all_products.links;
      state.allProducts.meta = payload.all_products.meta;
      state.filteredProducts = payload.all_products.data;
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

export const { selectFilter, searchProduct } = filteredProducts.actions;
export default filteredProducts.reducer;
