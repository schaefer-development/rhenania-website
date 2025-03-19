export const locales = [
	{ code: 'de', label: 'DE', importFunction: () => import('$lib/i18n/de.json') }
];
export const localeCodes = locales.map(({ code }) => code);
export const fallbackLocale = 'de';
