"use client";

import { Page, RootPageShell } from "@/src/app/root/PageShell";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const selectedPage: Page | undefined = (() => {
    if (pathName.startsWith("/search")) return "search";
    if (pathName.startsWith("/settings")) return "settings";
    if (pathName.startsWith("/subjects")) return "subjects";
    if (pathName.startsWith("/tasks")) return "tasks";
    if (pathName.startsWith("/user/me")) return "profile";
  })();

  return <RootPageShell page={selectedPage}>{children}</RootPageShell>;
}
