import type { ComponentProps } from "react";

export function Halo3ODSTButton({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
