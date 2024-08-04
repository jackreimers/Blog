import { getGraphClient } from '$lib/functions/functions.email';
import {
	PRIVATE_EXCHANGE_CLIENT_ID,
	PRIVATE_EXCHANGE_CLIENT_SECRET,
	PRIVATE_EXCHANGE_TENANT_ID
} from '$env/static/private';

export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		//TODO: Fine grained error messages
		if (!name || name === '') {
			return { success: false };
		}

		//TODO: Validate email format
		if (!email || email === '') {
			return { success: false };
		}

		if (!message || message === '') {
			return { success: false };
		}

		const client = await getGraphClient(
			PRIVATE_EXCHANGE_TENANT_ID,
			PRIVATE_EXCHANGE_CLIENT_ID,
			PRIVATE_EXCHANGE_CLIENT_SECRET
		);

		const payload = {
			message: {
				subject: `Contact Form Submission`,
				body: {
					contentType: 'Text',
					content: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
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

		//const result = await client.api(PUBLIC_GRAPH_ENDPOINT).post(payload);
		return { success: true };
	}
};
