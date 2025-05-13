<script lang="ts">
	import PartnerItem from '$lib/components/PartnerItem/PartnerItem.svelte';
	import type { PartnerContainer } from '$lib/graphql/generated/schema';
	export let module: Partial<PartnerContainer> = {};
</script>

<div
	class="relative z-10 mx-auto grid max-w-screen-lg grid-cols-1 gap-x-20 gap-y-12 px-10 pb-24 lg:grid-cols-2"
>
	{#each module.partnerItems as partnerItem (partnerItem.id)}
		<div class="col-span-1">
			<PartnerItem {partnerItem} />
		</div>
	{/each}
</div>
