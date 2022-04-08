import { gql } from '$lib/helpers';
import { linkFragment, pageFragment } from './fragments';
export const PAGE = gql`
	${linkFragment}
	${pageFragment}

	query ($slug: String!) {
		page(where: { slug: $slug }) {
			...pageFragment
		}
	}
`;
