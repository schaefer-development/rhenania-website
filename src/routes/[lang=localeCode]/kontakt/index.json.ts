import type { RequestHandler } from '@sveltejs/kit';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/env';
import nodemailer from 'nodemailer';
import type { Email } from '$lib/mail';
import email, { defaults } from '$lib/mail';
import { verify } from 'hcaptcha';
import { HCAPTCHA_SECRET } from '$lib/env';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	auth: {
		user: SMTP_USERNAME,
		pass: SMTP_PASSWORD
	},
	secure: false, // https://nodemailer.com/smtp/#tls-options
	tls: {
		rejectUnauthorized: !dev,
		ciphers:'SSLv3'
	},
});

const toString: (formData: FormData, keys: string) => string = (formData, key) => {
	const entry = formData.get(key);
	if (typeof entry !== 'string') return '';
	return entry;
};

const formData = async (request: Request): Promise<Email> => {
	const fd = await request.formData();
	const verificationData = await verify(HCAPTCHA_SECRET, toString(fd, 'h-captcha-response'));
	if (!verificationData.success) throw new Error('HCaptcha Verification failed');
	return {
		firma: toString(fd, 'firma'),
		name: toString(fd, 'name'),
		emailAdresse: toString(fd, 'emailAdresse'),
		telefon: toString(fd, 'telefon'),
		nachricht: toString(fd, 'nachricht')
	};
};

const errorBody = `
<p>Beim Versenden der Best&auml;tigungs-Email ist etwas schiefgegangen</p>
<p>Bitte kontaktieren Sie uns mit einer E-Mail an ${defaults.from}</p>
`;

// POST /:seminarFormat/:url/anmeldung.json
export const post: RequestHandler = async ({ request }) => {
	const emailPayload = await formData(request);
	const { messageId } = await transporter.sendMail(email(emailPayload));
	const ok = { status: 303, headers: { location: './kontakt/ok' } };
	const error = { status: 500, body: errorBody };
	const response = messageId ? ok : error;
	return response;
};
