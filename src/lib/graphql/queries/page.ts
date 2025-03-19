import { gql } from '$lib/helpers';
import {
	linkFragment,
	textAndImageFragment,
	accordingContainerFragment,
	pageFragment
} from './fragments';
export const PAGE = gql`
	${linkFragment}
	${textAndImageFragment}
	${accordingContainerFragment}
	${pageFragment}

	query ($slug: String!) {
		page(where: { slug: $slug }) {
			...pageFragment
		}
	}
`;
