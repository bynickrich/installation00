<script lang="ts">
	let { children } = $props();
</script>

<aside>Sidebar stuff</aside>
<main>
	{@render children()}
</main>
