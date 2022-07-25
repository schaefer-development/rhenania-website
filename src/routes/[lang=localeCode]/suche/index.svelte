<script context="module" lang="ts">
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	export let results: { item: Record<string, unknown> }[] = [];
</script>

<div class="relative z-10 max-w-screen-lg mx-auto px-10 py-12 text-rc_green font-bold">
	<div class="flex flex-col md:flex-row w-full">
		<div class="p-2 w-full md:w-2/12  flex justify-center items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>
		<div class="w-full md:w-10/12 break-words p-2">
			Für optimale Suchergebnisse empfehlen wir einzelne, präzise Suchbegriffe einzugeben und auf
			substantivische Zusammensetzungen zu verzichten.
		</div>
	</div>
</div>

<div class="mod_divider relative">
	<div class="mod_divider w-full">
		<div class="h-1 w-full border-gray-300 border-b-4" />
		<div class="mx-auto max-w-screen-2xl w-full h-1 -mt-1 flex flew-row">
			<div class="bg-gray-300" style="width:50%;" />
			<div class="bg-gray-50" style="width:6%;" />
			<div class="bg-gray-300" style="width:5%;" />
			<div class="bg-gray-50" style="width:6%;" />
			<div class="bg-gray-300" style="width:7%;" />
			<div class="bg-gray-50" style="width:8%;" />
			<div class="bg-gray-300" style="width:8%;" />
			<div class="bg-gray-50" style="width:4%;" />
			<div class="bg-gray-300" style="width:6%;" />
		</div>
	</div>
</div>

<div class="relative z-10 max-w-screen-lg mx-auto px-10 pt-12 pb-24 text-rc_red font-bold">
	<h1 class="rc_h2 text-black py-2">Suchanfrage:</h1>

	<h2 class="rc_h1 text-rc_darkblue pb-12">
		{$page.url.searchParams.get('q') ?? ''}
	</h2>

	<h2 class="rc_h2 text-black py-2">Suchergebnisse:</h2>
	{#each results as hit (hit.objectID)}
		<SearchResult {hit} />

		<hr class="mt-3 mb-2 last:hidden" />
	{/each}
</div>
