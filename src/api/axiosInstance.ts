import Axios, { AxiosError } from 'axios';

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_GITHUB_REST_ENDPOINT,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw error;
  },
);
