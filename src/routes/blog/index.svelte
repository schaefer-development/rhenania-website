<script context="module" lang="ts">
	import BlogPostTeaser from '$lib/components/BlogPostTeaser/BlogPostTeaser.svelte';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/blog.json`);
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};
	export const prerender = true;
</script>

<script lang="ts">
	export let data = { blogPosts: null };
</script>

{#each data.blogPosts as module (module.id)}
	<BlogPostTeaser {module} />
{/each}
