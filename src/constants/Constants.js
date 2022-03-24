import axios from "axios";

export const BASE_URL = "https://intern-api.engineerscradle.com/api/ft/";
export const GET_URL = BASE_URL + "task2/view/72dheje";
export const POST_URL = BASE_URL + "task1/add";
export const GET_LAYOUT_URL =BASE_URL + "task3/layout";
export const GET_LOGO_URL = BASE_URL + "task3/layout/logo";
export const LAYOUT_END_POINT = [axios.get(GET_LAYOUT_URL), axios.get(GET_LOGO_URL)];
export const UNIQUE_CODE = "72dheje";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export  const options = [
  { value: " Select job status", label: " Select job status" },
  { value: "Unemployed", label: "Unemployed" },
  { value: "Working", label: "Working" },
  { value: "Student", label: "Student" },
  { value: "Retired", label: "Retired" },
];