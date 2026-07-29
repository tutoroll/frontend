import { JSX } from "react/jsx-runtime";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  teritary = "teritary",
  icon = "icon",
}

export enum ButtonState {
  idle = "idle",
  disabled = "disabled",
  loading = "loading",
}

export enum ButtonSize {
  h60 = "h60",
  h52 = "h52",
  h40 = "h40",
}

export type ButtonIcon = JSX.Element | null;

export type ButtonDescription = string | null;

export type ButtonTitle = string | null;
