import type { ParamMatcher } from '@sveltejs/kit';

const pages = [
	'abliefernachweis',
	'apk',
	'barcodescanner',
	'beipacken',
	'cloudloesung',
	'desadv',
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
	'lagerbestandsfuehrung',
	'mailbenachrichtigung',
	'onlinesupport',
	'paketinhaltsliste',
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
