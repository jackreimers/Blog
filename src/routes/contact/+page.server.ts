import { type Actions, error } from '@sveltejs/kit';
import { getGraphClient } from '$lib/functions/functions.email';
import { PUBLIC_GRAPH_ENDPOINT } from '$env/static/public';
import {
	PRIVATE_EXCHANGE_CLIENT_ID,
	PRIVATE_EXCHANGE_CLIENT_SECRET,
	PRIVATE_EXCHANGE_TENANT_ID
} from '$env/static/private';

export const prerender = false;

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!name || name === '') {
			error(400, 'Name is required!');
		}

		if (!email || email === '') {
			error(400, 'Email is required!');
		}

		if (!message || message === '') {
			error(400, 'Message is required!');
		}

		const client = await getGraphClient(
			PRIVATE_EXCHANGE_TENANT_ID,
			PRIVATE_EXCHANGE_CLIENT_ID,
			PRIVATE_EXCHANGE_CLIENT_SECRET
		);

		const payload = {
			message: {
				subject: 'New Contact Form Submission',
				body: {
					contentType: 'Text',
					content: `Name: ${name}\nEmail: ${email}\n\n${message}`
				},
				toRecipients: [
					{
						emailAddress: {
							address: 'me@jackreimers.dev'
						}
					}
				]
			},
			saveToSentItems: 'false'
		};

		try {
			await client.api(PUBLIC_GRAPH_ENDPOINT).post(payload);
		} catch (e) {
			error(500, 'Failed to send message!');
		}

		return { success: true };
	}
} satisfies Actions;
