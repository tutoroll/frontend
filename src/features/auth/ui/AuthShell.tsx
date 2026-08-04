"use client";

import { UserRole } from "@/src/shared/models/user";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export const AuthPageShell = ({
  children,
}: {
  children: (role: UserRole) => ReactNode;
}) => {
  const roleStr = useSearchParams().get("role");
  const role = ((): UserRole | undefined => {
    if (roleStr === "student" || roleStr === "tutor") {
      return roleStr;
    }
  })();

  if (role === undefined) {
    return (
      <main className="flex w-screen h-screen items-center justify-center">
        {roleStr} не является корректным role
      </main>
    );
  }

  return (
    <main className="flex w-screen h-screen justify-center items-center">
      {children(role)}
    </main>
  );
};
