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
	<main class="mb-auto">
		<slot />
	</main>
	<Footer />
</div>
