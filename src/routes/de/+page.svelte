<script lang="ts">
	import type { PageProps } from './$types';
	import PageWrapper from '$lib/components/Page/Page.svelte';
	import HeroStart from '$lib/components/HeroStart/HeroStart.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Rhenania Computer</title>
	<meta
		name="description"
		content="RC Rhenania Computer optimiert Ihren Versand. Softwarelösungen für die Versandlogistik und die Versandoptimierung seit mehr als 30 Jahren. Mehr erfahren"
	/>
</svelte:head>

<HeroStart></HeroStart>

<PageWrapper page={data.page} />
