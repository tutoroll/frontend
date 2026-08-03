"use client";

import { ReactNode, useEffect, useState } from "react";

export const MSWProvider = ({ children }: { children: ReactNode }) => {
  const mswEnabled = process.env.NEXT_PUBLIC_MSW_ENABLED === "true";
  const [ready, setReady] = useState(!mswEnabled);

  useEffect(() => {
    const enableMSW = async () => {
      if (!mswEnabled) {
        return;
      }
      const { worker } = await import("@/src/mocks/browser");
      await worker.start({
        onUnhandledRequest: "bypass", // пропускать запросы, которые не описаны в handlers
      });
      setReady(true);
    };

    enableMSW();
  }, [mswEnabled]);

  if (!ready) return null;
  return children;
};
