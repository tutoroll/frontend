"use client";

import { LoginForm } from "@/src/features/auth";
import { AuthCard } from "@/src/features/auth/ui/AuthCard";
import { AuthPageShell } from "@/src/features/auth/ui/AuthShell";

export default function LoginPage() {
  return (
    <AuthPageShell>
      {(role) => (
        <AuthCard>
          <p className="text-base-900 text-h5">Вход в аккаунт</p>
          <LoginForm role={role} />
        </AuthCard>
      )}
    </AuthPageShell>
  );
}
