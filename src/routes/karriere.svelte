<script context="module" lang="ts">
	import Page from '$lib/components/Page/Page.svelte';
	import type { LoadPageData } from '$lib/helpers';
	import { LoadPage } from '$lib/helpers';
	export const load = LoadPage('karriere');
	export const prerender = true;
</script>

<script lang="ts">
	export let data: LoadPageData = { page: null };
</script>

<svelte:head>
	<title>Karriere</title>
</svelte:head>

<section>
	<div class="relative z-10 max-w-screen-xl mx-auto px-10 py-20">
		<h1 class="rc_h1 text-rc_darkblue">Page Karriere</h1>
		<p class="py-4">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
			sanctus est Lorem ipsum dolor sit amet.
		</p>
	</div>

	<Page page={data.page} />
</section>
