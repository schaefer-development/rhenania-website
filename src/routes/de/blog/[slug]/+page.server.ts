import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/graphql/generated/schema';

import { error } from '@sveltejs/kit';
import { api } from '$lib/graphql/api';
import { BLOG_POST } from '$lib/graphql/queries';

export const prerender = 'auto';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const { body } = await api(BLOG_POST, { slug });

	if (!body.data.blogPost) {
		error(404, {
			message: 'Not found'
		});
	}

	const blogPost: BlogPost = body.data.blogPost;
	return { blogPost };
};
