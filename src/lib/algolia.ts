import { algoliasearch } from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY } from '$lib/env';

export const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
export const INDEX = 'rhenania-de';
