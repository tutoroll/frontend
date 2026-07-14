import { client } from "@/src/shared/api/client";
import { RegisterRequestForm, RegisterResponse } from "./models";

export const registerUser = async (
  form: RegisterRequestForm,
): Promise<RegisterResponse> => {
  const res = await client.post<RegisterResponse>("/auth/register", form);
  return res.data;
};
