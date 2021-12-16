<script context="module" lang="ts">
	import Page from '$lib/components/Page/Page.svelte';
	import HeroStart from '$lib/components/HeroStart/HeroStart.svelte';
	import { LoadPage } from '$lib/helpers';
	export const load = LoadPage('start');
	export const prerender = true;
</script>

<script lang="ts">
	export let data = { page: {} };
</script>

<HeroStart />

<Page page={data.page} />
