import { PUBLIC_APP_ROOT } from '$env/static/public';
import type { PageLoadRequest, PageLoadResult } from '$lib/types/interfaces';
import { error } from '@sveltejs/kit';
import { getPost } from '$lib/functions/functions';

//TODO: Move these to their own files

/** @type {import('./$types').PageLoad} */
//TODO: Figure out what the type is for params
//@ts-ignore
export async function load({ params }) {
	return await getPost(params.slug);
	//throw error(404, 'Not found');
}
