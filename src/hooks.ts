import type { GetSession } from '@sveltejs/kit';
import { localeCodes, fallbackLocale } from '$lib/i18n';
import acceptLanguage from 'accept-language';

import { dev } from '$app/env';
import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY } from '$lib/env';
import rhenania from './rhenania.json';
import { indexAlgolia } from 'svelte-algolia/server-side';

acceptLanguage.languages(localeCodes);

export const getSession: GetSession = (_event) => {
	// TODO: Why does this work locally but for whatever reason not on Netlify?
	// const lang = acceptLanguage.get(event.request.headers.get('accept-language')) ?? fallbackLocale;
	const lang = fallbackLocale;
	return { lang };
};

const appId = ALGOLIA_APP_ID;
const apiKey = ALGOLIA_ADMIN_KEY;

// only update Algolia indices if required env vars are defined
if (dev === false && appId && apiKey) {
	// update Algolia search indices on production builds
	const algoliaConfig = {
		appId,
		apiKey,
		indices: [{ name: `rhenania`, getData: () => rhenania.results }],
		settings: {
			searchableAttributes: [
				'title',
				'description',
				'teaserHeadline',
				'teaserSubheadline',
				'teaserText',
				'modules.headline',
				'modules.heading1',
				'modules.heading2',
				'modules.heading3',
				'modules.text.html',
				'modules.accordionItems.headline',
				'modules.accordionItems.content.html',
				'modules.cards.headline',
				'modules.cards.subheadline'
			],
			attributesToSnippet: ['*:80']
		}
	};
	indexAlgolia(algoliaConfig);
}
