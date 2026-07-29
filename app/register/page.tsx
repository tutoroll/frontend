// app/register/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { RegisterForm } from "@/src/features/auth";
import { parseUserRole } from "@/src/features/auth/models/user_types";

export default function RegisterPage() {
  const roleStr = useSearchParams().get("role");
  const role = parseUserRole(roleStr);

  if (role === null) {
    return (
      <main className="flex w-screen h-screen items-center justify-center">
        {roleStr} не является корректным role
      </main>
    );
  }

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-blue-15">
      <div className="flex w-450/1512 flex-col bg-base-0 shadow-card rounded-2xl p-6 gap-7">
        <p className="text-base-900 text-h5">Регистрация</p>
        <RegisterForm role={role} />
      </div>
    </main>
  );
}