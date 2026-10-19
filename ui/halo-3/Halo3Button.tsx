import type { ComponentProps } from "react";

export function Halo3Button({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
