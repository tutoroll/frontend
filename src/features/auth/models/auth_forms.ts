import { UserRole } from "./user_types";

export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserLoginRequest extends UserLoginForm {
  role: UserRole;
}

export interface RegisterRequestForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: string;
}
