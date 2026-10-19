import type { ComponentProps } from "react";

export function Halo5Button({ type = "button", ...props }: ComponentProps<"button">) {
  return <button type={type} {...props} />;
}
