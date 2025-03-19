import type { PageLoad } from './$types';
import type { Page } from '$lib/graphql/generated/schema'
import { api } from '$lib/graphql/api'
import { PAGE } from '$lib/graphql/queries'

export const prerender = true;


export const load: PageLoad = async () => {
  const { body } = await api(PAGE, { slug: 'start' });
  const page: Page = body.data.page
  return { page }
};
