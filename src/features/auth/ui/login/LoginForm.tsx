"use client";

import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { LoginFormErrors, LoginFormValues } from "../../models/auth_forms";
import { PasswordInput } from "../PasswordInput";
import { ButtonState } from "@/src/shared/ui/button/properties";
import { Button } from "@/src/shared/ui/button/Button";
import { Input } from "@/src/shared/ui/input/Input";
import { InputSize } from "@/src/shared/ui/input/properties";
import { hasErrors, validateLoginForm } from "../../models/validation";
import { UserRole } from "../../models/user_types";

type LoginFieldType = keyof LoginFormValues;

export const LoginForm = ({ role }: { role: UserRole }) => {
  const [form, setForm] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const err = errors[e.target.name as LoginFieldType];
    if (err) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate, isPending, error } = useLogin();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isPending) return;
    const errors = validateLoginForm(form);
    const hasAny = hasErrors(errors);
    if (hasAny) {
      setErrors(errors);
      return;
    }
    mutate({ ...form, role: role });
  };

  return (
    <div className="flex flex-col gap-7">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center gap-5"
      >
        <Input
          errorMsg={errors.email}
          size={InputSize.h58}
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Электронный адрес"
        />
        <PasswordInput
          errorMsg={errors.password}
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
        />
        <Button
          className="w-full"
          state={isPending ? ButtonState.loading : ButtonState.idle}
          title="Войти"
          htmlType="submit"
        />
      </form>
      {error && (
        <p className="text-body-s text-red-500">
          Что-то пошло не так, попробуйте позже
        </p>
      )}
    </div>
  );
};
