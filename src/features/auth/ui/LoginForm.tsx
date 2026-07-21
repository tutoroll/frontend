"use client";

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { UserLoginForm } from "../models/auth_forms";
import { useSearchParams } from "next/navigation";
import { parseUserRole } from "../models/user_types";

export const LoginForm = () => {
  const [hidden, setHidden] = useState(true);

  const searchParams = useSearchParams();
  const roleStr = searchParams.get("role");
  const userRole = parseUserRole(roleStr);

  const [form, setForm] = useState<UserLoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const m = useLogin();

  const handleSubmit = () => {
    if (m.isPending) return;
    m.mutate(
      { ...form, role: userRole! },
      {
        onError: () => setForm({ email: "", password: "" }),
      },
    );
  };

  if (userRole === null) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        {roleStr} не являтеся корректным role
      </div>
    );
  }

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-blue-50/50 colo">
      <div className="flex w-6/10 flex-col bg-white shadow-2xl border border-blue-200 rounded-2xl p-4 gap-4">
        <span className="inline-block font-bold">Вход в аккаунт</span>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="text"
          placeholder="Электронный адрес"
          className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
        />
        <div className="relative">
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type={hidden ? "password" : "text"}
            placeholder="Пароль"
            className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:shadow-md focus:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
          />
          <button
            onClick={() => setHidden((cur) => !cur)}
            id="togglePassword"
            type="button"
            className="absolute inset-y-0 right-0 flex items-center justify-end pr-4 text-gray-400 hover:text-gray-600 focus:outline-none transition duration-200"
            aria-label="Toggle password visibility"
          >
            {hidden ? (
              <svg
                id="eyeClosed"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                id="eyeOpen"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="flex w-full h-20 bg-blue-100 rounded-2xl justify-center items-center hover:bg-blue-200 cursor-pointer"
        >
          <p className="text-blue-600 text-xl font-bold">
            {m.isPending ? "Загрузка..." : "Войти"}
          </p>
        </button>
        {m.isError && <p className="text-red-500 text-sm">{m.error.message}</p>}
      </div>
    </main>
  );
};
