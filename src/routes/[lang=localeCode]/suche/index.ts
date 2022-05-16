import type { RequestHandler } from '@sveltejs/kit';
import { SEARCH } from '$lib/graphql/queries';
import { graphQlRequest } from '$lib/graphql/api';
import Fuse from 'fuse.js';

const fuseOptions = {
	includeScore: true,
	keys: [
		'title',
		'description',
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
	const res = await graphQlRequest(SEARCH)(event);
	const { status } = res;
	const { data } = await res.json();
	const documents = [...data.pages, ...data.blogPosts];
	const query = event.url.searchParams.get('q');
	if (!query) return { status, body: { results: documents } };
	const fuse = new Fuse(documents, fuseOptions);
	const results = fuse.search(query);
	return { status, body: { results: results } };
};
