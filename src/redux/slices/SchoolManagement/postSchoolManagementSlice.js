import { createSlice } from "@reduxjs/toolkit";
export const postSchoolManagementSlice = createSlice({
  name: "postSchoolManagementSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    postSchoolManagement: (state) => {
      state.loading = true;
    },
    postSchoolManagementSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    postSchoolManagementFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPostSchoolManagement: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  postSchoolManagement,
  postSchoolManagementSuccess,
  postSchoolManagementFailure,
  clearPostSchoolManagement,
} = postSchoolManagementSlice.actions;

export default postSchoolManagementSlice.reducer;
