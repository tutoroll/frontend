import { ReactNode } from "react";
import { RootMenuItem } from "./MenuItem";

export type Page = "profile" | "search" | "tasks" | "subjects" | "settings";

export const RootPageShell = ({
  children,
  page,
}: {
  children: ReactNode;
  page: Page;
}) => {
  return (
    <main className="h-screen w-screen flex bg-blue-25">
      <div className="flex flex-col py-6 px-4 w-260/1512 items-start">
        <div className="flex-1 flex flex-col items-start gap-4">
          <RootMenuItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3285 7.17155C12.6046 6.4477 11.6046 6 10.5 6C9.39548 6 8.39548 6.4477 7.67163 7.17155"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6108 16.6108L20.8535 20.8535"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Поиск"
            link="search"
            selected={page === "search"}
          />
          <RootMenuItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 3C4 2.44771 4.44771 2 5 2H15L20 7V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Домашние задания"
            link="tasks"
            selected={page === "tasks"}
          />
          <RootMenuItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 3H19.5C19.5 3 21.5 4 21.5 6.5C21.5 9 19.5 10 19.5 10H2.5C2.5 10 4.5 9 4.5 6.5C4.5 4 2.5 3 2.5 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5 14H4.5C4.5 14 2.5 15 2.5 17.5C2.5 20 4.5 21 4.5 21H21.5C21.5 21 19.5 20 19.5 17.5C19.5 15 21.5 14 21.5 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Предметы"
            link="subjects"
            selected={page === "subjects"}
          />
        </div>
        <RootMenuItem
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1419 21.5857C7.46635 21.0868 5.9749 20.1607 4.79393 18.9335C5.2345 18.4114 5.5 17.7367 5.5 17.0001C5.5 15.3432 4.15685 14.0001 2.5 14.0001C2.39977 14.0001 2.3007 14.005 2.203 14.0146C2.0699 13.3639 2 12.6902 2 12.0001C2 10.9548 2.16039 9.9469 2.4579 8.99975C2.47191 8.99995 2.48594 9.00005 2.5 9.00005C4.15685 9.00005 5.5 7.6569 5.5 6.00005C5.5 5.5244 5.3893 5.07465 5.1923 4.67506C6.34875 3.59975 7.76025 2.79501 9.32605 2.36157C9.8222 3.3341 10.8333 4.00007 12 4.00007C13.1667 4.00007 14.1778 3.3341 14.674 2.36157C16.2398 2.79501 17.6512 3.59975 18.8077 4.67506C18.6107 5.07465 18.5 5.5244 18.5 6.00005C18.5 7.6569 19.8432 9.00005 21.5 9.00005C21.5141 9.00005 21.5281 8.99995 21.5421 8.99975C21.8396 9.9469 22 10.9548 22 12.0001C22 12.6902 21.9301 13.3639 21.797 14.0146C21.6993 14.005 21.6002 14.0001 21.5 14.0001C19.8432 14.0001 18.5 15.3432 18.5 17.0001C18.5 17.7367 18.7655 18.4114 19.2061 18.9335C18.0251 20.1607 16.5336 21.0868 14.8581 21.5857C14.4714 20.376 13.338 19.5001 12 19.5001C10.662 19.5001 9.5286 20.376 9.1419 21.5857Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Настройки"
          link="settings"
          selected={page === "settings"}
        />
      </div>
      <div className="flex-1 m-4 p-6 bg-base-0 rounded-2xl shadow-card">
        {children}
      </div>
    </main>
  );
};
