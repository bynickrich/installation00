import type { ComponentProps } from "react";

export function HaloReachButton({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
