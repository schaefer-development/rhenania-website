import type { RequestHandler } from '@sveltejs/kit';
import { SEARCH } from '$lib/graphql/queries';
import Fuse from 'fuse.js';
import { GRAPHCMS_ENDPOINT } from '$lib/env';

const fuseOptions = {
	includeScore: true,
	keys: [
		'teaserHeadline',
		'teaserSubheadline',
		'teaserText',
		'modules.headline',
		'modules.heading1',
		'modules.heading2',
		'modules.heading3',
		'modules.text.html',
		'modules.accordionItems.headline',
		'modules.accordionItems.content.html',
		'modules.cards.headline',
		'modules.cards.subheadline'
	]
};

export const get: RequestHandler = async (event) => {
	const lang = event.query.get('lang') ?? 'de';
	const query = event.query.get('q');
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'gcms-locales': `${lang},de`
	};
	const res = await fetch(GRAPHCMS_ENDPOINT, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query: SEARCH
		})
	});
	const { status } = res;
	const { data } = await res.json();
	const documents = [...data.pages, ...data.blogPosts];
	if (!query) return { status, body: { results: documents } };
	const fuse = new Fuse(documents, fuseOptions);
	const results = fuse.search(query);
	return { status, body: { results: results } };
};
