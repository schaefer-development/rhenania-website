<script lang="ts">
	import type { PageProps } from './$types';
	import PageWrapper from '$lib/components/Page/Page.svelte';

	let { data }: PageProps = $props();
</script>

<PageWrapper page={data.page} />
