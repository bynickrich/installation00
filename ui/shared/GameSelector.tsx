"use client";

import { GAMES } from "@/constants/games";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type KeyboardEvent, type SubmitEvent, useState } from "react";

const KEY_DIRECTIONS: Record<string, number> = { a: -1, d: 1 };

export function GameSelector() {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState("halo-infinite");

  const selectedIndex = GAMES.findIndex((game) => game.slug === selectedSlug);
  const selectedGame = GAMES[selectedIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
      return;
    }

    const direction = KEY_DIRECTIONS[event.key.toLowerCase()];
    if (!direction) return;

    event.preventDefault();

    const nextGame = GAMES[(selectedIndex + direction + GAMES.length) % GAMES.length];

    setSelectedSlug(nextGame.slug);
    event.currentTarget.form
      ?.querySelector<HTMLInputElement>(`input[value="${nextGame.slug}"]`)
      ?.focus();
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedGame.available) router.push(`/${selectedGame.slug}`);
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <fieldset className="mx-auto flex w-fit max-w-full min-w-0 snap-x snap-mandatory items-center gap-4 overflow-x-auto px-8 py-12">
        <legend className="sr-only">Game Selector</legend>
        {GAMES.map((game) => {
          const isComingSoon = !game.available;

          return (
            <label
              key={game.slug}
              className="relative w-40 shrink-0 cursor-pointer snap-center overflow-hidden rounded-md opacity-50 transition duration-300 ease-out hover:opacity-80 has-checked:scale-110 has-checked:opacity-100 has-checked:shadow-xl has-checked:ring-2 has-checked:shadow-sky-400/40 has-checked:ring-sky-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-sky-300"
            >
              <input
                type="radio"
                name="game"
                value={game.slug}
                checked={game.slug === selectedSlug}
                onChange={() => setSelectedSlug(game.slug)}
                onKeyDown={handleKeyDown}
                // oxlint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={game.slug === "halo-infinite"}
                className="sr-only"
              />
              <Image
                src={game.cover}
                alt={game.title}
                sizes="12rem"
                placeholder="blur"
                className={isComingSoon ? "h-auto w-full grayscale" : "h-auto w-full"}
              />
              {isComingSoon && (
                <span className="absolute inset-x-0 bottom-0 bg-black/75 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase">
                  Coming Soon...
                </span>
              )}
            </label>
          );
        })}
      </fieldset>
      <div className="flex flex-col items-center gap-4 px-8 text-center">
        <p>
          <span className="font-semibold">{selectedGame.title}</span>
          <span className="text-foreground/60">
            {" "}
            · {selectedGame.developer} · {selectedGame.releaseYear}
          </span>
        </p>
        <button
          type="submit"
          disabled={!selectedGame.available}
          className="rounded-sm border border-sky-300 px-8 py-2 text-sm font-semibold tracking-widest uppercase transition hover:bg-sky-300 hover:text-black disabled:cursor-not-allowed disabled:border-foreground/20 disabled:text-foreground/40 disabled:hover:bg-transparent disabled:hover:text-foreground/40"
        >
          {selectedGame.available ? "Open" : "Coming Soon..."}
        </button>
      </div>
    </form>
  );
}
