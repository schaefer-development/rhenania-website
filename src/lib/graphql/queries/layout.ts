import { gql } from '$lib/helpers';
export const LAYOUT = gql`
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
