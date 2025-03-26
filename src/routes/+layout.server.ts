import type { LayoutServerLoad} from './$types';
import type { ReferencesContainer } from '$lib/graphql/generated/schema';
import { api } from '$lib/graphql/api';
import { FOOTER } from '$lib/graphql/queries';

export const load: LayoutServerLoad = async () => {
	const { body } = await api(FOOTER, {});
	const referencesContainers: ReferencesContainer[] = body.data.referencesContainers;
	return { referencesContainers };
};
