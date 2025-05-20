import { dev } from '$app/environment';
import { updateIndex } from './searchindex';

import type { ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {
	if (dev) return;

	try {
		const savedObjects = await updateIndex();
		console.log('Successfully updated search index.', savedObjects);
	} catch (error) {
		const message = error instanceof Error ? error.message : error;
		console.error(message);
		process.exit(1);
	}
};
