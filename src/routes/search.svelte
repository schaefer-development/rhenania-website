<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		return {
			props: { query: page.query.get('q') }
		};
	};
</script>

<script lang="ts">
	export let query: string;
</script>

{query}
