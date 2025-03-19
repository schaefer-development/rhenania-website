<script lang="ts">
	import type { BlogPost } from '$lib/graphql/generated/schema';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Image from '$lib/components/Image/Image.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import PartnerContainer from '$lib/components/PartnerContainer/PartnerContainer.svelte';
	import TextAndImage from '$lib/components/TextAndImage/TextAndImage.svelte';
	import CtaLink from '$lib/components/CtaLink/CtaLink.svelte';

	export let blogPost: Partial<BlogPost> | undefined;
	const mapping = {
		Divider,
		CardsContainer,
		Image,
		Text,
		PartnerContainer,
		TextAndImage,
		CtaLink
	};
</script>

{#if blogPost}
	<div class="mod_blogEntry relative h-auto w-full overflow-hidden">
		<div
			class="bg_layer absolute h-full w-full bg-cover bg-center"
			style="background-image: url({blogPost.heroBackgroundImage.url})"
		></div>
		<div
			class="h-30v relative z-2 mx-auto flex max-w-screen-md items-center px-4 py-16 lg:px-10 lg:py-24"
		></div>
	</div>
	<div class="relative">
		{#each blogPost.modules as module (module.id)}
			<svelte:component this={mapping[module.__typename]} {module} />
		{/each}
	</div>
{/if}
