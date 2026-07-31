"use client";

import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import {
  RegisterFormErrors,
  RegisterFormValues,
} from "../../models/auth_forms";
import { UserRole } from "../../models/user_types";
import { Button } from "@/src/shared/ui/button/Button";
import { ButtonState, ButtonType } from "@/src/shared/ui/button/properties";
import { Input } from "@/src/shared/ui/input/Input";
import { InputSize } from "@/src/shared/ui/input/properties";
import { AvatarPicker } from "./AvatarPicker";
import { PasswordInput } from "../PasswordInput";
import { hasErrors, validateRegisterForm } from "../../models/validation";

type RegisterFieldType = keyof RegisterFormValues;

interface RegisterFormProps {
  role: UserRole;
}

export const RegisterForm = ({ role }: RegisterFormProps) => {
  const [form, setForm] = useState<RegisterFormValues>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const err = errors[e.target.name as RegisterFieldType];
    if (err) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate, isPending, error } = useRegister();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isPending) return;
    const errors = validateRegisterForm(form);
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
        <AvatarPicker />
        <Input
          errorMsg={errors.name}
          size={InputSize.h58}
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Имя"
        />
        <Input
          errorMsg={errors.surname}
          size={InputSize.h58}
          name="surname"
          value={form.surname}
          onChange={handleChange}
          type="text"
          placeholder="Фамилия"
        />
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
          value={form.password}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <Button
          className="w-full"
          type={ButtonType.secondary}
          state={isPending ? ButtonState.loading : ButtonState.idle}
          title="Зарегистрироваться"
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
