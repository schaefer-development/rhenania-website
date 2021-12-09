import { GRAPHCMS_ENDPOINT } from '$lib/env';
import type { EndpointOutput } from '@sveltejs/kit';

export async function api(
	query: string,
	variables?: Record<string, unknown>
): Promise<EndpointOutput> {
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json'
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
}
