"use client";

import { GAMES } from "@/constants/games";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type CSSProperties, type KeyboardEvent, useState } from "react";
import styles from "./GameSelector.module.css";

const DEFAULT_INDEX = GAMES.findIndex((game) => game.slug === "halo-infinite");

const KEY_STEPS: Record<string, number> = { KeyA: -1, ArrowLeft: -1, KeyD: 1, ArrowRight: 1 };

const focusInput = (input: HTMLInputElement | null) => input?.focus({ preventScroll: true });

const wrap = (position: number) => ((position % GAMES.length) + GAMES.length) % GAMES.length;

export function GameSelector() {
  const router = useRouter();
  // Unbounded, so the ring keeps turning the same way past the last game instead of spinning back.
  const [position, setPosition] = useState(DEFAULT_INDEX);
  const selectedIndex = wrap(position);
  const selectedGame = GAMES[selectedIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    if (event.key === "Enter") {
      if (selectedGame.available) router.push(`/${selectedGame.slug}`);
      return;
    }

    const step = KEY_STEPS[event.code];
    if (!step) return;

    event.preventDefault();
    setPosition(position + step);
  }

  function select(index: number) {
    const offset = wrap(index - selectedIndex + GAMES.length / 2) - GAMES.length / 2;
    setPosition(position + offset);
  }

  return (
    <div className={styles.selector}>
      <fieldset className={styles.stage}>
        <legend className="sr-only">Game Selector</legend>
        <div
          className={styles.ring}
          style={{ "--count": GAMES.length, "--position": position } as CSSProperties}
        >
          {GAMES.map((game, index) => {
            const isSelected = index === selectedIndex;
            const isComingSoon = !game.available;

            return (
              <label
                key={game.slug}
                className={styles.card}
                style={{ "--index": index } as CSSProperties}
              >
                <input
                  ref={isSelected ? focusInput : undefined}
                  type="radio"
                  name="game"
                  checked={isSelected}
                  onChange={() => select(index)}
                  onKeyDown={handleKeyDown}
                  className="sr-only"
                />
                <Image
                  src={game.cover}
                  alt={game.title}
                  sizes="12rem"
                  placeholder="blur"
                  className={isComingSoon ? styles.coverComingSoon : styles.cover}
                />
                {isSelected && game.video && (
                  <video autoPlay muted loop playsInline aria-hidden className={styles.video}>
                    <source src={game.video} media="(prefers-reduced-motion: no-preference)" />
                  </video>
                )}
                {isComingSoon && <span className={styles.badge}>Coming Soon...</span>}
              </label>
            );
          })}
        </div>
      </fieldset>
      <p className={styles.details}>
        <span className={styles.title}>{selectedGame.title}</span>
        <span className={styles.meta}>
          {" "}
          · {selectedGame.developer} · {selectedGame.releaseYear}
        </span>
      </p>
    </div>
  );
}
