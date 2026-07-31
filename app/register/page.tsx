"use client";

import { RegisterForm } from "@/src/features/auth";
import { AuthPageShell } from "@/src/features/auth/ui/AuthShell";
import { AuthCard } from "@/src/features/auth/ui/AuthCard";

export default function RegisterPage() {
  return (
    <AuthPageShell>
      {(role) => (
        <AuthCard>
          <p className="text-base-900 text-h5">Регистрация</p>
          <RegisterForm role={role} />
        </AuthCard>
      )}
    </AuthPageShell>
  );
}
