<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	import type { Text } from '$lib/graphql/generated/schema';
	export let module: Partial<Text> = {};
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

	const { text } = module;
	const rendered = text
		? astToHtmlString({
				content: text.json,
				references: text.references,
				renderers: {
					link: {
						Page: ({ slug, children }) => {
							return `<a href="/de/${slug}">${children}</a>`;
						},
						BlogPost: ({ slug, children }) => {
							return `<a href="/de/blog/${slug}">${children}</a>`;
						}
					}
				}
			})
		: null;
</script>

<div class="mod_text relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}"></div>

	<div class="relative z-10 mx-auto max-w-screen-lg px-4 lg:px-10">
		{#if module.heading1}
			<h1 class="rc_h1 text-rc_darkblue">{module.heading1}</h1>
		{/if}
		{#if module.heading2}
			<h2 class="rc_h2 py-2 text-black">{module.heading2}</h2>
		{/if}
		{#if module.heading3}
			<h3 class="rc_h3 py-2">{module.heading3}</h3>
		{/if}
		{#if rendered}
			<div class="rc_break_hyphens py-4">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html rendered}
			</div>
		{/if}
	</div>

	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>

<style>
	:global(.mod_text ul) {
		padding: 1.5em 0;
		margin-left: 2em;
	}

	:global(.mod_text ul li) {
		list-style-type: none;
		padding: 0.25em 1em 0.5em 0.25em;
	}

	:global(.mod_text ul li:before) {
		position: absolute;
		content: '■';
		color: rgba(42, 73, 157, 1);
		margin-left: -2em;
	}

	:global(.mod_text ol) {
		padding: 1.5em 0;
		counter-reset: item;
	}

	:global(.mod_text ol li) {
		list-style-type: numeric;
		padding: 0.25em 1em 0.5em 0.25em;
		text-indent: 1em;
		display: block;
	}

	:global(.mod_text ol li:before) {
		position: absolute;
		content: counter(item) '. ';
		counter-increment: item;
		color: rgba(42, 73, 157, 1);
		margin-left: -3em;
		font-weight: bold;
	}

	:global(.mod_text .highlight_blue) {
		background-color: #2a499d;
		color: #fff;
		padding: 1em;
		margin: 1em 0;
	}

	:global(.mod_text a) {
		position: relative;
		display: inline-block;
		font-weight: bold;
		color: #ea3336;
	}

	:global(.mod_text a::after) {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	:global(.mod_text a:hover::after) {
		background-color: #ea3336;
		bottom: -2px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
</style>
