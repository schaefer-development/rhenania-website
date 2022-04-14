import { gql } from '$lib/helpers';
import { linkFragment, pageFragment, blogPostFragment } from './fragments';
export const SEARCH = gql`
	${linkFragment}
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
