import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companySlice from "./companiesSlice";

const store = configureStore({
  reducer: { authSlice: authSlice, companySlice: companySlice },
});

export default store;
