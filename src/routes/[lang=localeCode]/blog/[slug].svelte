<script context="module" lang="ts">
	import BlogPostWrapper from '$lib/components/BlogPost/BlogPost.svelte';
	import type { BlogPost } from '$lib/graphql/generated/schema';
	export const prerender = true;
</script>

<script lang="ts">
	export let data: { blogPost: BlogPost } = { blogPost: undefined };
</script>

<svelte:head>
	<meta name="description" content={data.blogPost.blogpostMetaDescription} />
</svelte:head>

<BlogPostWrapper blogPost={data.blogPost} />
