import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { detailsProduct } from "../../utils/url";

const defaultState = {
  isLoading: false,
  detailsProduct: {},
};

export const getDetailsProduct = createAsyncThunk(
  "products/getDetailsProduct",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${detailsProduct}/${id}`);
      return res.data.data[0];
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder.addCase(getDetailsProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailsProduct.fulfilled, (state, { payload }) => {
      state.detailsProduct = payload;
      state.isLoading = false;
    });
    builder.addCase(getDetailsProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
