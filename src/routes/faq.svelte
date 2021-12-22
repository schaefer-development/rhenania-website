<script context="module" lang="ts">
	import Page from '$lib/components/Page/Page.svelte';
	import { LoadPage } from '$lib/helpers';
	import type { LoadPageData } from '$lib/helpers';
	export const load = LoadPage('faq');
	export const prerender = true;
</script>

<script lang="ts">
	export let data: LoadPageData = { page: null };
</script>

<Page page={data.page} />
