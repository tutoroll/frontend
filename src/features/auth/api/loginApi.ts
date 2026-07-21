import { client } from "@/src/shared/api/client";
import { UserLoginRequest } from "../models/auth_forms";

export const loginUser = async (data: UserLoginRequest): Promise<void> => {
  const res = await client.post<void>("/auth/login", data);
  return res.data;
};
