import { algoliasearch } from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY } from '$lib/env';

export const client =
	ALGOLIA_APP_ID && ALGOLIA_ADMIN_KEY ? algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY) : null;
export const INDEX = 'rhenania-de';
