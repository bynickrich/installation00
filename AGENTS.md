# Installation 00

An unofficial archive of Halo game interfaces, rebuilt as working Svelte components.

## Stack

- SvelteKit 3 and Svelte 5, with runes mode forced on for project files. Use runes (`$state`, `$derived`, `$props`), not legacy syntax like `export let` or `$:`.
- The SvelteKit config lives in `vite.config.ts`. There is no `svelte.config.js`.
- Import from `src/lib` through the `#lib` alias, which is defined in `package.json` `imports`.
- pnpm is the package manager.

## Commands

- `pnpm lint` checks formatting (Prettier) and lint (ESLint).
- `pnpm format` formats all files.
- `pnpm check` type checks with svelte-check.
- `pnpm build` builds for production.

Run `pnpm lint` and `pnpm check` before finishing a change.

## Styling

- No Tailwind. Put each component's styles in its own `<style>` block.
- The layered reset, base element styles and `.sr-only` live in `src/global.css`, which the root layout imports. Its `@layer reset, base;` statement sets the layer order, so declare any new layer there.

## Themes

Each game is a theme in `src/lib/themes/<game>.css`, scoped to `[data-theme='<game>']` and imported by the root layout.

- Every theme defines the same tokens: `--font-display`, `--font-body` and the `--color-*` set in `halo-infinite.css`. When a theme needs a new token, add it to every theme.
- Components use only these shared tokens, never game-specific names, so they work in any theme.
- A theme imports its own fonts from Fontsource and lists the original commercial typeface first, so the original font wins where it's installed.
- `src/app.html` sets the default theme on `<html>`. Set `data-theme` on any element to theme just that subtree, such as a game preview card.

## Interface quality

Each recreated interface should cover more than visuals:

- Support keyboard and gamepad navigation with visible focus.
- Respect `prefers-reduced-motion`.
- Never rely on sound alone as a cue.
- The reset removes list markers, which makes Safari and VoiceOver stop announcing lists. Add `role="list"` to any `ul` or `ol` that should still be announced as a list, such as menus.
