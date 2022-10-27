import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
// const [listCateroly,setListCateroly] =useState()
const initialState = {
  products: [] | null,
  items: [] | null,
  listItemID: [] | null,
  blogsId: [] | null,
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
export const getitems = createAsyncThunk(
  "products/getitems",
  async (listCateroly) => {
    try {
      let responsive = await axios.get(
        `https://main-data-8ef87-default-rtdb.firebaseio.com/items.json?orderBy="category"&equalTo="${listCateroly}"`
      );
      const myArr = [];

      for (let newItem in responsive.data) {
        myArr.push(responsive.data[newItem]);
      }
      return myArr;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getById = createAsyncThunk("products/getById", async (itemId) => {
  try {
    const responsive = await axios.get(
      `https://main-data-8ef87-default-rtdb.firebaseio.com/items.json?orderBy="_id"&equalTo=${itemId}`
    );
    const myArr1 = [];

    for (let newItem in responsive.data) {
      myArr1.push(responsive.data[newItem]);
    }
    return myArr1;
    // console.log(responsive.data);
  } catch (error) {
    console.log(error);
  }
});
export const getBlogById = createAsyncThunk(
  "products/getBlogById",
  async (itemBlogId) => {
    try {
      const responsive = await axios.get(
        `https://main-data-8ef87-default-rtdb.firebaseio.com/blogs.json?orderBy="id"&equalTo=${itemBlogId}`
      );
      console.log(responsive.data);
      const myArr2 = [];

      for (let newItem in responsive.data) {
        myArr2.push(responsive.data[newItem]);
      }
      return myArr2;
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
    build.addCase(getitems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    build.addCase(getById.fulfilled, (state, action) => {
      state.listItemID = action.payload;
    });
    build.addCase(getBlogById.fulfilled, (state, action) => {
      state.blogsId = action.payload;
    });
  },
});

export default productsSlice.reducer;
