<script lang="ts">
	import type { CardIcon } from '$lib/graphql/generated/schema';
	export let card: Partial<CardIcon> = {};
</script>

<h1>Card Icon {card.id}</h1>
