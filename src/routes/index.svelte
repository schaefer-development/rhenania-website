<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ session }) => {
		const { lang } = session as { lang: string };
		return { status: 302, redirect: `/${lang}` };
	};
</script>
