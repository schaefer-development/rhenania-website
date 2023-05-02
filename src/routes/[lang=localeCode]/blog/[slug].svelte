<script context="module" lang="ts">
	import type { BlogPost } from '$lib/graphql/generated/schema';
	import type { Load } from '@sveltejs/kit';

	import BlogPostWrapper from '$lib/components/BlogPost/BlogPost.svelte';

	export const prerender = true;
	export const load: Load = async ({ props }) => {
		const { blogPost } = props.data;
		if (!blogPost) {
			return { props };
		}
		const { blogpostMetaDescription } = blogPost;
		return {
			props,
			stuff: { description: blogpostMetaDescription }
		};
	};
</script>

<script lang="ts">
	export let data: { blogPost: BlogPost } = { blogPost: undefined };
</script>

<BlogPostWrapper blogPost={data.blogPost} />
