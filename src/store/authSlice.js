import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "", email: "", password: "" },
  error: false,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
