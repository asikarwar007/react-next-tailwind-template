import useSWR from "swr";
import { fetcher } from "@/util/fetcher";
import { API_ENDPOINTS } from "./utils/api-endpoints";

export const useGetCaptchaQuery = () => {
  return useSWR(
    API_ENDPOINTS.CAPTCHA,
    fetcher
  )
};
