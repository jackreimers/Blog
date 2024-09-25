<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('projects');
	});
</script>
<Head
	canonical="https://jackreimers.dev/projects"
	description="See some of the projects that Jack Reimers has worked on in the past."
	title="Jack Reimers | Projects"
/>
<Hero subtitle="See some of the projects I've worked on in the past." title="Projects" />