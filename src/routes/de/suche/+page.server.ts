import type { PageServerLoad } from './$types';
import { client, INDEX } from '$lib/algolia';

export const prerender = false;

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) return { hits: [] };
	const results = await client.searchSingleIndex({
		indexName: INDEX,
		searchParams: { query }
	});
	const { hits } = results;
	return { hits };
};
