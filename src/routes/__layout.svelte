<script lang="ts">
	import '../app.css';
	import '@fontsource/red-hat-text/variable.css';

	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta name="description" content="Software zum Optimieren des Versandprozesses aus Aegidenberg (Bad Honnef)" />
	
</svelte:head>



<div class="flex flex-col min-h-screen justify-between">
<Header />

<main class="mb-auto bg-gray-50 pb-20">
	<slot />
</main>


<Footer />

</div>