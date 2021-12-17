<script lang="ts">
	import type { CardImage } from '$lib/graphql/generated/schema';
	import { base } from '$app/paths';
	export let card: Partial<CardImage> = {};
</script>

<div class="overflow-hidden bg-white shadow-md">
	<div class="cardImage h-48 bg-cover bg-center" style="background-image: url({card.image.url})" />
	<div class="px-6 py-6 flex flex-col text-center">
		<div class="rc_h4 text-rc_darkblue rc_break_hyphens mb-2">{card.headline}</div>
		<a
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
		</a>
	</div>
</div>

<!--

<div class="grid grid-rows-4 bg-white">

	<div class="rows-span-3">

		<div class="cardImage h-48 bg-cover bg-center" style="background-image: url({card.image.url})" />

	</div>

	<div class="rows-span-1">

	<div class="cardText grid grid-rows-2 text-center px-8 py-8">

	<div class="h-full border flex items-end">
		<span class="rc_h4 text-rc_darkblue rc_break_hyphens mx-auto">{card.headline}</span>
	</div>
	<span> sldnfl</span>

	</div>

	</div>

	

</div>



<div class="bg-white shadow-md hover:shadow-lg">

<div class="sdkfnsd relative h-48 border">

sdfnsdlf


</div>

	<div class="cardText relative block border h-auti flex items-end px-8 py-6">
		<div class="flex flex-col text-center mx-auto">
			<span class="rc_h4 text-rc_darkblue rc_break_hyphens">{card.headline}</span>
			<div class="mt-6">
			
					<div class="moreLink flex w-full items-center justify-center text-rc_red">
			<a
				href="{base}/{card.link.module.page.slug}#{card.link.module.id}"
				class="text-rc_red uppercase tracking-wider text-sm font-medium pr-2">Mehr</a
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
	</div>
</div>





	div class="singleCard bg-white shadow-md hover:shadow-lg">
	<div class="cardImage h-48 bg-cover bg-center" style="background-image: url({card.image.url})" />
	<div
		class="cardText min-h-24 px-8 pt-8 pb-6 flex flex-col w-full text-center items-center justify-end"
	>
		<span class="rc_h4 text-rc_darkblue pb-2 rc_break_hyphens">{card.headline} </span>

		<div class="moreLink flex w-full items-center justify-center text-rc_red">
			<a
				href="{base}/{card.link.module.page.slug}#{card.link.module.id}"
				class="text-rc_red uppercase tracking-wider text-sm font-medium pr-2">Mehr</a
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

-->
