import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY } from './lib/env';
import { SEARCH } from './lib/graphql/queries';
import { graphQlRequest } from './lib/graphql/api';
import { index } from './lib/algolia';

const appId = ALGOLIA_APP_ID;
const apiKey = ALGOLIA_ADMIN_KEY;

export const updateIndex = async () => {
	// only update Algolia indices if required env vars are defined
	if (appId && apiKey) {
		const event = { params: { lang: 'de' } };
		const res = await graphQlRequest(SEARCH)(event);
		const body = await res.json();
		const { pages, blogPosts } = body.data;
		const documents = [...pages, ...blogPosts].map((document) => ({
			...document,
			objectID: document.id
		}));

		const settings = {
			searchableAttributes: [
				'title',
				'description',
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
		await index.clearObjects();
		const { taskID } = await index.setSettings(settings);
		await index.waitTask(taskID);
		return index.saveObjects(documents).wait();
	}
};
