export interface UserModel {
  id: number;
  name: string;
  surname: string;
  email: string;
  createdAt: string;
  userRole: UserRole;
  avatarUrl: string | null | undefined;
}

export type UserRole = "student" | "tutor";
