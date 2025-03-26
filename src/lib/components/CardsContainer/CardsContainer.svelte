<script lang="ts">
	import CardImage from '$lib/components/CardImage/CardImage.svelte';
	import CardIcon from '$lib/components/CardIcon/CardIcon.svelte';
	import type { CardsContainer } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<CardsContainer> = {};
	const mapping = {
		CardIcon,
		CardImage
	};
</script>

<div id={module.headline} class="mod_cardsContainer relative">
	<div class="relative {mapPadding(module.paddingTop)}"></div>
	<div class="mx-auto max-w-screen-2xl px-4 py-6 lg:px-10 lg:py-12">
		{#if module?.headline}
			<h2 id={module.headline} class="rc_h1 text-rc_darkblue pb-4 text-center">
				{module.headline}
			</h2>
		{/if}
		<div class="justify-left flex flex-row flex-wrap xl:justify-center">
			{#each module.cards as card (card.id)}
				<div class="flex w-full items-stretch md:w-6/12 2xl:w-3/12">
					<svelte:component this={mapping[card.__typename]} {card} />
				</div>
			{/each}
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>
