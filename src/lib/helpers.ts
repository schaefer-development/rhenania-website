import { derived } from 'svelte/store';
import { page } from '$app/stores';

export const linkTo = derived(
	[page],
	([$page]): ((path: string | undefined) => string) =>
		(path) => {
			if (!path) return '#';
			if (path.startsWith('/')) return `/${$page.params.lang}${path}`;
			return `/${$page.params.lang}/${path}`;
		}
);

// A little silly, but offers graphQL syntax highlighting in the editor
export const gql = String.raw;

const mapping = {
	None: '',
	Small: 'rc_padding_small',
	Medium: 'rc_padding_medium',
	Large: 'rc_padding_large'
};
export const mapPadding = (padding: string) => mapping[padding];
