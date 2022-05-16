<script context="module" lang="ts">
	import BlogPostTeaser from '$lib/components/BlogPostTeaser/BlogPostTeaser.svelte';
	export const prerender = true;
</script>

<script lang="ts">
	export let data = { blogPosts: null };
</script>

{#each data.blogPosts as module (module.id)}
	<BlogPostTeaser {module} />
{/each}
