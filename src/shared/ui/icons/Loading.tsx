import { JSX } from "react/jsx-runtime";
import { IconProps } from "./iconProps";

export function LoadingIcon({ className, size = 24 }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`animate-spin ${className ?? "text-base-100"}`}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        d="M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
