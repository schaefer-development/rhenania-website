<script lang="ts">
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';
	import type { EmbedReferences, RichTextContent } from '@graphcms/rich-text-types';

	let {
		text
	}: { text: { json: RichTextContent; references: EmbedReferences } | undefined | null } = $props();

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

	console.log(text);
</script>

{#if rendered}
	<div class="rc_break_hyphens py-4">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html rendered}
	</div>
{/if}
