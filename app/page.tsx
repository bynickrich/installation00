import { GAMES } from "@/constants/games";
import { GameSelector } from "@/ui/shared/GameSelector";

const GOALS = [
  "Preserve every Halo game’s interface, from menus and HUDs to colors, type and references, for future players and game designers.",
  "Understand why gamers fall in love with specific game menu designs and have such divisive opinions on others.",
  "Explore how to recreate these designs in React.",
];

const COMING_SOON_COUNT = GAMES.filter((game) => !game.available).length;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 py-16">
      <header className="max-w-2xl px-8 text-center">
        <h1 className="text-sm font-semibold tracking-[0.3em] uppercase">Installation 00</h1>
        <p className="mt-3 text-foreground/60">
          An unofficial foundry and archive of Halo interfaces.
        </p>
      </header>
      <GameSelector />
      <section aria-labelledby="goals-heading" className="w-full max-w-2xl px-8">
        <h2
          id="goals-heading"
          className="mb-4 text-xs font-semibold tracking-[0.3em] text-foreground/60 uppercase"
        >
          Goals
        </h2>
        <ol className="space-y-3">
          {GOALS.map((goal, index) => (
            <li key={goal} className="flex gap-4">
              <span className="font-mono text-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{goal}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-foreground/60">
          Starting with Halo Infinite. {COMING_SOON_COUNT} more on the way.
        </p>
      </section>
    </main>
  );
}
