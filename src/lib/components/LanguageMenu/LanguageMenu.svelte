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

<div class="languageMenu">
	{#each locales as locale (locale.code)}
		{#if locale.code !== $page.params.lang}
			<a
				href={getHref($page)(locale.code)}
				class="relative px-1.5 text-gray-400 text-sm hover:text-rc_red"
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
	.languageMenu *::after {
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

	.languageMenu *:last-child::after {
		display: none;
	}
</style>
