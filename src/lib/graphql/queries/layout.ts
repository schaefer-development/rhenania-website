import { gql } from '$lib/helpers';
export const FOOTER = gql`
	{
		referencesContainers {
			id
			referenceItems {
				id
				referenceLogo {
					id
					url
				}
			}
		}
	}
`;
