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
	export let hasFocus = false;

	for (let [key, val] of Object.entries({ appId, searchKey, indices })) {
		if (!val) console.error(`svelte-algolia: Invalid ${key}: ${val}`);
	}

	$: _indices = Array.isArray(indices) ? Object.fromEntries(indices) : indices;

	let client: SearchClient;
	let input: HTMLInputElement;
	let query = ``;
	let promise: Promise<{ index: string | undefined; hits: SearchHit[] }[]>;

	onMount(() => (client = algoliasearch(appId, searchKey)));

	function processHits(hits: SearchHit[]) {
		return hits.map((hit) => {
			for (const [key, val] of Object.entries(hit)) {
				if (key.endsWith(`Orig`)) continue;
				const processedVal =
					hit?._snippetResult?.[key]?.value || hit?._highlightResult?.[key]?.value;
				if (processedVal) {
					hit[`${key}Orig`] = val;
					hit[key] = processedVal;
				}
			}
			return hit;
		});
	}

	async function search() {
		const { results } = await client.search(
			Object.keys(_indices).map((indexName) => ({ indexName, query }))
		);

		return results.map(({ hits, index }) => ({ hits: processHits(hits), index }));
	}
</script>

<aside class="svelte-algolia relative flex items-stretch w-full justify-end pl-4">
	<input
		type="text"
		bind:this={input}
		bind:value={query}
		on:keyup={() => (promise = search())}
		on:focus
		on:blur
		on:blur={() => (hasFocus = false)}
		{placeholder}
		aria-label={ariaLabel}
		class:hasFocus
		class="w-full max-w-sm px-3 py-2 border transition duration-150 ease-in-out"
	/>
	<button
		on:click={() => {
			hasFocus = true;
			input.focus();
		}}
		title={ariaLabel}
		class="relative inline-block px-2 sm:px-4 py-2.5 text-black font-medium border-y border-r transition duration-150 ease-in-out"
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
	{#if hasFocus && query}
		<div class="results">
			{#await promise}
				<p>{loadingStr}</p>
			{:then allHits}
				{#if allHits?.some(({ hits }) => hits.length)}
					{#each allHits as { index: idxName, hits } (idxName)}
						{#if hits.length}
							<section>
								<h2>
									{idxName}
									{@html resultCounter(hits)}
								</h2>
								{#each hits as hit (hit.objectID)}
									<svelte:component
										this={_indices[idxName]}
										{hit}
										on:close={() => (hasFocus = false)}
									/>
									<hr />
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
		grid-area: search;
	}

	input {
		outline: none;
		opacity: 0;
		line-height: inherit;
	}
	input.hasFocus {
		opacity: 1;
	}
	input::placeholder {
		color: #000;
	}

	div.results {
		background-color: var(--hitsBgColor, white);
		box-shadow: var(--hitsShadow, 0 0 2pt black);
		z-index: 1;
		top: 3ex;
		max-height: 60vh;
		position: absolute;
		width: max-content;
		max-width: 80vw;
		overflow: auto;
		right: 0;
		padding: 1ex 1em;
		overscroll-behavior: none;
		overflow-wrap: break-word;
	}
	section {
		font-size: 1em;
		white-space: initial;
		width: 100%;
		max-width: 40em;
	}
</style>
