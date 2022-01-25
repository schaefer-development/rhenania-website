<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import type { FaqContainer } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<FaqContainer> = {};
</script>

<div class="mod_faqContainer">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative bg-white py-12 shadow-md">
		<div class="relative z-10 max-w-screen-md mx-auto px-10 ">
			<h1 class="rc_h1 text-rc_darkblue-darkest pb-8">{module.headline}</h1>
			{#each module.faqItems as faqItem (faqItem.id)}
				<Accordion id={faqItem.id}>
					<span slot="headline" class="faq_question">{faqItem.question}</span>
					<div slot="content" class="faq_answer">
						{@html faqItem.answer.html}
					</div>
				</Accordion>
			{/each}
		</div>
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
</div>

<style>
	:global .faq_answer a {
		color: #ea3336;
		font-weight: 600;
		font-size: 0.875rem;
		line-height: 1.25rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	:global .faq_answer a:hover {
		text-decoration: underline;
	}
</style>
