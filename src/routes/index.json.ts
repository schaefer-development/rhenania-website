import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { PAGE } from '$lib/graphql/queries';

export const get: RequestHandler = async () => {
	return api(PAGE, { slug: 'start' });
};
