import { gql } from '$lib/helpers';
export const START = gql`
	{
		page(where: { slug: "start" }) {
			id
			slug
			modules {
				__typename
				... on Eyecatcher {
					id
					headline
					subheadline
					buttonLabel
				}
				... on Divider {
					id
					padding
				}
				... on CardsContainer {
					id
					headline
					cards {
						__typename
						... on CardImage {
							id
							image {
								url
							}
						}
						... on CardIcon {
							id
							icon {
								url
							}
						}
					}
				}
			}
		}
	}
`;
