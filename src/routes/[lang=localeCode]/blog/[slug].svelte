<script context="module" lang="ts">
	import BlogPostWrapper from '$lib/components/BlogPost/BlogPost.svelte';
	import type { BlogPost } from '$lib/graphql/generated/schema';
	export const prerender = true;
</script>

<script lang="ts">
	export let data: { blogPost: BlogPost } = { blogPost: undefined };
</script>

<BlogPostWrapper blogPost={data.blogPost} />
