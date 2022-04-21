import type { ParamMatcher } from '@sveltejs/kit';
import { localeCodes } from '$lib/i18n';

export const match: ParamMatcher = (param) => {
	return localeCodes.includes(param);
};
