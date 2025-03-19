import { gql } from '$lib/helpers';
import {
	linkFragment,
	textAndImageFragment,
	accordingContainerFragment,
	pageFragment,
	blogPostFragment
} from './fragments';
export const SEARCH = gql`
	${linkFragment}
	${textAndImageFragment}
	${accordingContainerFragment}
	${pageFragment}
	${blogPostFragment}

	query {
		pages {
			...pageFragment
		}
		blogPosts {
			...blogPostFragment
		}
	}
`;
