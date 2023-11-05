import { error } from '@sveltejs/kit';

interface PageLoadResult {
	title: string;
	content: string;
}

export function load(slug: string): PageLoadResult {
	console.log(slug === 'lalala');

	if (slug === 'lalala') {
		return {
			title: 'Hello world!',
			content: `
# This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |
    `
		};
	}

	throw error(404, 'Not found');
}
