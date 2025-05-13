<script lang="ts">
	import type { PartnerItem } from '$lib/graphql/generated/schema';
	export let partnerItem: Partial<PartnerItem> = {};
</script>

<div class="mod_partnerItem relative grid grid-cols-1 gap-4 sm:grid-cols-2">
	<div class="grid content-center border border-gray-200 bg-white">
		<img src={partnerItem.partnerLogo.url} alt="Rhenania Referenzen" class="mx-auto w-full" />
	</div>
	<div class="grid content-center lg:content-start">
		{@html partnerItem.partnerDescription.html}
	</div>
</div>

<style>
	:global(.mod_partnerItem a) {
		color: #ea3336;
		font-weight: bold;
	}
	:global(.mod_partnerItem a:hover) {
		text-decoration: underline;
	}
</style>
