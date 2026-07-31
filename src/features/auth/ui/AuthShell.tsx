"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { parseUserRole, UserRole } from "../models/user_types";

export const AuthPageShell = ({
  children,
}: {
  children: (role: UserRole) => ReactNode;
}) => {
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
    <main className="flex w-screen h-screen justify-center items-center">
      {children(role)}
    </main>
  );
};
