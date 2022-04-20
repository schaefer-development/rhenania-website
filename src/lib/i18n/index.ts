export const locales = [
<<<<<<< HEAD
	{ code: 'en', label: 'English', importFunction: () => import('$lib/i18n/en.json') },
	{ code: 'de', label: 'Deutsch', importFunction: () => import('$lib/i18n/de.json') }
=======
	{ key: 'en', label: 'EN', importFunction: () => import('$lib/i18n/en.json') },
	{ key: 'de', label: 'DE', importFunction: () => import('$lib/i18n/de.json') }
>>>>>>> b6a5c6d (feat: language toggler placed in header)
];
export const localeCodes = locales.map(({ code }) => code);
export const fallbackLocale = 'de';
