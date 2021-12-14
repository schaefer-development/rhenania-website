<script lang="ts">
	import type { CardImage } from '$lib/graphql/generated/schema';
	import { base } from '$app/paths';
	export let card: Partial<CardImage> = {};
</script>

<div class="singleCard bg-white shadow-md hover:shadow-lg">
	<div
		class="cardImage h-48 bg-cover bg-center"
		style="background-image: url({base}/hero_example.jpg)"
	/>
	<div
		class="cardText h4-24 lg:h-32 px-4 py-4 flex flex-col w-full text-center items-center justify-end"
	>
		<span class="rc_h4 text-rc_darkblue pb-2">{card.headline} </span>

		<div class="moreLink flex w-full items-center justify-center text-rc_red">
			<a href="{base}/" class="text-rc_red uppercase tracking-wider text-sm font-medium pr-2"
				>Mehr</a
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</div>
	</div>
</div>
