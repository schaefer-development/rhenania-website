import type { Load } from '@sveltejs/kit';
import type { Page } from '$lib/graphql/generated/schema';

// A little silly, but offers graphQL syntax highlighting in the editor
export const gql = String.raw;

export type LoadPageData = {
	page: Page | null;
};

export const LoadPage: (slug: string) => Load =
	(slug) =>
	async ({ fetch }) => {
		const res = await fetch(`/${slug}.json`);
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: { data }
			};
		}

		const {
			errors: [error]
		} = await res.json();

		return {
			status: res.status,
			error: new Error(error.message)
		};
	};

const mapping = {
	Small: 'rc_padding_small',
	Medium: 'rc_padding_medium',
	Large: 'rc_padding_large'
};
export const mapPadding = (padding: string) => mapping[padding];
