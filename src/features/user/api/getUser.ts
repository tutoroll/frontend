import { client } from "@/src/shared/api/client";
import { UserModel } from "@/src/shared/models/user";
import { UserAvatarUrlResponse, UserResponse } from "./dto";

export const getCurrentUser = async (): Promise<UserModel> => {
  const [userRes, avatarRes] = await Promise.all([
    client.get<UserResponse>("/user/me"),
    client.get<UserAvatarUrlResponse>("/user/avatar/me"),
  ]);

  const { id, name, surname, email, created_at } = userRes.data;

  return {
    id,
    name,
    surname,
    email,
    createdAt: created_at,
    avatarUrl: avatarRes.data.url,
  };
};

export const getUserById = async (userId: number): Promise<UserModel> => {
  return new Promise(() => {});
};
