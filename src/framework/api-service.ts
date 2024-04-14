import axiosInstance from "@/data-provider/axios-instance";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const ApiService = {
  fetchData<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>,
  ) {
    return new Promise<AxiosResponse<Response>>((resolve, reject) => {
      axiosInstance(param)
        .then((response: AxiosResponse<Response>) => {
          resolve(response);
        })
        .catch((errors: AxiosError) => {
          reject(errors);
        });
    });
  },
};
