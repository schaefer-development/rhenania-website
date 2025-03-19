import { gql } from '$lib/helpers';
import {
	linkFragment,
	textAndImageFragment,
	accordingContainerFragment,
	blogPostFragment
} from './fragments';
export const BLOG_POST = gql`
	${linkFragment}
	${textAndImageFragment}
	${accordingContainerFragment}
	${blogPostFragment}
	query ($slug: String!) {
		blogPost(where: { slug: $slug }) {
			...blogPostFragment
		}
	}
`;
