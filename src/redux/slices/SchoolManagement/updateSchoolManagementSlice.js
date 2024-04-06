import { createSlice } from "@reduxjs/toolkit";
export const updateSchoolManagementSlice = createSlice({
  name: "updateSchoolManagementSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateSchoolManagement: (state) => {
      state.loading = true;
    },
    updateSchoolManagementSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateSchoolManagementFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateSchoolManagement: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  updateSchoolManagement,
  updateSchoolManagementSuccess,
  updateSchoolManagementFailure,
  clearUpdateSchoolManagement,
} = updateSchoolManagementSlice.actions;

export default updateSchoolManagementSlice.reducer;
