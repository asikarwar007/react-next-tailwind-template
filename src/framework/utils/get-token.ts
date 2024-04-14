import Cookies from "js-cookie";

export const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get("auth_token");
};
export const getUserId = () :string | undefined => {
  if (typeof window === undefined) {
    return '';
  }
  return Cookies.get("userId");
};
