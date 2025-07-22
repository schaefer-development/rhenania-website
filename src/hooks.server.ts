import { dev } from '$app/environment';
import { updateIndex, cleanTemporaryIndices } from './searchindex';

import type { ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {
	if (dev) return;

	try {
		await updateIndex();
		await cleanTemporaryIndices();
	} catch (error) {
		const message = error instanceof Error ? error.message : error;
		console.error(message);
		process.exit(1);
	}
};
