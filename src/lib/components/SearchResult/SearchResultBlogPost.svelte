<script lang="ts">
	import { base } from '$app/paths';
	import type { BlogPost } from '$lib/graphql/generated/schema';
	export let blogPost: Partial<BlogPost>;
</script>

<div class="py-2 border-b">
	<span>Zum Blog</span><a
		class="relative flex-none text-rc_red font-bold pr-1"
		href="{base}/blog/{blogPost.slug}"
		title={blogPost.slug}>{blogPost.slug}</a
	>
</div>
