<script lang="ts">
	import { base } from '$app/paths';
	import type { CardIcon } from '$lib/graphql/generated/schema';
	export let card: Partial<CardIcon> = {};
</script>

<div class="mod_cardicon overflow-hidden bg-white shadow-md">
	<div
		class="cardImage h-48 bg-red flex items-center justify-center"
		style="background-color:{card.backgroundColor.hex}"
	>
		<img src={card.icon.url} alt="Rhenania Icon" class="w-36 h-36" />
	</div>
	<div class="px-6 py-6 flex flex-col text-center rc_break_hyphens">
		<div class="rc_h4 text-rc_darkblue mb-2">{card.headline}</div>
		{#if card.subheadline}
			<div class="mb-2">{card.subheadline}</div>
		{/if}
		{#if card.link}
			<a
				href="{base}/{card.link.target.page.slug}#{card.link.target.id}"
				class="flex flex-row items-center mx-auto text-rc_red"
			>
				<span class="uppercase tracking-wider text-sm font-medium pr-2">Mehr</span>
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
		{/if}
	</div>
</div>
