import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/producSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
export default store;
