<script lang="ts">
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Eyecatcher from '$lib/components/Eyecatcher/Eyecatcher.svelte';
	import FaqContainer from '$lib/components/FaqContainer/FaqContainer.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page>;
</script>

{#if page}
	<h1>Ich bin die Page componente für /{page.slug}</h1>
	<div class="relative">
		{#each page.modules as module (module.id)}
			{#if module.__typename === 'Divider'}
				<Divider {module} />
			{:else if module.__typename === 'CardsContainer'}
				<CardsContainer {module} />
			{:else if module.__typename === 'Eyecatcher'}
				<Eyecatcher {module} />
			{:else if module.__typename === 'FaqContainer'}
				<FaqContainer {module} />
			{/if}
		{/each}
	</div>
{/if}
