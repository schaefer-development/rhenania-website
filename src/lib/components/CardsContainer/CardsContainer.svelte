<script lang="ts">
	import CardImage from '$lib/components/CardImage/CardImage.svelte';
	import CardIcon from '$lib/components/CardIcon/CardIcon.svelte';
	import type { CardsContainer } from '$lib/graphql/generated/schema';
	export let cardsContainer: Partial<CardsContainer> = {};
</script>

<h1>Ich bin der Cards Container</h1>
{#each cardsContainer.cards as card}
	{#if card.__typename === 'CardImage'}
		<CardImage {card} />
	{:else if card.__typename === 'CardIcon'}
		<CardIcon {card} />
	{/if}
{/each}
