import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { PAGE } from '$lib/graphql/queries';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;
	return api(PAGE, { slug });
};
