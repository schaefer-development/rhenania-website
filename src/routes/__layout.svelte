<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text/latin-400.css';
	import '@fontsource/red-hat-text/latin-500.css';
	import '@fontsource/red-hat-text/latin-700.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta
		name="description"
		content="Software aus Aegidenberg (Bad Honnef) zum Optimieren des Versandprozesses "
	/>
</svelte:head>

<div class="flex flex-col min-h-screen justify-between bg-gray-50 ">
	<Header />
	<main class="mb-auto">
		<slot />
	</main>
	<Footer />
</div>
