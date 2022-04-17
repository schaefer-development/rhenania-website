<script lang="ts">
	import { linkTo } from '$lib/helpers';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page>;
</script>

<div class="py-2 border-b">
	<span>Zur Page: </span><a
		class="relative flex-none text-rc_red font-bold"
		href={$linkTo(`/${page.slug}`)}
		title={page.slug}>{page.slug}</a
	>
</div>
