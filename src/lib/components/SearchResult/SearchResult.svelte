<script lang="ts">
	import SearchResultBlogPost from './SearchResultBlogPost.svelte';
	import SearchResultPage from './SearchResultPage.svelte';
	import type { Page, BlogPost } from '$lib/graphql/generated/schema';
	export let result: { item: Partial<Page> | Partial<BlogPost> };
</script>

{#if result}
	{#if result.item.__typename === 'Page'}
		<SearchResultPage page={result.item} />
	{/if}
	{#if result.item.__typename === 'BlogPost'}
		<SearchResultBlogPost blogPost={result.item} />
	{/if}
{/if}
