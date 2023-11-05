<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { load } from './+page';
	import { page } from '$app/stores';

	let data;

	async function loadData() {}
</script>

<SvelteMarkdown source={load($page.params.slug).content} />
