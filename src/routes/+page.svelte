<script lang="ts">
	import type { PageProps } from './$types';
	import PageWrapper from '$lib/components/Page/Page.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageWrapper page={data.page} />
