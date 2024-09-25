import type { ActionReturn } from 'svelte/action';

interface Attributes {
	'on:clickoutside'?: (e: CustomEvent<void>) => void;
}

export function clickOutside(node: HTMLElement): ActionReturn<{}, Attributes> {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickoutside', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export function uppercaseWord(word: string) {
	return word[0].toUpperCase() + word.slice(1);
}
