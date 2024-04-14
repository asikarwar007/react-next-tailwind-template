import useSWR from "swr";
import { fetcher } from "@/util/fetcher";
import { API_ENDPOINTS } from "./utils/api-endpoints";

export const useGetStatesQuery = (options: any) => {
  return useSWR(
    API_ENDPOINTS.STATE,
    fetcher
  )
};
