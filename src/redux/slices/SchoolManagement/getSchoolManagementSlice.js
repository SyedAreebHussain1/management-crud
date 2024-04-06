import { createSlice } from "@reduxjs/toolkit";
export const getSchoolManagementSlice = createSlice({
  name: "getSchoolManagementSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getSchoolManagement: (state) => {
      state.loading = true;
    },
    getSchoolManagementSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getSchoolManagementFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetSchoolManagement: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getSchoolManagement,
  getSchoolManagementSuccess,
  getSchoolManagementFailure,
  clearGetSchoolManagement,
} = getSchoolManagementSlice.actions;

export default getSchoolManagementSlice.reducer;
