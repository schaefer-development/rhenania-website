<script lang="ts">
	import { base } from '$app/paths';
	import type { CardImage } from '$lib/graphql/generated/schema';
	export let card: Partial<CardImage> = {};
</script>

<div
	class="mod_cardImage overflow-hidden bg-white shadow-md hover:shadow-lg duration-150 ease-in-out"
>
	<div class="cardImageWrapper h-48 overflow-hidden">
		<div
			class="cardImage h-full bg-cover bg-center"
			style="background-image: url({card.image.url})"
		/>
	</div>
	<div class="text px-6 py-6 flex flex-col text-center">
		<div class="rc_h4 text-rc_darkblue rc_break_hyphens mb-2">{card.headline}</div>

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

<style>
	.mod_cardImage .cardImageWrapper .cardImage {
		transform: scale(1);
		transition: all;
		transition-duration: 0.5s;
	}
	.mod_cardImage:hover .cardImageWrapper .cardImage {
		transform: scale(1.2);
	}

	.mod_cardImage .text {
	}
</style>
