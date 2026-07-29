import { client } from "@/src/shared/api/client";
import { RegisterRequest, RegisterResponse } from "../models/auth_forms";

export const registerUser = async (
  form: RegisterRequest,
): Promise<RegisterResponse> => {
  const res = await client.post<RegisterResponse>("/auth/register", form);
  return res.data;
};
