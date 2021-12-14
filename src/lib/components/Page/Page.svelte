<script lang="ts">
	import HeroStart from '$lib/components/HeroStart/HeroStart.svelte';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Eyecatcher from '$lib/components/Eyecatcher/Eyecatcher.svelte';
	import Faq from '$lib/components/Faq/Faq.svelte';
	import CardImage from '$lib/components/CardImage/CardImage.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page> = {};


	import Map from '$lib/components/Map/Map.svelte';
	const mapAttributes = {
	  class: '',
	  style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
	};
  
  
	export const prerender = true;
</script>



<Map {mapAttributes} />

<HeroStart />
<CardImage />

<Faq />

<h1>Ich bin die Page componente für /{page.slug}</h1>
<div class="relative">
{#each page.modules as module}
	{#if module.__typename === 'Divider'}
		<Divider {module} />
	{:else if module.__typename === 'CardsContainer'}
		<CardsContainer cardsContainer={module} />
	{:else if module.__typename === 'Eyecatcher'}
		<Eyecatcher {module} />
	{/if}
{/each}

</div>
