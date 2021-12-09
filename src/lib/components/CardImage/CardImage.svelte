<script lang="ts">
	import type { CardImage } from '$lib/graphql/generated/schema';
	export let card: Partial<CardImage> = {};
</script>

<h1>Card Image {card.id}</h1>
