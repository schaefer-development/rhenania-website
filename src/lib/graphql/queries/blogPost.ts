import { gql } from '$lib/helpers';
import { linkFragment, blogPostFragment } from './fragments';
export const BLOG_POST = gql`
	${linkFragment}
	${blogPostFragment}
	query ($slug: String!) {
		blogPost(where: { slug: $slug }) {
			...blogPostFragment
		}
	}
`;
