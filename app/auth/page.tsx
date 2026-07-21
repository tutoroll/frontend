"use client";

import { UserRole } from "@/src/features/auth/models/user_types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [role, setRole] = useState(UserRole.student);

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-blue-15">
      <div className="w-450/1512 flex flex-col bg-base-0 shadow-2xl rounded-2xl p-6 gap-4">
        <UserRoleComponent
          role={UserRole.student}
          selectedRole={role}
          selectCurrentRole={setRole}
        />
        <UserRoleComponent
          role={UserRole.tutor}
          selectedRole={role}
          selectCurrentRole={setRole}
        />
        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.replace(`/login?role=${role}`)}
            className="flex w-full h-15 bg-blue-400 rounded-lg justify-center items-center hover:bg-blue-500 cursor-pointer"
          >
            <p className="text-base-0 text-body-m font-medium">Войти</p>
          </button>
          <button
            onClick={() => router.push(`/register?role=${role}`)}
            className="flex w-full h-15 bg-blue-50 rounded-lg justify-center items-center hover:bg-blue-100 cursor-pointer"
          >
            <p className="text-blue-400  text-body-m font-medium">
              Зарегистрироваться
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}

interface UserRoleComponentProps {
  role: UserRole;
  selectedRole: UserRole;
  selectCurrentRole: (role: UserRole) => void;
}

function UserRoleComponent(props: UserRoleComponentProps) {
  const role = props.role;
  const selected = role === props.selectedRole;
  const roleTitle = role == UserRole.student ? "Студент" : "Преподаватель";
  const searching =
    role == UserRole.student ? "Я ищу преподавателя" : "Я ищу учеников";

  return (
    <div
      onClick={() => props.selectCurrentRole(role)}
      className={`flex flex-col w-full h-40 border ${selected ? "border-blue-400" : "border-base-100"} p-4 gap-2.5 rounded-2xl hover:bg-blue-25 cursor-pointer transition-all duration-200`}
    >
      <p className="text-base-900 text-body-m font-medium">{searching}</p>
      <p className="text-base-400 text-body-s">{roleTitle}</p>
    </div>
  );
}
