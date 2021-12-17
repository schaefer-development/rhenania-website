<script lang="ts">
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Eyecatcher from '$lib/components/Eyecatcher/Eyecatcher.svelte';
	import FaqContainer from '$lib/components/FaqContainer/FaqContainer.svelte';
	import ArticleHeroTeaser from '$lib/components/ArticleHeroTeaser/ArticleHeroTeaser.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page>;
	const mapping = {
		Divider,
		CardsContainer,
		Eyecatcher,
		FaqContainer,
		ArticleHeroTeaser
	};
</script>

{#if page}
	<div class="relative">
		{#each page.modules as module (module.id)}
			<svelte:component this={mapping[module.__typename]} {module} />
		{/each}
	</div>
{/if}
