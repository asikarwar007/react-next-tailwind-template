let baseURL = 'http://localhost:8080'
// let baseURL = process.env.API_URL
export const API_ENDPOINTS = {
  STATE: baseURL + "/states",
  EPIC_SEARCH: baseURL + "/epic",
  CAPTCHA: baseURL + "/generate-captcha",
};
