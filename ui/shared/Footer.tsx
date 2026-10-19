import { GAMES } from "@/constants/games";

const GAME_TITLES = new Intl.ListFormat("en", { type: "conjunction" }).format(
  GAMES.map((game) => game.title),
);

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-8 py-6 text-center text-xs/relaxed text-foreground/60">
      <p>
        Halo © Microsoft Corporation. Installation 00 was created under Microsoft’s{" "}
        <a
          href="https://www.xbox.com/en-US/developers/rules"
          className="underline underline-offset-2 hover:text-foreground"
        >
          “Game Content Usage Rules”
        </a>{" "}
        using assets from {GAME_TITLES}, and it is not endorsed by or affiliated with Microsoft.
      </p>
    </footer>
  );
}
