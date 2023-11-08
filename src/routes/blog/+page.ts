import { PUBLIC_APP_ROOT } from '$env/static/public';
import type { PageLoadRequest, PageLoadResult } from '$lib/types/interfaces';
import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/functions/functions';

/** @type {import('./$types').PageLoad} */
//TODO: Figure out what the type is for params
//@ts-ignore
export async function load({ params }) {
	const posts = await getPosts();
	return { posts };
	//throw error(404, 'Not found');
}
