<script context="module" lang="ts">
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
	import type { Load } from '@sveltejs/kit';
	import Fuse from 'fuse.js';

	const fuseOptions = {
		includeScore: true,
		keys: [
			'teaserHeadline',
			'teaserSubheadline',
			'teaserText',
			'modules.headline',
			'modules.heading1',
			'modules.heading2',
			'modules.heading3',
			'modules.accordionItems.content.html',
			'modules.text.html'
		]
	};

	export const load: Load = async ({ session, fetch, page }) => {
		const { lang } = session;
		const query = page.query.get('q');
		const res = await fetch(`/search.json?lang=${lang}`);
		if (res.ok) {
			const { data } = await res.json();
			const documents = [...data.pages, ...data.blogPosts];
			const fuse = new Fuse(documents, fuseOptions);
			const results = fuse.search(query) ?? [];
			return {
				props: { results, query }
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
