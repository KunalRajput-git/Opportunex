import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  selectedCompany: [],
  searchedCompanies: [],
  totalCompanies: 0,
  currentPageNo: 1,
  error: false,
};

const companySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    setCompanies(state, action) {
      state.companies = action.payload.companies;
      state.selectedCompany = [action.payload.companies[0]];
      state.totalCompanies = action.payload.totalCompanies;
      return state;
    },
    setSearchedCompanies(state, action) {
      state.searchedCompanies = action.payload;
      return state;
    },
    setSelectedCompany(state, action) {
      let isExist = state.companies.some(
        (company) => company.id === action.payload.id
      );
      if (!isExist) state.companies.unshift(action.payload);
      state.selectedCompany = [action.payload];
      return state;
    },
    prevPage(state) {
      state.currentPageNo -= 1;
      return state;
    },
    nextPage(state) {
      state.currentPageNo += 1;
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
