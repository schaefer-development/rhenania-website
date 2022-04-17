<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { browser } from '$app/env';
	import { locale, register, init } from 'svelte-i18n';
	import { locales, fallbackLocale } from '$lib/i18n';

	locales.forEach(({ code, importFunction }) => register(code, importFunction));

	if (browser) {
		// init on client side only
		// don't put this inside `load`, otherwise it will gets executed every time you changed route on client side
		init({
			fallbackLocale,
			initialLocale: fallbackLocale
		});
	}

	export const load: Load = async ({ params }) => {
		if (browser) {
			locale.set(params.lang);
		} else {
			init({
				fallbackLocale,
				initialLocale: params.lang
			});
		}
		return { status: 200 };
	};
</script>

<slot />
