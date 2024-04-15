import { getAbout } from '$lib/common/functions';

export async function load({ fetch }) {
	return {
		about: await getAbout(fetch)
	};
}
