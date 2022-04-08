import { GRAPHCMS_ENDPOINT } from '$lib/env';
import type { RequestHandler } from '@sveltejs/kit';

type Api = (query: string, variables?: Record<string, unknown>) => RequestHandler;

export const api: Api = (query, variables) => async (event) => {
	const lang = event.query.get('lang') ?? 'de';
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'gcms-locales': `${lang},de`
	};

	const res = await fetch(GRAPHCMS_ENDPOINT, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});

	const { status } = res;
	const body = await res.json();

	return {
		status,
		body
	};
};
