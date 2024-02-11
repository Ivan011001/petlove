import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pet-management.onrender.com/api/v1",
});
