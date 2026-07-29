import { ChangeEvent, HTMLInputTypeAttribute, JSX } from "react";
import { InputSize } from "./properties";

interface InputProps {
  className?: string;
  name?: string;
  value?: string | number | readonly string[];
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  size: InputSize;
  disabled?: boolean;
  errorMsg?: string | null;
  rightIcon?: JSX.Element;
  onChange?: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

export function Input({
  className,
  name,
  value,
  type,
  placeholder,
  disabled = false,
  size,
  errorMsg,
  rightIcon,
  onChange,
}: InputProps): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full relative items-center">
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={`${className ?? ""} text-body-m w-full text-base-900 placeholder:text-base-200 rounded-2xl bg-base-25 pl-4 ${rightIcon ? "pr-12" : "pr-4"} ${resolveHeight(size)} ${resolveColors(disabled, errorMsg != null)}`}
        />
        {rightIcon && (
          <div className="absolute w-6 h-6 right-4 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      {errorMsg != null && errorMsg !== "" && (
        <p className="text-caption text-red-300 px-1.5">{errorMsg}</p>
      )}
    </div>
  );
}

const stateColors = {
  idle: "border border-transparent focus:border-blue-300",
  error: "border border-red-300",
  disabled: "disabled opacity-40",
} as const;

function resolveColors(disabled: boolean, error: boolean): string {
  if (disabled) {
    return stateColors.disabled;
  } else if (error) {
    return stateColors.error;
  } else {
    return stateColors.idle;
  }
}

function resolveHeight(size: InputSize): string {
  switch (size) {
    case InputSize.h64:
      return "text-body-m h-[64px]";
    case InputSize.h58:
      return "text-body-s h-[58px]";
    case InputSize.h50:
      return "text-body-s h-[50px]";
    default:
      const _: never = size;
      return _;
  }
}
