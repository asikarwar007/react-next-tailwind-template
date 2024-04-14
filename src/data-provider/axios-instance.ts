import axios from "axios";
import { UnauthorizedErrors } from "@/types/apis/common.api";
import { AppConfig } from "@/setting/app.config";

// const API_URL = import.meta.env.VITE_APP_URL;
const API_URL = process.env.APP_URL;
// Create an instance of Axios with your custom configuration
console.log(API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, such as adding headers or tokens
    // For example, adding an authorization header with a token
    const accessTokenRaw = sessionStorage.getItem(AppConfig.apiTokenKey);
    if (accessTokenRaw && config.headers) {
      config.headers.Authorization = `Bearer ${accessTokenRaw}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors here
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    if (response?.errors?.length) {
      if (
        response.errors.some((it: any) =>
          [
            UnauthorizedErrors.UNAUTHORIZED,
          ].includes(it.message),
        )
      ) {
        sessionStorage.clear();
        window.location.reload();
      }
      HandleError(response);
    }
    return response;
  },
  (error) => {
    const customError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  },
);

export const HandleError = (response?: any) => {
    const customError = {
        ...response,
        message: response?.data?.message,
        statusCode: response?.status,
      };
  
      return Promise.reject(customError);
};
export default axiosInstance;

// axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
//   const token = localStorage.getItem("token");
//   if (request.headers) {
//     request.headers["Authorization"] = `Bearer ${token}`;
//   } else {
//     request.headers = {
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return request;
// });
