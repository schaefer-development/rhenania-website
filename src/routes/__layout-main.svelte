<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { register, init } from 'svelte-i18n';
	import { locales, fallbackLocale } from '$lib/i18n';

	locales.forEach(({ code, importFunction }) => register(code, importFunction));

	export const load: Load = async ({ params }) => {
		await init({
			fallbackLocale,
			initialLocale: params.lang
		});
		return { status: 200 };
	};
</script>

<slot />
