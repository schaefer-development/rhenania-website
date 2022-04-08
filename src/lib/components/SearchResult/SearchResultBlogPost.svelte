<script lang="ts">
	import { base } from '$app/paths';
	import type { BlogPost } from '$lib/graphql/generated/schema';
	export let blogPost: Partial<BlogPost>;
</script>

<div>
	<a href="{base}/blog/{blogPost.slug}" title={blogPost.slug}>Zum Blog Post: {blogPost.slug}</a>
</div>
