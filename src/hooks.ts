import type { GetSession } from '@sveltejs/kit';
import { localeCodes, fallbackLocale } from '$lib/i18n';
import acceptLanguage from 'accept-language';
acceptLanguage.languages(localeCodes);

export const getSession: GetSession = (event) => {
	const lang = acceptLanguage.get(event.request.headers.get('accept-language')) ?? fallbackLocale;
	return { lang };
};
