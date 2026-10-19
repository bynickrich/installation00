import type { ReactNode } from "react";

type Hint = {
  keys: string[];
  label: string;
};

export function NavBar({ children }: { children: ReactNode }) {
  return (
    <aside
      aria-label="Controls"
      className="sticky bottom-0 flex min-h-12 items-center justify-end border-t border-foreground/10 bg-background/80 px-8 backdrop-blur"
    >
      {children}
    </aside>
  );
}

export function NavBarHints({ hints }: { hints: Hint[] }) {
  return (
    <ul className="flex gap-6 text-xs tracking-widest uppercase">
      {hints.map((hint) => (
        <li key={hint.label} className="flex items-center gap-2">
          {hint.keys.map((key) => (
            <kbd
              key={key}
              className="rounded-sm border border-foreground/30 px-1.5 py-0.5 font-mono text-[0.625rem]"
            >
              {key}
            </kbd>
          ))}
          <span>{hint.label}</span>
        </li>
      ))}
    </ul>
  );
}
