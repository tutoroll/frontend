import { ReactNode } from "react";

export const AuthCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-450/1512 flex flex-col bg-base-0 shadow-card rounded-2xl p-6 gap-4">
      {children}
    </div>
  );
};
