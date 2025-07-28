<script lang="ts">
	import type { ReferencesItem } from '$lib/graphql/generated/schema';
	export let referenceItems: ReferencesItem[] = [];
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	export let data: { referencesContainers: ReferencesContainer[] };
</script>

<div class="bg-rc_darkblue w-full">
	<div class="text-rc_darkblue-darkest mx-auto flex max-w-screen-2xl items-center px-10">
		<Splide
			aria-label="Kundenlogos von Rhenania Computer GmbH"
			class="relative w-full"
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
			{#each data.referencesContainers?.[0].referenceItems as referenceItem (referenceItem.id)}
				{#if referenceItem.referenceLogo}
					<SplideSlide data-splide-interval="1401">
						<img
							src={referenceItem.referenceLogo.url}
							alt="Kundenlogo von Rhenania Computer"
							class="mx-auto w-9/12"
						/>
					</SplideSlide>
				{/if}
			{/each}
		</Splide>

		<hr />
	</div>
</div>

<style>
	button.splide__arrow {
		background-color: none;
	}
</style>
