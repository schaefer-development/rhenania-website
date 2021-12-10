<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text';

	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta name="description" content="Software zum Optimieren des Versandprozesses aus Aegidenberg (Bad Honnef)" />
	
</svelte:head>



<div class="flex flex-col h-screen justify-between">
<Header />

<main class="mb-auto">
	<slot />
</main>

<Footer />
</div>