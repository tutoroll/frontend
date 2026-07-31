import { UserRole } from "./user_types";

/** То, что пользователь вводит в UI */
export interface LoginFormValues {
  email: string;
  password: string;
}

/** То, что уходит на бэк */
export type UserLoginRequest = LoginFormValues & {
  role: UserRole;
};

/** То, что пользователь вводит в UI */
export interface RegisterFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

/** То, что уходит на бэк */
export type RegisterRequest = RegisterFormValues & {
  role: UserRole;
};

export type RegisterFormErrors = Partial<
  Record<keyof RegisterFormValues, string>
>;

export type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

export interface RegisterResponse {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: string;
}
