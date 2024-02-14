import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  selectedCompany: {},
  searchedCompanies: [],
  isLoading: true,
  totalCompanies: 0,
  currentPageNo: 1,
  isCompanyContainerVisble: true,
  error: false,
};

const companySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    setCompanies(state, action) {
      state.companies = action.payload.companies;
      state.selectedCompany = { ...action.payload.companies[0] };
      state.totalCompanies = action.payload.totalCompanies;
      state.error = false;
      state.isLoading = false;
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
      state.selectedCompany = { ...action.payload };
      return state;
    },
    prevPage(state) {
      state.currentPageNo -= 1;
      state.isLoading = true;
      return state;
    },
    nextPage(state) {
      state.currentPageNo += 1;
      state.isLoading = true;
      return state;
    },
    setIsCompanyContainerVisible(state, action) {
      state.isCompanyContainerVisble = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
      return state;
    },
  },
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
