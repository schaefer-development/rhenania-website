<script lang="ts">
	import { linkTo } from '$lib/helpers';
	import SearchIcon from './SearchIcon.svelte';

	function eachRecursive(obj, highlights = []) {
		const localHighlights = [...highlights];
		for (var k in obj) {
			const { value, matchLevel } = obj[k];
			if (value && matchLevel && matchLevel !== 'none') {
				localHighlights.push(value);
			}
			if (typeof obj[k] == 'object' && obj[k] !== null) {
				localHighlights.push(...eachRecursive(obj[k], highlights));
			}
		}
		return localHighlights;
	}

	export let hit;
	const { _snippetResult: snippet } = hit;
	const highlights: string[] = eachRecursive(snippet);
</script>

<div class="relative pb-3">
	{#each highlights as highlight, i (i)}
		<p class="pb-4 font-normal text-black">{@html highlight}</p>
	{/each}
	<div class="hyperlink flex pt-1">
		<div class="searchHit relative flex-none pr-1">
			{#if hit.__typename === 'BlogPost'}
				<a sveltekit:prefetch class="flex" href={$linkTo(`/blog/${hit.slug}`)}>
					<span class="pr-2 align-middle">
						{@html hit.blogpostTitle}
					</span>
					<SearchIcon />
				</a>
			{:else}
				<a sveltekit:prefetch class="flex" href={$linkTo(`/${hit.slug}`)}>
					<span class="pr-2 align-middle">
						{@html hit.title}
					</span>
					<SearchIcon />
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	/* highlights text matching the search string   */
	:global(em) {
		background-color: #ea3336;
		color: #fff;
		font-weight: bold;
		font-style: normal;
	}
	.searchHit a::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.searchHit a:hover::after {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}

	.searchHit a svg {
		margin-left: 0.25em;
		margin-right: 0.5em;
		transition: all;
		transition-duration: 0.25s;
	}

	.searchHit:hover svg {
		margin-left: 0.5em;
		margin-right: 0.25em;
	}
</style>
