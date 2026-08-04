"use client";

import { useCurrentUser } from "@/src/features/user/hooks/useCurrentUser";
import { UserAvatar } from "@/src/shared/ui/UserAvatar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const UserMenuItem = ({ selected }: { selected: boolean }) => {
  const [hidden, setHidden] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (
        hidden ||
        (e.target instanceof Node && overlayRef.current?.contains(e.target))
      ) {
        return;
      }
      setHidden(true);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [hidden]);

  const { data } = useCurrentUser();

  return (
    <div className="relative">
      <div
        onClick={() => {
          setHidden((prev) => !prev);
        }}
        className={`flex border rounded-2xl ${selected ? "border-blue-300" : "border-base-100"} p-2 gap-3 hover:scale-105 transition-all duration-200 cursor-pointer`}
      >
        <UserAvatar url={data?.avatarUrl} size={50} />
        <p className="text-base-800 text-body-m font-medium">
          {data?.surname} {data?.name}
        </p>
      </div>
      <div
        ref={overlayRef}
        onClick={() => setHidden(true)}
        className={`absolute  flex-col gap-2 bg-base-0 shadow-card p-2 rounded-2xl top-full mt-3 left-0 right-0 ${hidden ? "hidden" : ""}`}
      >
        <ProfilePopupMenuItem />
        <ExitPopupMenuItem />
      </div>
    </div>
  );
};

const ProfilePopupMenuItem = () => {
  return (
    <Link
      href={"/user/me"}
      className="flex text-body-s text-base-700 rounded-lg hover:bg-base-25 p-2 gap-2 items-center"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 7.5C10.6569 7.5 12 6.15685 12 4.5C12 2.84315 10.6569 1.5 9 1.5C7.34315 1.5 6 2.84315 6 4.5C6 6.15685 7.34315 7.5 9 7.5Z"
          stroke="#454545"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 16.5C15.75 12.7721 12.7279 9.75 9 9.75C5.27209 9.75 2.25 12.7721 2.25 16.5"
          stroke="#454545"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Профиль
    </Link>
  );
};

const ExitPopupMenuItem = () => {
  return (
    <button
      //   href={"/profile"}
      className="w-full flex text-body-s text-base-700 rounded-lg hover:bg-base-25 p-2 gap-2 items-center cursor-pointer"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99689 2.25H2.25V15.75H9"
          stroke="#454545"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.375 12.375L15.75 9L12.375 5.625"
          stroke="#454545"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 8.99683H15.75"
          stroke="#454545"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Выйти
    </button>
  );
};
