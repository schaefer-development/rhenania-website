<script lang="ts">
	import type { Hit } from '@algolia/client-search';
	import type { SearchClient } from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
	import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
	import { onMount, SvelteComponent } from 'svelte';

	type SearchHit = Hit<Record<string, unknown>>;

	export let appId: string;
	export let searchKey: string;
	export let indices: Record<string, typeof SvelteComponent> | [string, typeof SvelteComponent][]; // [indexName, component to render search results from that index]
	export let loadingStr = `Suche...`;
	export let noResultMsg = (query: string): string => `Keine Ergebnisse für '${query}'`;
	export let resultCounter = (hits: SearchHit[]): string =>
		hits.length > 0 ? `<span>Ergebnisse: ${hits.length}<span>` : ``;
	export let placeholder = `Suche`;
	export let ariaLabel = `Suche`;

	for (let [key, val] of Object.entries({ appId, searchKey, indices })) {
		if (!val) console.error(`svelte-algolia: Invalid ${key}: ${val}`);
	}

	$: _indices = Array.isArray(indices) ? Object.fromEntries(indices) : indices;

	let client: SearchClient;
	let input: HTMLInputElement;
	let query = ``;
	let promise: Promise<{ index: string | undefined; hits: SearchHit[] }[]>;

	onMount(() => (client = algoliasearch(appId, searchKey)));

	async function search() {
		const { results } = await client.search(
			Object.keys(_indices).map((indexName) => ({ indexName, query }))
		);

		return results;
	}
</script>

<aside class="svelte-algolia input-group relative flex w-full max-w-sm items-stretch justify-end">
	<input
		type="text"
		bind:this={input}
		bind:value={query}
		on:keyup={() => (promise = search())}
		on:focus
		{placeholder}
		aria-label={ariaLabel}
		class="peer w-full max-w-sm border-y border-l px-3 py-2 text-gray-700 transition duration-150 ease-in-out focus:border-r-0 focus:border-black focus:bg-white focus:outline-none"
	/>
	<button
		title={ariaLabel}
		aria-label="Suchen"
		class="peer focus:text-rc_red active:text-rc_red peer-focus:text-rc_red relative inline-block border-y border-r px-2 py-2.5 font-medium text-black transition duration-150 ease-in-out peer-focus:border-black focus:ring-0 focus:outline-none sm:px-4"
	>
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="search"
			class="w-4"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill="currentColor"
				d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
			/>
		</svg>
	</button>

	{#if query}
		<div class="results max-w-md p-4 shadow-md">
			{#await promise}
				<p>{loadingStr}</p>
			{:then allHits}
				{#if allHits?.some(({ hits }) => hits.length)}
					{#each allHits as { index: idxName, hits } (idxName)}
						{#if hits.length}
							<section class="w-full max-w-md">
								{#each hits as hit (hit.objectID)}
									<svelte:component this={_indices[idxName]} {hit} />

									<hr class="mt-2 last:hidden" />
								{/each}
							</section>
						{/if}
					{/each}
				{:else}{@html noResultMsg(query)}{/if}
			{/await}
		</div>
	{/if}
</aside>

<style>
	button {
		align-items: center;
	}

	input::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}

	div.results {
		background-color: var(--hitsBgColor, white);
		z-index: 1;
		top: 2.8em;
		max-height: 62vh;
		position: absolute;
		overflow: auto;
		right: 0;
		overscroll-behavior: none;
		overflow-wrap: break-word;
	}
	section {
		white-space: initial;
	}
</style>
