import type { ComponentProps } from "react";
import styles from "./HaloInfiniteButton.module.css";

export function HaloInfiniteButton({
  type = "button",
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={className ? `${styles.button} ${className}` : styles.button}
      {...props}
    />
  );
}
