<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import type { FaqContainer } from '$lib/graphql/generated/schema';
	export let module: Partial<FaqContainer> = {};
</script>

<div id={module.id} class="relative bg-white my-10 py-12 shadow-md">
	<div class="relative z-10 max-w-screen-md mx-auto px-10 ">
		<h1 class="rc_h1 text-rc_darkblue-darkest pb-8">FAQ - Häufig gestellte Fragen</h1>
		{#each module.faqItems as faqItem (faqItem.id)}
			<Accordion id={faqItem.id}>
				<span slot="headline">{faqItem.question}</span>
				<div slot="content">
					{@html faqItem.answer.html}
				</div>
			</Accordion>
		{/each}
	</div>
</div>
