<script lang="ts">
	import { page } from '$app/stores';
	import { locales } from '$lib/i18n';

	const getHref =
		({ url }: { url: URL }) =>
		(lang: string) => {
			const { pathname } = url;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const [_empty, _lang, ...rest] = pathname.split('/');
			const href = `/${lang}/${rest.join('/')}`;
			return href;
		};
</script>

<<<<<<< HEAD:src/lib/components/LanguageMenu/LanguageMenu.svelte
<div class="pb-8">
	<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Sprache</p>
	{#each locales as locale (locale.code)}
		{#if locale.code !== $page.params.lang}
			<a
				href={getHref($page)(locale.code)}
				class="text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
=======
<div class="inline languageToggler  flex flex-row">
	{#each locales as locale (locale.key)}
		{#if locale.key !== $page.url.searchParams.get('lang')}
			<a
				href={getHref($page)(locale.key)}
				class="relative px-1.5 text-gray-400 text-sm hover:text-rc_red"
>>>>>>> b6a5c6d (feat: language toggler placed in header):src/lib/components/LanguageToggle/LanguageToggle.svelte
			>
				{locale.label}
			</a>
		{:else}
			<span class="relative font-medium px-1.5 text-black text-sm">
				<!-- active -->
				{locale.label}
			</span>
		{/if}
	{/each}
</div>

<style>
	.languageToggler *::after {
		content: '';
		display: inline-block;
		position: absolute;
		width: 1px;
		height: 140%;
		top: -16%; /* 30% / 2 - 4 */
		margin-left: calc(0.375rem - 1px);
		border-left: 1px solid #aaa;
		transform: rotate(15deg);
	}

	.languageToggler *:last-child::after {
		display: none;
	}
</style>
