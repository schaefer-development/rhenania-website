<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text/400.css';
	import '@fontsource/red-hat-text/500.css';
	import '@fontsource/red-hat-text/700.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	let openMenuFull = false;
	const toggleMenuFull = () => {
		openMenuFull = !openMenuFull;
	};

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta
		name="description"
		content="Software aus Aegidenberg (Bad Honnef) zum Optimieren des Versandprozesses "
	/>
</svelte:head>

{#if !ready}
	<div
		class="absolute top-0 left-0 w-full h-full bg-white grid content-center text-center"
		out:fade={{ duration: 500 }}
	>
		<h2
			class="font-medium uppercase  text-black hover:text-rc_red text-sm focus:ring-0 focus:outline-none focus:text-rc_red tracking-wider"
		>
			Loading ...
		</h2>
	</div>
{:else}
	<div class="visible-on-mount" in:fade={{ duration: 500 }}>
		<div
			class="flex flex-col min-h-screen justify-between bg-gray-50"
			class:rc_menuIsOpen={openMenuFull}
		>
			<Header {toggleMenuFull} {openMenuFull} />
			<main class="mb-auto">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
{/if}
