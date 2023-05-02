import type { RequestHandler } from '@sveltejs/kit';

import { api } from '$lib/graphql/api';
import { BLOG_POST } from '$lib/graphql/queries';

export const get: RequestHandler = async (event) => {
	const { slug } = event.params;
	return api(BLOG_POST, { slug })(event);
};
