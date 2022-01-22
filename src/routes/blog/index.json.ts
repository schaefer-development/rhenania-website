import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { BLOG_POSTS } from '$lib/graphql/queries';

export const get: RequestHandler = async () => {
	return api(BLOG_POSTS);
};
