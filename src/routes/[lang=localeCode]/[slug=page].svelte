<script context="module" lang="ts">
	import type { Page } from '$lib/graphql/generated/schema';
	import type { Load } from '@sveltejs/kit';
	import PageWrapper from '$lib/components/Page/Page.svelte';
	export const prerender = true;
	export const load: Load = async ({ props }) => {
		const { page } = props.data;
		if (!page) {
			return { props };
		}
		const { title, description } = page;
		return {
			props,
			stuff: { title, description }
		};
	};
</script>

<script lang="ts">
	export let data: { page: Page } = { page: undefined };
</script>

<PageWrapper page={data.page} />
