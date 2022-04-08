<script lang="ts">
	import { base } from '$app/paths';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page>;
</script>

<div>
	<a href="{base}/{page.slug}" title={page.slug}>Zur Page: {page.slug}</a>
</div>
