<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ session, fetch, page }) {
		const { lang } = session;
		const q = page.query.get('q');
		const url = `/layout.json?lang=${lang}`;
		const res = await fetch(url);

		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data, q }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	}
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

	export let data = { referencesContainers: null };
	export let q: string;

	let referenceItems = data.referencesContainers?.[0].referenceItems;
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
	<Header {toggleMenuFull} {openMenuFull} {q} />
	{#if $navigating}
		<LoadingIndicator />
	{:else}
		<main class="mb-auto">
			<slot />
		</main>
	{/if}
	<Footer {referenceItems} />
</div>
