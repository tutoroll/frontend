import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "http://localhost:8000",
  timeout: 3000,
  withCredentials: true,
};

export const client = axios.create(config);
