import { JSX } from "react/jsx-runtime";
import {
  ButtonType,
  ButtonState,
  ButtonSize,
  ButtonIcon,
  ButtonTitle,
  ButtonDescription,
} from "./properties";
import { LoadingIcon } from "../icons/Loading";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  htmlType?: "submit" | "reset" | "button" | undefined;
  state?: ButtonState;
  size?: ButtonSize;
  icon?: ButtonIcon;
  title: ButtonTitle;
  description?: ButtonDescription;
}

export function Button({
  className,
  onClick,
  type = ButtonType.primary,
  htmlType = "button",
  state = ButtonState.idle,
  size = ButtonSize.h60,
  icon = null,
  title,
  description = null,
}: ButtonProps) {
  const isDisabled = [ButtonState.disabled, ButtonState.loading].includes(
    state,
  );
  return (
    <button
      type={htmlType}
      disabled={isDisabled}
      onClick={onClick}
      className={`${className} flex items-center justify-center rounded-lg ${isDisabled ? "opacity-40" : "cursor-pointer"} ${resolveHeight(size)} ${resolveColors(type)}`}
    >
      {getContent(state, size, icon, title, description)}
    </button>
  );
}

const colorVariants = {
  primary: "bg-blue-400 text-base-0 enabled:hover:bg-blue-600",
  secondary: "bg-blue-50 text-blue-400 enabled:hover:bg-blue-100",
  teritary: "text-blue-300 enabled:hover:bg-blue-50",
  icon: "text-base-400 enabled:hover:bg-blue-500 hover:text-base-800",
} as const;

function getContent(
  state: ButtonState,
  size: ButtonSize,
  icon: ButtonIcon,
  title: ButtonTitle,
  description: ButtonDescription,
): JSX.Element {
  if (state === ButtonState.loading) {
    return <LoadingIcon className="text-current" />;
  } else {
    const styles = resolveTextStyles(size);
    return (
      <div className="flex gap-2">
        {icon}
        <div className="flex flex-col">
          {title && <span className={`${styles.titleStyle}`}>{title}</span>}
          {description && (
            <span className={`${styles.descriptionStyle}`}>{description}</span>
          )}
        </div>
      </div>
    );
  }
}

function resolveTextStyles(size: ButtonSize): {
  titleStyle: string;
  descriptionStyle: string;
} {
  switch (size) {
    case ButtonSize.h60:
      return {
        titleStyle: "text-body-m font-medium",
        descriptionStyle: "text-body-s",
      };
    case ButtonSize.h52:
    case ButtonSize.h40:
      return {
        titleStyle: "text-body-s font-medium",
        descriptionStyle: "text-caption",
      };
    default:
      const _: never = size;
      return _;
  }
}

function resolveColors(type: ButtonType): string {
  switch (type) {
    case ButtonType.primary:
      return colorVariants.primary;
    case ButtonType.secondary:
      return colorVariants.secondary;
    case ButtonType.teritary:
      return colorVariants.teritary;
    case ButtonType.icon:
      return colorVariants.icon;
    default:
      const _: never = type;
      return _;
  }
}

function resolveHeight(size: ButtonSize): string {
  switch (size) {
    case ButtonSize.h60:
      return "h-[60px]";
    case ButtonSize.h52:
      return "h-[52px]";
    case ButtonSize.h40:
      return "h-[40px]";
    default:
      const _: never = size;
      return _;
  }
}
