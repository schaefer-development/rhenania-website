import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { PAGE } from '$lib/graphql/queries';

export const get: RequestHandler = (event) => {
	const { slug } = event.params;
	return api(PAGE, { slug })(event);
};
