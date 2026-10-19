import type { ComponentProps } from "react";

export function HaloInfiniteButton({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
