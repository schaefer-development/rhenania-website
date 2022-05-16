import type { RequestHandler } from '@sveltejs/kit';
import { GRAPHCMS_ENDPOINT } from '$lib/env';
import { fallbackLocale } from '$lib/i18n';

type Api = (query: string, variables?: Record<string, unknown>) => RequestHandler;
type GraphQlRequest = (
	query: string,
	variables?: Record<string, unknown>
) => (event: Parameters<RequestHandler>[0]) => Promise<Response>;

export const graphQlRequest: GraphQlRequest = (query, variables) => async (event) => {
	const { lang: requestedLocale } = event.params;
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'gcms-locales': [requestedLocale, fallbackLocale].filter(Boolean).join(',')
	};

	return fetch(GRAPHCMS_ENDPOINT, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});
};

export const api: Api = (query, variables) => async (event) => {
	const res = await graphQlRequest(query, variables)(event);
	const { status } = res;
	const body = await res.json();

	return {
		status,
		body
	};
};
