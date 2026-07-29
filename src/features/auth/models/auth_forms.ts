import { UserRole } from "./user_types";

export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserLoginRequest extends UserLoginForm {
  role: UserRole;
}

/** То, что пользователь вводит в UI */
export interface RegisterFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

/** То, что уходит на бэк */
export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: UserRole;
}

export type RegisterFormErrors = Partial<
  Record<keyof RegisterFormValues, string>
>;

export interface RegisterResponse {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: string;
}
