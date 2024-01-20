import type { Category } from '$lib/types/types';

//TODO: Find a better way to store this information
export const categoryMappings: Category[] = [
	{ slug: 'csharp', name: 'C#' },
	{ slug: 'dotnet', name: '.NET' },
	{ slug: 'aspnetcore', name: 'ASP.NET Core' },
	{ slug: 'javascript', name: 'JavaScript' },
	{ slug: 'typescript', name: 'TypeScript' },
	{ slug: 'svelte', name: 'Svelte' },
	{ slug: 'unity', name: 'Unity' },
	{ slug: 'godot', name: 'Godot' },
	{ slug: 'game-dev', name: 'Game Development' }
];
