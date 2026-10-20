import type { ReactNode } from "react";
import styles from "./NavBar.module.css";

type Hint = {
  keys: string[];
  label: string;
};

export function NavBar({ children }: { children: ReactNode }) {
  return (
    <aside aria-label="Controls" className={styles.bar}>
      {children}
    </aside>
  );
}

export function NavBarHints({ hints }: { hints: Hint[] }) {
  return (
    <ul className={styles.hints}>
      {hints.map((hint) => (
        <li key={hint.label} className={styles.hint}>
          {hint.keys.map((key) => (
            <kbd key={key} className={styles.key}>
              {key}
            </kbd>
          ))}
          <span>{hint.label}</span>
        </li>
      ))}
    </ul>
  );
}
