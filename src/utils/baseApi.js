import { getFromStorage } from "./storage";
import axios from "axios";
import { errorMessage } from "./message";

export const postRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.post(api, body, headers);
};
export const patchRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.put(api, body, headers);
};
export const fileRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.post(api, body, headers);
};
export const patchFileRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.patch(api, body, headers);
};

export const getRequest = (api) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.get(api, headers);
};

export const deleteRequest = (api) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getFromStorage("token")}`,
    },
  };

  return axios.delete(api, headers);
};
export const deleteReqWithBody = (api, body) => {
  return axios.delete(api, {
    headers: {
      Authorization: "Bearer " + getFromStorage("token"),
    },
    data: {
      ...body,
    },
  });
};

export const getError = (err) => {
  if (err.response) {
    errorMessage(err?.message);
  } else {
    errorMessage(err.toString());
  }
};
