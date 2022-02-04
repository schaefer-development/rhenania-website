<script context="module" lang="ts">
	import Page from '$lib/components/Page/Page.svelte';
	import type { LoadPageData } from '$lib/helpers';
	import { LoadPage } from '$lib/helpers';
	export const load = LoadPage('hardware');
	export const prerender = true;
</script>

<script lang="ts">
	export let data: LoadPageData = { page: null };
</script>

<Page page={data.page} />
