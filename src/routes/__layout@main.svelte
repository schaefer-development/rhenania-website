<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { ReferencesContainer } from '$lib/graphql/generated/schema';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/footer');
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};
</script>

<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text/400.css';
	import '@fontsource/red-hat-text/500.css';
	import '@fontsource/red-hat-text/700.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import LoadingIndicator from '$lib/components/LoadingIndicator/LoadingIndicator.svelte';
	import { navigating } from '$app/stores';

	let openMenuFull = false;
	const toggleMenuFull = () => {
		openMenuFull = !openMenuFull;
	};
	export let data: { referencesContainers: ReferencesContainer[] } = {
		referencesContainers: undefined
	};
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta
		name="description"
		content="Software aus Aegidenberg (Bad Honnef) zum Optimieren des Versandprozesses "
	/>
</svelte:head>

<div
	class="flex flex-col min-h-screen justify-between bg-gray-50"
	class:rc_menuIsOpen={openMenuFull}
>
	<Header {toggleMenuFull} {openMenuFull} />
	{#if $navigating}
		<LoadingIndicator />
	{:else}
		<main class="mb-auto">
			<slot />
		</main>
	{/if}
	<Footer {data} />
</div>
