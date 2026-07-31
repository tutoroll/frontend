import axios from "axios";

const config = {
  baseURL: "http://localhost:8000",
  timeout: 3000,
  withCredentials: true,
};

export const client = axios.create(config);
