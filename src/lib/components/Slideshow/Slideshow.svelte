<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { ReferencesItem } from '$lib/graphql/generated/schema';
	export let referenceItems: ReferencesItem[] = [];
</script>

<div id="custom_splide" class="relative w-full">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			perPage: 5,
			perMove: 1,
			pagination: false,
			autoScroll: {
				speed: 1
			}
		}}
	>
		{#each referenceItems as referenceItem (referenceItem.id)}
			<SplideSlide data-splide-interval="1401">
				<img
					src={referenceItem.referenceLogo.url}
					alt="Kundenlogos von Rhenania Computer GmbH"
					class="mx-auto w-9/12"
				/>
			</SplideSlide>
		{/each}
	</Splide>
</div>
