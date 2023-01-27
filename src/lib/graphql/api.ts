import type { RequestHandler } from '@sveltejs/kit';
import { GRAPHCMS_ENDPOINT } from '$lib/env';
import { fallbackLocale } from '$lib/i18n';

type Api = (query: string, variables?: Record<string, unknown>) => RequestHandler;
interface HasParams extends Pick<Parameters<RequestHandler>[0], 'params'> {}

type GraphQlRequest = (
	query: string,
	variables?: Record<string, unknown>
) => (event: HasParams) => Promise<Response>;

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
	if (!status.toString().startsWith('2')) {
		console.log(body);
	}
	return {
		status,
		body
	};
};
