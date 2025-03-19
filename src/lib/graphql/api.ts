import { GRAPHCMS_ENDPOINT } from '$lib/env';

export const api = async (query: string, variables: Record<string, unknown>) => {
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
	if (!status.toString().startsWith('2')) {
		console.log(body);
	}
	return {
		status,
		body
	};
};
