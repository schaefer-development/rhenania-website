<script context="module" lang="ts">
	import BlogPost from '$lib/components/BlogPost/BlogPost.svelte';
	import { LoadBlogPost } from '$lib/helpers';
	import type { LoadBlogPostData } from '$lib/helpers';
	export const load = LoadBlogPost;
	export const prerender = true;
</script>

<script lang="ts">
	export let data: LoadBlogPostData = { blogPost: null };
</script>

<BlogPost blogPost={data.blogPost} />
