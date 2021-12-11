<script lang="ts">
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Eyecatcher from '$lib/components/Eyecatcher/Eyecatcher.svelte';
	import Faq from '$lib/components/Faq/Faq.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page> = {};
</script>

<h1>Ich bin die Page componente für /{page.slug}</h1>
{#each page.modules as module}
	{#if module.__typename === 'Divider'}
		<Divider {module} />
	{:else if module.__typename === 'CardsContainer'}
		<CardsContainer cardsContainer={module} />
	{:else if module.__typename === 'Eyecatcher'}
		<Eyecatcher {module} />
	{/if}
{/each}


<Faq />