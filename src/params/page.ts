import type { ParamMatcher } from '@sveltejs/kit';

const pages = [
	'abliefernachweis',
	'apk',
	'barcodescanner',
	'cloudloesung',
	'download',
	'duv',
	'etikettendrucker',
	'f95',
	'faq',
	'frachtkostenmanagement',
	'g10',
	'gefahrgutabwicklung',
	'gelangensbestaetigung',
	'gutschriftsanzeigeverfahren',
	'hardware',
	'k04',
	'karriere',
	'mailbenachrichtigung',
	'onlinesupport',
	'partner',
	'pruefungustid',
	'rechnungskontrolle',
	'referenzen',
	'sandbox',
	'support',
	'termine',
	'u12',
	'verladekontrolle',
	'vka',
	'waagen'
];

export const match: ParamMatcher = (param) => {
	return pages.includes(param);
};
