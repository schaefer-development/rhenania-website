<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { ReferencesItem } from '$lib/graphql/generated/schema';
	export let referenceItems: ReferencesItem[] = [];
</script>

<div id="custom_splide" class="w-full relative">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			perPage: 5,
			perMove: 1,
			pagination: false,
			autoScroll: {
				speed: 2
			}
		}}
	>
		<div class="splide__arrows" slot="before-track">
			<button
				class="splide__arrow splide__arrow--prev text-white opacity-100 ease-in-out transition-all duration-300 -ml-8"
				type="button"
				aria-controls="splide01-track"
				aria-label="Go to last slide"
			>
				<!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In  -->
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="21.1px"
					height="39.4px"
					viewBox="0 0 21.1 39.4"
					style="overflow:visible;enable-background:new 0 0 21.1 39.4;"
					xml:space="preserve"
				>
					<defs />
					<polygon points="1.4,39.4 0,38.1 18.3,19.7 0,1.4 1.4,0 21.1,19.7 " />
				</svg>
			</button>

			<button
				class="splide__arrow splide__arrow--next text-white opacity-100 right-0 -mr-6 ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Next slide"
			>
				<!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In  -->
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="21.1px"
					height="39.4px"
					viewBox="0 0 21.1 39.4"
					style="overflow:visible;enable-background:new 0 0 21.1 39.4;"
					xml:space="preserve"
				>
					<defs />
					<polygon points="1.4,39.4 0,38.1 18.3,19.7 0,1.4 1.4,0 21.1,19.7 " />
				</svg>
			</button>
		</div>

		{#each referenceItems as referenceItem (referenceItem.id)}
			<SplideSlide data-splide-interval="9000">
				<img
					src={referenceItem.referenceLogo.url}
					alt="Hier fehlt der alt text"
					class="w-10/12 mx-auto"
				/>
			</SplideSlide>
		{/each}
	</Splide>
</div>
