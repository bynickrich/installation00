import type { ComponentProps } from "react";

export function HaloCEButton({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
