import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY } from './lib/env';
import { SEARCH } from './lib/graphql/queries';
import { api } from '$lib/graphql/api';
import { client, INDEX } from './lib/algolia';

const appId = ALGOLIA_APP_ID;
const apiKey = ALGOLIA_ADMIN_KEY;

export const updateIndex = async () => {
	// only update Algolia indices if required env vars are defined
	if (appId && apiKey) {
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
		return client.replaceAllObjects({ indexName: INDEX, objects: documents });
	}
};
