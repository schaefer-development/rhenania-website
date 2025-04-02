<script lang="ts">
	import type { PageProps } from './$types';
	import BlogPostWrapper from '$lib/components/BlogPost/BlogPost.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.blogPost.teaserHeadline ?? data.meta.title}</title>
	<meta name="description" content={data.blogPost.teaserText ?? data.meta.description} />
</svelte:head>

<BlogPostWrapper blogPost={data.blogPost} />
