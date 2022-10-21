import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [] | null,
};

export const getFectProdust = createAsyncThunk(
  "products/getFectProdust",
  async () => {
    try {
      const responsive = await axios.get(
        "https://main-data-8ef87-default-rtdb.firebaseio.com/.json"
      );
      return responsive.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getFectProdust.pending, () => {
      console.log("pending");
    });

    build.addCase(getFectProdust.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
