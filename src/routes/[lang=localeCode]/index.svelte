<script context="module" lang="ts">
	import PageWrapper from '$lib/components/Page/Page.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	import HeroStart from '$lib/components/HeroStart/HeroStart.svelte';
	export const prerender = true;
</script>

<script lang="ts">
	export let data: { page: Page } = { page: undefined };
</script>

<HeroStart />

<PageWrapper page={data.page} />
