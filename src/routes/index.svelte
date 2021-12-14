<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import Page from '$lib/components/Page/Page.svelte';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/index.json');
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};

	export const prerender = true;
</script>

<script lang="ts">
	export let data = { page: {} };
</script>

<Page page={data.page} />
