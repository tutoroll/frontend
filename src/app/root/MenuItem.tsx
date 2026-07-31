import Link from "next/link";
import { ReactElement } from "react";

interface RootMenuItemProps {
  icon: ReactElement;
  title: string;
  link: string;
  selected: boolean;
}

export const RootMenuItem = ({
  icon,
  title,
  link,
  selected,
}: RootMenuItemProps) => {
  return (
    <Link
      className={`flex ${selected ? "text-blue-400" : "text-base-500 hover:text-base-700"} text-body-s font-medium gap-2 hover:scale-105 transition-all duration-200 items-center justify-center`}
      href={link}
    >
      {icon}
      {title}
    </Link>
  );
};
