import { createSlice } from "@reduxjs/toolkit";
export const deleteSchoolManagementSlice = createSlice({
  name: "deleteSchoolManagementSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteSchoolManagement: (state) => {
      state.loading = true;
    },
    deleteSchoolManagementSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    deleteSchoolManagementFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearDeleteSchoolManagement: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  deleteSchoolManagement,
  deleteSchoolManagementSuccess,
  deleteSchoolManagementFailure,
  clearDeleteSchoolManagement,
} = deleteSchoolManagementSlice.actions;

export default deleteSchoolManagementSlice.reducer;
