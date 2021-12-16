<script lang="ts">
	import CardImage from '$lib/components/CardImage/CardImage.svelte';
	import CardIcon from '$lib/components/CardIcon/CardIcon.svelte';
	import type { CardsContainer } from '$lib/graphql/generated/schema';
	export let module: Partial<CardsContainer> = {};
	const mapping = {
		CardIcon,
		CardImage
	};
</script>

<div class="MultipleCardsImage ">
	<div class="inner max-w-screen-2xl mx-auto px-10 py-20">
		<h1 class="rc_h1 text-rc_darkblue text-center pb-8">{module.headline}</h1>
		<div class="cardsContainer grid grid-cols-2 lg:grid-cols-4 gap-4">
			{#each module.cards as card (card.id)}
				<svelte:component this={mapping[card.__typename]} {card} />
			{/each}
		</div>
	</div>
</div>
