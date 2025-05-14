<script lang="ts">
	import type { LayoutProps } from './$types';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	import LoadingIndicator from '$lib/components/LoadingIndicator/LoadingIndicator.svelte';
	import { navigating } from '$app/stores';
	import '../../app.css';

	let { children, data }: LayoutProps = $props();
</script>

<div id="top" class="flex min-h-screen flex-col justify-between bg-gray-50">
	<Header />

	{#if $navigating}
		<LoadingIndicator />
	{:else}
		<main class="mb-auto">
			{@render children()}
		</main>
	{/if}

	<Footer {data}></Footer>
	<!--	<Footer {data} />-->
</div>
