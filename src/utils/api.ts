import axios from "axios";

import { BASE_URL } from "app_constants/api";
import { AUTH_TOKEN } from "app_config";

export const sendRequest = async (path: string, params: object = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${path}`, {
      params: {
        ...params,
      },
    });
    return response?.data;
  } catch (err) {
    console.log("Api Error: ", err);
  }
};

export const initializeAPI = (): void => {
  axios.defaults.headers.common = { Authorization: `Bearer ${AUTH_TOKEN}` };
};
