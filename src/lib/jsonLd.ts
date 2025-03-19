import type { AccordionContainer } from '$lib/graphql/generated/schema';

const serializeSchema = (thing: Record<string, unknown>) => {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
};

const accordionItemToJsonLdQuestion = (
	accordionItem: AccordionContainer['accordionItems'][number]
) => {
	const name = accordionItem.headline;
	const text = accordionItem.content.text?.replace(/\\n/g, ' ') || '';
	return {
		'@type': 'Question',
		name,
		acceptedAnswer: {
			'@type': 'Answer',
			text
		}
	};
};

export const accordionContainerToJsonLd = (module: AccordionContainer) => {
	const mainEntity = module.accordionItems.map(accordionItemToJsonLdQuestion);
	return serializeSchema({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity
	});
};
