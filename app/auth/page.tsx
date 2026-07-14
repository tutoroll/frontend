"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserRole } from "../../src/features/register/api/types";

export default function AuthPage() {
  const router = useRouter();
  const [role, setRole] = useState(UserRole.student);

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-blue-50/50">
      <div className="flex w-3/10 flex-col bg-white shadow-2xl border border-blue-200 rounded-2xl p-8 gap-4">
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
        <button className="flex w-full h-20 bg-blue-500 rounded-2xl justify-center items-center hover:bg-blue-600 cursor-pointer">
          <p className="text-white text-xl font-bold">Войти</p>
        </button>
        <button
          onClick={() => router.push(`/register?role=${role}`)}
          className="flex w-full h-20 bg-blue-100 rounded-2xl justify-center items-center hover:bg-blue-200 cursor-pointer"
        >
          <p className="text-blue-600 text-xl font-bold">Зарегистрироваться</p>
        </button>
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
      className={`flex flex-col w-full h-40 border-2 bg-white ${selected ? "border-blue-500" : "border-gray-100"} p-4 gap-2 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200`}
    >
      <p className="font-bold text-xl">{searching}</p>
      <p className="text-gray-400 text-l">{roleTitle}</p>
    </div>
  );
}
