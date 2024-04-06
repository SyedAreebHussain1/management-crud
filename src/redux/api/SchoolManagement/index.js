import { API } from "../../../utils/apiEndPoints";
import {
  deleteRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  postSchoolManagement,
  postSchoolManagementSuccess,
  postSchoolManagementFailure,
} from "../../slices/SchoolManagement/postSchoolManagementSlice";
import {
  deleteSchoolManagement,
  deleteSchoolManagementSuccess,
  deleteSchoolManagementFailure,
} from "../../slices/SchoolManagement/deleteSchoolManagementSlice";
import {
  getSchoolManagement,
  getSchoolManagementSuccess,
  getSchoolManagementFailure,
} from "../../slices/SchoolManagement/getSchoolManagementSlice";
import {
  updateSchoolManagement,
  updateSchoolManagementSuccess,
  updateSchoolManagementFailure,
} from "../../slices/SchoolManagement/updateSchoolManagementSlice";

export async function postSchoolManagementApi(dispatch, body, onSuccess) {
  dispatch(postSchoolManagement());
  try {
    let res = await postRequest(API.dashboard.schoolManagement, body);
    dispatch(postSchoolManagementSuccess(res.data));
    successMessage("Successfully Create");
    onSuccess();
  } catch (error) {
    getError(error);
    dispatch(postSchoolManagementFailure(error));
  }
}
export async function getSchoolManagementApi(dispatch) {
  dispatch(getSchoolManagement());
  try {
    let res = await getRequest(API.dashboard.schoolManagement);
    dispatch(getSchoolManagementSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(getSchoolManagementFailure(error));
  }
}

export async function updateSchoolManagementApi(dispatch, body, id, onSuccess) {
  dispatch(updateSchoolManagement());
  try {
    let res = await patchRequest(
      `${API.dashboard.schoolManagement}/${id}`,
      body
    );
    dispatch(updateSchoolManagementSuccess(res.data));
    successMessage("Successfully Update");
    onSuccess();
  } catch (error) {
    getError(error);
    dispatch(updateSchoolManagementFailure(error));
  }
}
export async function deleteSchoolManagementApi(dispatch, id) {
  dispatch(deleteSchoolManagement());
  try {
    let res = await deleteRequest(`${API.dashboard.schoolManagement}/${id}`);
    dispatch(deleteSchoolManagementSuccess(res.data));
    successMessage("Successfully Delete");
  } catch (error) {
    getError(error);
    dispatch(deleteSchoolManagementFailure(error.response.data));
  }
}
