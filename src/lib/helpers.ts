// A little silly, but offers graphQL syntax highlighting in the editor
export const gql = String.raw;

const mapping = {
	None: '',
	Small: 'rc_padding_small',
	Medium: 'rc_padding_medium',
	Large: 'rc_padding_large'
} as const;
export const mapPadding = (padding: keyof typeof mapping) => mapping[padding];
