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

<div class="pb-8">
	<p class="uppercase font-bold text-center sm:text-left tracking-wider pb-2">Sprache</p>
	{#each locales as locale (locale.code)}
		{#if locale.code !== $page.params.lang}
			<a
				href={getHref($page)(locale.code)}
				class="text-white py-2 hover:text-rc_red focus:ring-0 focus:outline-none focus:text-rc_red"
			>
				{locale.label}
			</a>
		{:else}
			<span class="text-white py-2 focus:ring-0 focus:outline-none">
				{locale.label}
			</span>
		{/if}
		<br />
	{/each}
</div>
