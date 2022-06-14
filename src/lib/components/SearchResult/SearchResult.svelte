<script>
	import { linkTo } from '$lib/helpers';

	export let hit;
</script>

<div class="relative pb-1 ">
	<p>{@html hit.description}</p>
	<div class="flex hyperlink pt-1">
		<div class="relative flex-none text-rc_red font-bold pr-1 searchHit">
			<a
				sveltekit:prefetch
				class="flex"
				href={hit.__typename === 'BlogPost'
					? $linkTo(`/blog/${hit.slug}`)
					: $linkTo(`/${hit.slug}`)}
			>
				<span class="align-middle pr-2">
					{@html hit.slug}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>

<style>
	/* highlights text matching the search string   */
	:global(em) {
		color: #ea3336;
		font-weight: bold;
		font-style: normal;
	}
	.searchHit a::after {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.searchHit a:hover::after {
		background-color: #ea3336;
		bottom: -7px;
		content: '';
		display: block;
		height: 4px;
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
