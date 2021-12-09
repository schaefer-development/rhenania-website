<script lang="ts">
	import Divider from '$lib/components/Divider/Divider.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page> = {};
</script>

<h1>Ich bin die Page componente für /{page.slug}</h1>
{#each page.modules as module}
	{#if module.__typename === 'Divider'}
		<Divider {module} />
	{/if}
{/each}
