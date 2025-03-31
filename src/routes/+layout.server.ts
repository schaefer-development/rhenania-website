import type { LayoutServerLoad } from './$types';
import type { ReferencesContainer } from '$lib/graphql/generated/schema';
import { api } from '$lib/graphql/api';
import { FOOTER } from '$lib/graphql/queries';

export const load: LayoutServerLoad = async () => {
	const { body } = await api(FOOTER, {});
	const referencesContainers: ReferencesContainer[] = body.data.referencesContainers;
	const meta = {
		title: 'Rhenania Computer',
		description:
			'RC Rhenania Computer optimiert Ihren Versand. Softwarelösungen für die Versandlogistik und die Versandoptimierung seit mehr als 30 Jahren. Mehr erfahren'
	};
	return { referencesContainers, meta };
};
