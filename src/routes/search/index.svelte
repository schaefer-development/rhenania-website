<script context="module" lang="ts">
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, fetch, page }) => {
		const { lang } = session;
		const q = page.query.get('q');
		const searchParms = new URLSearchParams({ lang, q });
		const res = await fetch(`/search.json?${searchParms.toString()}`);
		if (res.ok) {
			const { results } = await res.json();
			return {
				props: { results, query: q }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};
</script>

<script lang="ts">
	export let results: { item: Record<string, unknown> }[] = [];
	export let query: string;
</script>

<div class="relative z-10 max-w-screen-lg mx-auto px-10 py-24">
	<h1 class="rc_h1 text-rc_darkblue pb-8">Suchanfrage:<br />{query ?? ''}</h1>

	<h2 class="rc_h2 text-black py-2">Suchergebnisse:</h2>
	{#each results as result (result.item.id)}
		<SearchResult {result} />
	{/each}
</div>
