export function serializeSchema(thing) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'Wann dürfen Unternehmen Waren ohne Umsatzsteuer liefern?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Damit Waren ohne Umsatzsteuerausweis ins EU-Ausland geliefert werden dürfen, müssen verschiedene Voraussetzungen erfüllt sein. Unter anderem ist es wichtig, dass die jeweilige Ware tatsächlich in dem EU-Mitgliedstaat angelangt ist, für den sie bestimmt ist. Außerdem ist es erforderlich, dass es sich bei dem Kunden um einen Unternehmer handelt, der über eine eigene Umsatzsteueridentifikationsnummer verfügt. Des Weiteren muss der jeweilige Artikel für das Unternehmen des Kunden gekauft worden sein und darf keinem privaten Zwecken dienen. Ferner muss der Kauf der Ware den Vorschriften der Umsatzbesteuerung im Zielland unterliegen. Das bedeutet, dass der Kunde die jeweilige Versteuerung durchzuführen hat.'
			}
		}
	]
};
