import type { Actions } from './$types';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/environment';
import nodemailer from 'nodemailer';
import type { Email } from '$lib/mail';
import email from '$lib/mail';
import { verify } from 'hcaptcha';
import { HCAPTCHA_SECRET } from '$lib/env';

export const prerender = false;

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	auth: {
		user: SMTP_USERNAME,
		pass: SMTP_PASSWORD
	},
	secure: false, // https://nodemailer.com/smtp/#tls-options
	tls: {
		rejectUnauthorized: !dev
	}
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

export const actions = {
	default: async ({ request }) => {
		const emailPayload = await formData(request);
		const { messageId } = await transporter.sendMail(email(emailPayload));
		return { success: !!messageId };
	}
} satisfies Actions;
