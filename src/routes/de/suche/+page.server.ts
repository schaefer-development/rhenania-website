import type { PageServerLoad } from './$types';
import { index } from '$lib/algolia';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('q');
	if (!query) return { hits: [] };
	const results = await index.search(query);
	const { hits } = results;
	return { hits };
};
