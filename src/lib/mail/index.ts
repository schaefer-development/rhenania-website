import { SMTP_EMAIL_FROM } from '$lib/env';
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
    E-Mail Adresse: ${email.emailAdresse}<br>
    Firma: ${email.firma ?? ''}<br>
    Telefonnummer: ${email.telefon ?? ''}
  `;
	return `
  <p>Hallo ${email.name},</p>
  <p>wir haben Ihre Nachricht erhalten und werden uns zeitnah bei Ihnen unter folgenden Kontaktdaten melden:</p>
  <p>${contactDetails}</p>
  <p>Ihre Nachricht lautete wie folgt:</p>
  <blockquote>${email.nachricht}</blockquote>
  <p>Freundliche Grüße</p>
  <p>Ihre RC Rhenania Computer GmbH</p>
`;
};

const text = (email: Email) => html(email).replace(/(<([^>]+)>)/gi, '');

export default function contactRequest(email: Email) {
	return {
		...defaults,
		from: SMTP_EMAIL_FROM,
		subject: 'Kontaktanfrage',
		to: email.emailAdresse,
		text: text(email),
		html: html(email)
	};
}
