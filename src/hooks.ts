import type { GetSession } from '@sveltejs/kit';
import acceptLanguage from 'accept-language';
acceptLanguage.languages(['de', 'en']);

export const getSession: GetSession = (event) => {
	const lang = acceptLanguage.get(event.headers['accept-language']);
	return { lang };
};
