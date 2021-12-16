import { gql } from '$lib/helpers';
export const PAGE = gql`
	query ($slug: String!) {
		page(where: { slug: $slug }) {
			id
			slug
			modules {
				__typename
				... on Divider {
					id
					padding
				}
				... on Eyecatcher {
					id
					headline
					subheadline
					image {
						id
						url
					}
				}
				... on Faq {
					id
					question
					answer {
						html
					}
				}
				... on HeroImage {
					id
					image {
						id
						url
					}
					icon {
						id
						url
					}
				}
				... on ArticleHeroTeaser {
					id
					headline
					subheadline
					teaserText
					heroBackgroundImage {
						id
						url
					}
				}
				... on CardsContainer {
					id
					headline
					cards {
						__typename
						... on CardImage {
							id
							headline
							image {
								id
								url
							}
						}
					}
				}
			}
		}
	}
`;
