import type { MarkdownData } from '$lib/interfaces/interfaces';
import { error } from '@sveltejs/kit';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export async function getMarkdownData(fetch: any, href: string): Promise<MarkdownData> {
	const markdownResponse = await fetch(href);
	const markdownData = await markdownResponse.text();

	const matched = markdownData.match(metadataPattern);

	if (!matched) {
		error(500, 'Failed to read markdown metadata!');
	}

	const metadata = matched[1].split('\n');
	const accumulator = metadata.reduce((accumulator: [string, string | string[]][], line: any) => {
		const [key, ...value] = line.split(':').map((part: string) => part.trim());

		if (key) {
			const joinedValue = value[1] ? value.join(':') : value.join('');
			const isArray = arrayPattern.test(joinedValue);

			if (isArray) {
				accumulator.push([key, JSON.parse(joinedValue)]);
			} else {
				accumulator.push([key, joinedValue]);
			}
		}
		return accumulator;
	}, []);

	const mappedMetadata: { [key: string]: string | string[] } = Object.fromEntries(accumulator);

	return {
		metadata: mappedMetadata,
		content: markdownData.split('---').pop()
	};
}
