<script lang="ts">
	import type { Hit } from '@algolia/client-search';
	import algoliasearch, { SearchClient } from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
	import { onMount, SvelteComponent } from 'svelte';
	import SearchIcon from '../SearchIcon/SearchIcon.svelte';

	type SearchHit = Hit<Record<string, unknown>>;

	export let appId: string;
	export let searchKey: string;
	export let indices: Record<string, typeof SvelteComponent> | [string, typeof SvelteComponent][]; // [indexName, component to render search results from that index]
	export let loadingStr = `Searching...`;
	export let noResultMsg = (query: string): string => `No results for '${query}'`;
	export let resultCounter = (hits: SearchHit[]): string =>
		hits.length > 0 ? `<span>Results: ${hits.length}<span>` : ``;
	export let placeholder = `Search`;
	export let ariaLabel = `Search`;
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

<aside class="svelte-algolia">
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
	/>
	<button
		on:click={() => {
			hasFocus = true;
			input.focus();
		}}
		title={ariaLabel}
	>
		<SearchIcon
			ariaLabel="Search Icon"
			height="{hasFocus ? 1.9 : 2.3}ex"
			style="cursor: pointer;"
		/>
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
	aside.svelte-algolia {
		position: relative;
		display: flex;
		flex-direction: row-reverse;
	}
	button {
		align-items: center;
		padding: 0;
		grid-area: search;
		color: var(--iconColor);
		position: relative;
		background: transparent;
		border: none;
		font-size: 2ex;
	}
	h2 {
		color: var(--headingColor);
		border-bottom: 1px solid;
		text-align: center;
		position: relative;
	}
	h2 :global(span) {
		position: absolute;
		font-size: 1ex;
		bottom: 0;
		right: 0;
	}
	input {
		background: var(--inputBg);
		color: var(--inputColor);
		font-size: var(--inputFontSize, 1em);
		border-radius: 5pt;
		border: 0;
		outline: none;
		width: 0;
		cursor: pointer;
		transition: 0.3s;
		opacity: 0;
		padding: 0;
		height: 2.5ex;
		line-height: inherit;
	}
	input.hasFocus {
		opacity: 1;
		width: 8em;
		background: rgba(0, 0, 0, 0.2);
		padding: 1pt 4pt 1pt 3ex;
		margin-left: -2.5ex;
		border-radius: 3pt;
	}
	input::placeholder {
		color: var(--inputColor);
	}
	input.hasFocus + button {
		color: var(--inputColor);
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
		border-radius: 5pt;
		overscroll-behavior: none;
		overflow-wrap: break-word;
	}
	section {
		font-size: 0.7em;
		white-space: initial;
		width: 100%;
		max-width: 40em;
	}
</style>