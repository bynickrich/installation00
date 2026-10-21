<script lang="ts">
	const goals = [
		'Study what makes a Halo interface great, from the menus to the HUD.',
		'Recreate these interfaces in Svelte, as a hands-on way to learn component composition, shaders and other web techniques.',
		"Preserve the history of Halo's interfaces for future players and game developers.",
		'Learn how to bring 3D elements from the games to the web.'
	];
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Installation00</title>
	<meta name="description" content="An unofficial foundry and archive of Halo interfaces." />
</svelte:head>

<main>
	<header>
		<h1>Installation 00</h1>
		<p class="tagline">An unofficial foundry and archive of Halo interfaces.</p>
	</header>

	<section aria-labelledby="goals-heading">
		<p class="intro">
			As a longtime Halo fan, my goal is to go through each Halo game and better understand why
			parts of the community love particular games' interface elements, sounds, navigation, weapon
			reticles and HUD elements.
		</p>

		<h2 id="goals-heading">Goals</h2>
		<ol role="list">
			{#each goals as goal, index (goal)}
				<li>
					<span class="number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
					<span>{goal}</span>
				</li>
			{/each}
		</ol>
	</section>
	<a href={resolve('/infinite')}>Halo Infinite</a>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		min-height: 100svh;
		padding-block: 4rem;
	}

	header,
	section {
		width: 100%;
		max-width: 42rem;
		padding-inline: 2rem;
	}

	header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	h1,
	h2 {
		font-family: var(--font-display);
		font-weight: 600;
		letter-spacing: 0.3em;
		text-transform: uppercase;
	}

	h1 {
		font-size: 0.875rem;
	}

	.tagline {
		margin-top: 0.75rem;
		color: var(--color-text-muted);
	}

	.intro {
		margin-bottom: 2rem;
	}

	h2 {
		margin-bottom: 1rem;
		font-size: 0.75rem;
		color: var(--color-text-muted);
	}

	ol {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	li {
		display: flex;
		gap: 1rem;
	}

	.number {
		font-family: var(--font-display);
		color: var(--color-text-muted);
	}
</style>
