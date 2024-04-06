import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSchoolManagementSlice from "./slices/SchoolManagement/postSchoolManagementSlice";
import updateSchoolManagementSlice from "./slices/SchoolManagement/updateSchoolManagementSlice";
import deleteSchoolManagementSlice from "./slices/SchoolManagement/deleteSchoolManagementSlice";
import getSchoolManagementSlice from "./slices/SchoolManagement/getSchoolManagementSlice";
const rootSlices = combineReducers({
  postSchoolManagement: postSchoolManagementSlice,
  deleteSchoolManagement: deleteSchoolManagementSlice,
  updateSchoolManagement: updateSchoolManagementSlice,
  getSchoolManagement: getSchoolManagementSlice,
});

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  reducer: rootSlices,
});
export const resetState = () => {
  return rootSlices(undefined, {});
};

export default store;
