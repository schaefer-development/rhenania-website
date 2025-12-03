<script lang="ts">
	import type { PageProps } from './$types';
	import SearchResult from '$lib/components/SearchResult/SearchResult.svelte';
	import { page } from '$app/state';
	let { data }: PageProps = $props();
	const { hits } = data;
</script>

<div class="text-rc_green relative z-10 mx-auto max-w-screen-lg px-10 py-12 font-bold">
	<div class="flex w-full flex-col md:flex-row">
		<div class="flex w-full items-center justify-center p-2 md:w-2/12">
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
		<div class="w-full p-2 break-words md:w-10/12">
			Für optimale Suchergebnisse empfehlen wir, einzelne, präzise Suchbegriffe einzugeben und auf
			substantivische Zusammensetzungen ("Schlangenwörter") zu verzichten.
		</div>
	</div>
</div>

<div class="mod_divider relative">
	<div class="mod_divider w-full">
		<div class="h-1 w-full border-b-4 border-gray-300"></div>
		<div class="flew-row mx-auto -mt-1 flex h-1 w-full max-w-screen-2xl">
			<div class="bg-gray-300" style="width:50%;"></div>
			<div class="bg-gray-50" style="width:6%;"></div>
			<div class="bg-gray-300" style="width:5%;"></div>
			<div class="bg-gray-50" style="width:6%;"></div>
			<div class="bg-gray-300" style="width:7%;"></div>
			<div class="bg-gray-50" style="width:8%;"></div>
			<div class="bg-gray-300" style="width:8%;"></div>
			<div class="bg-gray-50" style="width:4%;"></div>
			<div class="bg-gray-300" style="width:6%;"></div>
		</div>
	</div>
</div>

<div class="text-rc_red relative z-10 mx-auto max-w-screen-lg px-10 pt-12 pb-24 font-bold">
	<h1 class="rc_h2 py-2 text-black">Suchanfrage:</h1>

	<h2 class="rc_h1 text-rc_darkblue pb-12">
		{page.url.searchParams.get('q') ?? ''}
	</h2>

	<h2 class="rc_h2 py-2 text-black">Suchergebnisse:</h2>
	{#each hits as hit (hit.objectID)}
		<SearchResult {hit} />

		<hr class="mt-3 mb-2 last:hidden" />
	{/each}
</div>
