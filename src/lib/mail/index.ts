export type Email = {
	firma?: string;
	name: string;
	emailAdresse: string;
	telefon?: string;
	nachricht: string;
};

export const defaults = {
	from: 'info@rhenania.biz',
	bcc: 'info@rhenania.biz'
};

const html = (email: Email) => {
	const contactDetails = `
    Name: ${email.name}<br>
    E-Mail: ${email.emailAdresse}<br>
    Firma: ${email.firma ?? ''}<br>
    Telefon: ${email.telefon ?? ''}
  `;
	return `
	<p>Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich um Ihr Anliegen kümmern und mit Ihnen unter den folgenden Daten Kontakt aufnehmen:</p>
	<p>${contactDetails}</p>
	<p>Ihre Nachricht:<br>${email.nachricht}</p>
	<p>Freundliche Grüße
	<br>
	Ihr Team der RC Rhenania Computer GmbH</p>
`;
};

const text = (email: Email) => html(email).replace(/(<([^>]+)>)/gi, '');

export default function contactRequest(email: Email) {
	return {
		...defaults,
		subject: 'Kontaktanfrage',
		to: email.emailAdresse,
		text: text(email),
		html: html(email)
	};
}
