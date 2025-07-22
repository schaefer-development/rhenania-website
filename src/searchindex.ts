import { SEARCH } from './lib/graphql/queries';
import { api } from '$lib/graphql/api';
import { client, INDEX } from './lib/algolia';
import util from 'util';

import type { MultipleBatchRequest } from 'algoliasearch';

export const cleanTemporaryIndices = async () => {
	if (!client) {
		return;
	}
	const indexList = await client.listIndices();
	const temporaryIndices = indexList.items.filter((index) => {
		return index.name.startsWith(`${INDEX}_tmp_`) && index.pendingTask === false;
	});
	if (temporaryIndices.length > 0) {
		const requests: MultipleBatchRequest[] = temporaryIndices.map((index) => ({
			action: 'delete',
			indexName: index.name
		}));
		await client.multipleBatch({ requests: requests });
		console.log('Deleted these temporary indices without pending task:');
		console.log(util.inspect(requests, { showHidden: false, depth: null, colors: true }));
	}
};

export const updateIndex = async () => {
	if (!client) {
		// only update Algolia indices if required env vars are defined
		return;
	}

	const { body } = await api(SEARCH, { params: { lang: 'de' } });
	const { pages, blogPosts } = body.data;
	const documents = [...pages, ...blogPosts].map((document) => ({
		...document,
		objectID: document.id
	}));

	const settings = {
		searchableAttributes: [
			'title',
			'description',
			'blogpostTitle',
			'blogpostMetaDescription',
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
		attributesToSnippet: ['*:25']
	};
	const { taskID } = await client.setSettings({ indexName: INDEX, indexSettings: settings });
	await client.waitForTask({ indexName: INDEX, taskID });
	const savedObjects = await client.replaceAllObjects({ indexName: INDEX, objects: documents });
	console.log('Successfully updated search index:');
	console.log(util.inspect(savedObjects, { showHidden: false, depth: null, colors: true }));
	return savedObjects;
};
