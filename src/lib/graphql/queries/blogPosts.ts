import { gql } from '$lib/helpers';
export const BLOG_POSTS = gql`
	query {
		blogPosts {
			id
			slug
			blogpostMetaDescription
			teaserHeadline
			teaserSubheadline
			teaserText
			heroBackgroundImage {
				url
			}
		}
	}
`;
