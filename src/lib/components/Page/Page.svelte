<script lang="ts">
	import AssetLink from '$lib/components/AssetLink/AssetLink.svelte';
	import PartnerContainer from '$lib/components/PartnerContainer/PartnerContainer.svelte';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import CtaLink from '$lib/components/CtaLink/CtaLink.svelte';
	import CardsContainer from '$lib/components/CardsContainer/CardsContainer.svelte';
	import Eyecatcher from '$lib/components/Eyecatcher/Eyecatcher.svelte';
	import AccordionContainer from '$lib/components/AccordionContainer/AccordionContainer.svelte';
	import ReferencesContainer from '$lib/components/ReferencesContainer/ReferencesContainer.svelte';
	import HeroImage from '$lib/components/HeroImage/HeroImage.svelte';
	import Image from '$lib/components/Image/Image.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import TextAndImage from '$lib/components/TextAndImage/TextAndImage.svelte';
	import BlogPost from '$lib/components/BlogPostTeaser/BlogPostTeaser.svelte';
	import type { Page } from '$lib/graphql/generated/schema';
	export let page: Partial<Page>;
	const mapping = {
		AssetLink,
		Divider,
		CtaLink,
		CardsContainer,
		Eyecatcher,
		PartnerContainer,
		AccordionContainer,
		ReferencesContainer,
		Image,
		Text,
		TextAndImage,
		HeroImage,
		BlogPost
	} as const;
</script>

{#if page && page.modules}
	<div class="relative">
		{#each page.modules as module (module.id)}
			<svelte:component this={mapping[module.__typename]} {module} />
		{/each}
	</div>
{/if}
