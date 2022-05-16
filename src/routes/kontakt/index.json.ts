import type { RequestHandler } from '@sveltejs/kit';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/env';
import nodemailer from 'nodemailer';
import type { Email } from '$lib/mail';
import email, { defaults } from '$lib/mail';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	auth: {
		user: SMTP_USERNAME,
		pass: SMTP_PASSWORD
	},
	tls: {
		rejectUnauthorized: !dev
	}
});

const formData = ([request]: Parameters<typeof post>): Email => ({
	firma: request.body.get('firma'),
	name: request.body.get('name'),
	emailAdresse: request.body.get('emailAdresse'),
	telefon: request.body.get('telefon'),
	nachricht: request.body.get('nachricht')
});

const errorBody = `
<p>Beim Versenden der Best&auml;tigungs-Email ist etwas schiefgegangen</p>
<p>Bitte kontaktieren Sie uns mit einer E-Mail an ${defaults.from}</p>
`;

// POST /:seminarFormat/:url/anmeldung.json
export const post: RequestHandler<unknown, FormData> = async (...args) => {
	const { messageId } = await transporter.sendMail(email(formData(args)));
	const ok = { status: 303, headers: { location: '/kontakt/ok' } };
	const error = { status: 500, body: errorBody };
	const response = messageId ? ok : error;
	return response;
};
