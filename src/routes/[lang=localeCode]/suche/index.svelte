<script context="module" lang="ts">
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	export let results: { item: Record<string, unknown> }[] = [];
</script>

<div class="relative z-10 max-w-screen-lg mx-auto px-10 py-24">
	<h1 class="rc_h1 text-rc_darkblue pb-8">
		Suchanfrage:<br />{$page.url.searchParams.get('q') ?? ''}
	</h1>

	<h2 class="rc_h2 text-black py-2">Suchergebnisse:</h2>
	{#each results as hit (hit.objectID)}
		<SearchResult {hit} />

		<hr class="mt-2 last:hidden" />
	{/each}
</div>
