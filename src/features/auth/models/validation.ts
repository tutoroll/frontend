import type {
  LoginFormErrors,
  LoginFormValues,
  RegisterFormErrors,
  RegisterFormValues,
} from "./auth_forms";

const REQUIRED = "Поле обязательно к заполнению";

export function validateRegisterForm(
  values: RegisterFormValues,
): RegisterFormErrors {
  const errors: RegisterFormErrors = {};

  if (!values.name.trim()) errors.name = REQUIRED;
  if (!values.surname.trim()) errors.surname = REQUIRED;
  if (!values.email.trim()) errors.email = REQUIRED;
  // позже: email format, password length — сюда же
  if (!values.password) errors.password = REQUIRED;

  return errors;
}

export function validateLoginForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {};

  if (!values.email.trim()) errors.email = REQUIRED;
  // позже: email format, password length — сюда же
  if (!values.password) errors.password = REQUIRED;

  return errors;
}

export function hasErrors(errors: Record<string, string | undefined>): boolean {
  return Object.values(errors).some(Boolean);
}
