"use client";

import { useCurrentUser } from "../hooks/useCurrentUser";

export const CurrentUserWidget = () => {
  const curUser = useCurrentUser();

  return (
    <div className="flex h-screen w-screnn justify-center items-center">
      <div className="flex flex-col bg-blue-100 rounded-s p-4">
        <p>Информация о пользователе</p>
        {curUser.isPending && <p>Загрузка...</p>}
        {curUser.isFetched && (
          <>
            <p>
              {[curUser.data?.surname, curUser.data?.name]
                .filter(Boolean)
                .join(" ")}
            </p>
            <p>Email</p>
            <p>{curUser.data?.email}</p>
          </>
        )}
      </div>
    </div>
  );
};
