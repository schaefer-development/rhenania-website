import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import { SEARCH } from '$lib/graphql/queries';

export const get: RequestHandler = api(SEARCH);
