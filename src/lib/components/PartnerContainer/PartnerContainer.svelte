<script lang="ts">
	import PartnerItem from '$lib/components/PartnerItem/PartnerItem.svelte';
	import type { PartnerContainer } from '$lib/graphql/generated/schema';
	export let module: Partial<PartnerContainer> = {};
</script>

<div
	class="relative z-10 max-w-screen-lg mx-auto px-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12"
>
	{#each module.partnerItems as partnerItem (partnerItem.id)}
		<div class="col-span-1">
			<PartnerItem {partnerItem} />
		</div>
	{/each}
</div>
