import axios from "axios";
import { getAccessToken, getCurrentLanguage } from "../helper/localStorage";

const configRequest = async (config) => {
  const access_token =
    getAccessToken() || localStorage.getItem("access_token") || "";
  const lang = getCurrentLanguage();
  config.headers["X-localization"] = lang.replace("/", "") || "ja";
  if (access_token) config.headers["Authorization"] = `Bearer ${access_token}`;

  return config;
};

const responseResolve = (response) => {
  return response.data;
};

const responseReject = (error) => {
  return Promise.reject(error);
};

const axiosClient = axios.create({
  baseURL: process.env.MIX_REACT_APP_URL,
  headers: {
    "content-text": "application/json",
  },
});

axiosClient.interceptors.request.use(configRequest);

axiosClient.interceptors.response.use(responseResolve, responseReject);

export const axiosFormData = axios.create({
  baseURL: process.env.MIX_REACT_APP_URL,
  headers: {
    "content-type": "multipart/form-data",
  },
});

axiosFormData.interceptors.request.use(configRequest);

axiosFormData.interceptors.response.use(responseResolve, responseReject);

export default axiosClient;
