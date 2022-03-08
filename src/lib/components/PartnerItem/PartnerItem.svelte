<script lang="ts">
	import type { PartnerItem } from '$lib/graphql/generated/schema';
	export let partnerItem: Partial<PartnerItem> = {};
</script>

<div class="mod_partnerItem relative grid grid-cols-1 sm:grid-cols-2 gap-4">
	<div class="bg-white border grid content-center">
		<img src={partnerItem.partnerLogo.url} alt="Rhenania Referenzen" class="w-full mx-auto" />
	</div>
	<div class="grid content-center lg:content-start">
		{@html partnerItem.partnerDescription.html}
	</div>
</div>

<style>
	:global .mod_partnerItem a {
		color: #ea3336;
		font-weight: bold;
	}
	:global .mod_partnerItem a:hover {
		text-decoration: underline;
	}
</style>
