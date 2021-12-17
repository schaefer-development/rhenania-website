<script lang="ts">
	import type { CardIcon } from '$lib/graphql/generated/schema';
	import { base } from '$app/paths';
	export let card: Partial<CardIcon> = {};
</script>

<div class="overflow-hidden bg-white shadow-md border">
	<div
		class="cardImage h-48 bg-red flex items-center justify-center"
		style="background-color:{card.backgroundColor.hex}"
	>
		<img src={card.icon.url} alt="Rhenania Icon" class="w-36 h-36" />
	</div>
	<div class="px-6 py-6 flex flex-col text-center">
		<div class="rc_h4 text-rc_darkblue rc_break_hyphens mb-2">{card.headline}</div>
		<div class="mb-2">{card.subheadline}</div>
	</div>
</div>
