import { gql } from '$lib/helpers';
export const START = gql`
	{
		page(where: { slug: "start" }) {
			id
			slug
			modules {
				__typename
				... on Eyecatcher {
					headline
					subheadline
					buttonLabel
				}
				... on Divider {
					padding
				}
				... on CardsContainer {
					headline
					cards {
						__typename
						... on CardImage {
							image {
								url
							}
						}
						... on CardIcon {
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
