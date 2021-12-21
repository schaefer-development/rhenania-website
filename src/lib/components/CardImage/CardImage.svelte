<script lang="ts">
	import type { CardImage } from '$lib/graphql/generated/schema';
	export let card: Partial<CardImage> = {};
</script>

<div class="mod_cardimage overflow-hidden bg-white shadow-md">
	<div class="cardImage h-48 bg-cover bg-center" style="background-image: url({card.image.url})" />
	<div class="px-6 py-6 flex flex-col text-center">
		<div class="rc_h4 text-rc_darkblue rc_break_hyphens mb-2">{card.headline}</div>
		<!--<a
			href="{base}/{card.link.module.page.slug}#{card.link.module.id}"
			class="flex flex-row items-center mx-auto text-rc_red"
		>
			<span class="uppercase tracking-wider text-sm font-medium pr-2">Mehr</span>
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
		</a>-->
	</div>
</div>
