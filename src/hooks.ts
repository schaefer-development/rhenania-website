import type { GetSession } from '@sveltejs/kit';
import { localeCodes, fallbackLocale } from '$lib/i18n';
import acceptLanguage from 'accept-language';
import { dev } from '$app/env';
import { updateIndex } from './searchindex';

acceptLanguage.languages(localeCodes);

export const getSession: GetSession = (_event) => {
	// TODO: Why does this work locally but for whatever reason not on Netlify?
	// const lang = acceptLanguage.get(event.request.headers.get('accept-language')) ?? fallbackLocale;
	const lang = fallbackLocale;
	return { lang };
};

if (dev === false) {
	updateIndex()
		.then((savedObjects) => {
			console.log('Successfully updated search index.', savedObjects);
		})
		.catch((error) => {
			console.error(error.message);
			process.exit(1);
		});
}
