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
	export let query: string = '';
</script>

<p>
	<strong>Query</strong>: {query}
</p>

{#each results as result (result.item.id)}
	<SearchResult {result} />
{/each}
