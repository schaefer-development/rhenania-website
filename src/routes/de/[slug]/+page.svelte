<script lang="ts">
	import type { PageProps } from './$types';
	import PageWrapper from '$lib/components/Page/Page.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.page.title ?? data.meta.title}</title>
	<meta name="description" content={data.page.description ?? data.meta.description} />
</svelte:head>

<PageWrapper page={data.page} />
