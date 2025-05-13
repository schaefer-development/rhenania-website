import type { PageServerLoad } from './$types';
import type { Page } from '$lib/graphql/generated/schema';
import { error } from '@sveltejs/kit';
import { api } from '$lib/graphql/api';
import { PAGE } from '$lib/graphql/queries';

export const prerender = false;

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const { body } = await api(PAGE, { slug });

	if (!body.data.page) {
		error(404, {
			message: 'Not found'
		});
	}

	const page: Page = body.data.page;
	return { page };
};
