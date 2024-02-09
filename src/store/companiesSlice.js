import { createSlice } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../utils/localstorage";

const initialState = {
  companies: [],
  selectedCompany: [],
  error: false,
};

const companySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    setCompanies(state, action) {
      state.companies = action.payload;
      state.selectedCompany = [action.payload[0]];
      return state;
    },
    setSelectedCompany(state, action) {
      state.selectedCompany = state.companies.filter(
        (company) => company.id === action.payload
      );
      return state;
    },
    setError(state, action) {
      state.error = action.payload;
      return state;
    },
  },
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
