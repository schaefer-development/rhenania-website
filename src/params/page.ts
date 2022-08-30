import type { ParamMatcher } from '@sveltejs/kit';

const pages = [
	'abliefernachweis',
	'apk',
	'barcodescanner',
	'beipacken',
	'cloudloesung',
	'datenschutz',
	'desadv',
	'download',
	'duv',
	'etikettendrucker',
	'f95',
	'faq',
	'frachtkostenmanagement',
	'g10',
	'gefahrgutabwicklung',
	'gelangensnachweis',
	'gutschriftsanzeigeverfahren',
	'hardware',
	'impressum',
	'k04',
	'karriere',
	'lagerbestandsfuehrung',
	'landing1',
	'landing2',
	'landing3',
	'mailbenachrichtigung',
	'onlinesupport',
	'paketinhaltsliste',
	'partner',
	'pruefungustid',
	'rechnungskontrolle',
	'referenzen',
	'sandbox',
	'service',
	'support',
	'termine',
	'u12',
	'ueberuns',
	'verladekontrolle',
	'vka',
	'waagen'
];

export const match: ParamMatcher = (param) => {
	return pages.includes(param);
};
