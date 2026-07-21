import { client } from "@/src/shared/api/client";
import { UserModel } from "../models/user";

export const getCurrentUser = async (): Promise<UserModel> => {
  const res = await client.get<UserModel>("/user/me");
  return res.data;
};

export const getUserById = async (userId: number): Promise<UserModel> => {
  return new Promise(() => {});
};
