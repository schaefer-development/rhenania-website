<script lang="ts">
	import type { BlogPost } from '$lib/graphql/generated/schema';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Image from '$lib/components/Image/Image.svelte';
	import Text from '$lib/components/Text/Text.svelte';

	export let blogPost: Partial<BlogPost> = {};
	const mapping = {
		Divider,
		CardsContainer,
		Image,
		Text
	};
</script>

{#if blogPost}
	<div class="mod_blogEntry relative w-full overflow-hidden h-auto">
		<div
			class="bg_layer absolute w-full h-full bg-cover bg-center "
			style="background-image: url({blogPost.heroBackgroundImage.url})"
		/>
	<div
			class="relative z-2 h-30v flex items-center max-w-screen-md mx-auto px-4 lg:px-10 py-16 lg:py-24"
		>
		</div>
		
	</div>
	<div class="relative">
		{#each blogPost.modules as module (module.id)}
			<svelte:component this={mapping[module.__typename]} {module} />
		{/each}
	</div>

	{/if}
