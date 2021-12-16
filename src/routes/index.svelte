<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = () => {
		return {
			status: 301,
			redirect: '/start'
		};
	};
</script>
