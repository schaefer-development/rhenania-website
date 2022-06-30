import type { RequestHandler } from '@sveltejs/kit';
import { index } from '$lib/algolia';

export const get: RequestHandler = async (event) => {
	const query = event.url.searchParams.get('q');
	if (!query) return { status: 200, body: { results: [] } };
	const results = await index.search(query);
	const { hits } = results;
	return { status: 200, body: { results: hits } };
};
